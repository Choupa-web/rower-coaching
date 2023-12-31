import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {IDuration, IStage, ITraining} from '../../../models/training.model';
import {
  BehaviorSubject,
  concatMap,
  forkJoin,
  from,
  interval,
  mergeMap,
  Subject,
  take,
  takeUntil,
  tap,
  timer
} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl} from '@angular/forms';
import { ButtonText } from 'src/app/enums/buttons.enum';
import { bruleGraissesTraining, footingEffectTraining, looseWeight1Training } from 'src/app/models/trainings.model';

@Component({
  selector: 'app-run-training',
  templateUrl: './run-training.component.html',
  styleUrls: ['./run-training.component.scss']
})
export class RunTrainingComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  rowerTrainings: Array<ITraining>;
  currentStage: IStage | undefined;
  currentTraining: ITraining | undefined;
  minutes$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  seconds$ : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  trainingCtrl: FormControl<number>;
  isTrainingStarted = false;
  startTextButton = ButtonText.START;
  stopTextButton = ButtonText.STOP;
  audioFile: HTMLAudioElement;
clicOnStop: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.rowerTrainings = [footingEffectTraining, bruleGraissesTraining, looseWeight1Training];
    this.trainingCtrl = new FormControl<number>(0) as FormControl<number>
    this.audioFile = new Audio("http://universal-soundbank.com/sounds/2042.mp3");
  }

  ngOnInit() {
    this.currentTraining = this.rowerTrainings[0];
    this.trainingCtrl.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (selectedTraining: number) => {
        this.currentTraining = this.rowerTrainings ? this.rowerTrainings[selectedTraining] : undefined;
      }
    });
  }

  /**
   * Provide minutes and seconds minus 1 second
   * @param minutes - current minutes
   * @param seconds - current seconds
   */
  getElapsedTime(minutes: number, seconds: number): IDuration {
    let min: number;
    let sec: number;
    if(seconds > 0) {
      sec = seconds-1;
      min= minutes;
    }
    else {
      sec= 59;
      min = minutes > 1 ? minutes-1 : 0;
    }
    return { minutes: min, seconds: sec };
  }

  /**
   * Start rower training
   */
  startTraining(): void {
    if(this.currentTraining && this.currentTraining.stages.length > 0) {
      this.isTrainingStarted = true;
      this.clicOnStop = new Subject<boolean>();
      from(this.currentTraining.stages).pipe(
        takeUntilDestroyed(this.destroyRef),
        concatMap((stage: IStage) => {
          this.currentStage = stage;
          this.minutes$.next(stage.duration.minutes);
          this.seconds$.next(stage.duration.seconds);
          const stageDurationInMs = (stage.duration.minutes*60*1000) + (stage.duration.seconds*1000);
          const cadenceInMs = 60 / stage.cadence * 1000;
          const count$ = timer(stageDurationInMs).pipe(take(1));
          return forkJoin([
            timer(0, cadenceInMs).pipe(
              takeUntil(count$),
              tap(() => this.playBip()
              )),
            interval(1000).pipe(
              take(stageDurationInMs/1000),
              tap(() => {
                const elapsedTime: IDuration = this.getElapsedTime(this.minutes$.value, this.seconds$.value);
                this.seconds$.next(elapsedTime.seconds);
                this.minutes$.next(elapsedTime.minutes);
              })
            )
          ])
        }),
       takeUntil(this.clicOnStop),
      ).subscribe({
        complete: () => {
          this.isTrainingStarted = false;
        }
      });
    }
  }

  playBip(): void {
    this.audioFile.load();
    this.audioFile.play();
  }

  stop(): void {
    this.clicOnStop.next(true);
    this.clicOnStop.complete();
  }
}
