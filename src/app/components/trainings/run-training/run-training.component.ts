import {Component, OnInit} from '@angular/core';
import {IStage, ITraining} from '../../../models/training.model';
import {BehaviorSubject} from 'rxjs';
import {RunTraining} from '../../../models/training-iterator.model';

@Component({
  selector: 'app-run-training',
  templateUrl: './run-training.component.html',
  styleUrls: ['./run-training.component.scss']
})
export class RunTrainingComponent implements OnInit {
  rowerTraining: ITraining | undefined;
  stage: IStage | undefined;
  trainingIterator$: BehaviorSubject<IStage | undefined> = new BehaviorSubject<IStage | undefined>(undefined);
  onGoingTraining: RunTraining | undefined;

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
    this.trainingIterator$.subscribe({
      next: onGoingStage => {
        console.log("onGoingStage: ",onGoingStage);
        if(onGoingStage) {
          this.stage = onGoingStage;
          if (this.onGoingTraining?.hasNext()) {
            this.trainingIterator$.next(this.onGoingTraining?.next());
          }
        }
      }
    });
    this.onGoingTraining = new RunTraining(this.rowerTraining);
    this.trainingIterator$.next(this.onGoingTraining.first());

  }
}
