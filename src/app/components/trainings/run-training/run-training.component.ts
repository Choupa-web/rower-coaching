import {Component} from '@angular/core';
import {IDuration, IStage, ITraining} from '../../../models/training.model';
import {BehaviorSubject, concatMap, forkJoin, from, interval, take, takeUntil, tap, timer} from 'rxjs';

@Component({
  selector: 'app-run-training',
  templateUrl: './run-training.component.html',
  styleUrls: ['./run-training.component.scss']
})
export class RunTrainingComponent {
  rowerTraining: ITraining | undefined;
  currentStage: IStage | undefined;
  minutes$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  seconds$ : BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.rowerTraining = {
      label: "Perte de poids",
      stages: [
        {
          duration: {minutes: 1, seconds: 30},
          cadence: 16,
          order: 1
        },
        {
          duration: {minutes: 0, seconds: 30},
          cadence: 28,
          order: 2
        }
      ]
    };
  }

  /**
   * Provide minutes and seconds minus 1 second
   * @param minutes - current minutes
   * @param seconds - current seconds
   */
  getElaspedTime(minutes: number, seconds: number): IDuration {
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
    if(this.rowerTraining && this.rowerTraining.stages.length > 0) {
      from(this.rowerTraining.stages).pipe(
        concatMap(stage => {
          this.currentStage = stage;
          this.minutes$.next(stage.duration.minutes);
          this.seconds$.next(stage.duration.seconds);
          const stageDurationInMs = (stage.duration.minutes*60*1000) + (stage.duration.seconds*1000);
          const cadenceInMs = 60 / stage.cadence * 1000;
          const count$ = timer(stageDurationInMs).pipe(take(1));
          return forkJoin([
            timer(0, cadenceInMs).pipe(takeUntil(count$)),
            interval(1000).pipe(
              take(stageDurationInMs/1000),
              tap(() => {
                const elapsedTime: IDuration = this.getElaspedTime(this.minutes$.value, this.seconds$.value);
                this.seconds$.next(elapsedTime.seconds);
                this.minutes$.next(elapsedTime.minutes);
              })
            )
          ])
        })
      ).subscribe();
    }
  }
}
