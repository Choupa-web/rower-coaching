import {Component, DestroyRef, OnInit, inject} from '@angular/core';
import {IStage, ITraining} from '../../../models/training.model';
import {BehaviorSubject, take, timer} from 'rxjs';
import {RunTraining} from '../../../models/training-iterator.model';

@Component({
  selector: 'app-run-training',
  templateUrl: './run-training.component.html',
  styleUrls: ['./run-training.component.scss']
})
export class RunTrainingComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  rowerTraining: ITraining | undefined;
  currentStage: IStage | undefined;
  trainingIterator$: BehaviorSubject<IStage | undefined> = new BehaviorSubject<IStage | undefined>(undefined);
  onGoingTraining: RunTraining<IStage> | undefined;

  ngOnInit() {
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
    /*this.trainingIterator$.subscribe({
      next: onGoingStage => {
        console.log("onGoingStage: ",onGoingStage);
        if(onGoingStage) {
          this.currentStage = onGoingStage;
          if (this.onGoingTraining?.hasNext()) {
            this.trainingIterator$.next(this.onGoingTraining?.next());
          }
        }
      }
    });*/
    this.onGoingTraining = new RunTraining<IStage>(this.rowerTraining.stages);
   

    do {
      this.currentStage = this.onGoingTraining.item;
      const delay = 60/this.currentStage.cadence*1000;
      console.log('delay', delay);
      timer(0,delay).pipe(
        take(60/this.currentStage.cadence)
        ).subscribe({
          next: x => {
            console.log("x: ",this.currentStage?.cadence, x);
          }
        });
        this.onGoingTraining.next();


    } while(!this.onGoingTraining.end)
  
    //this.trainingIterator$.next(this.onGoingTraining.first());


  }
}
