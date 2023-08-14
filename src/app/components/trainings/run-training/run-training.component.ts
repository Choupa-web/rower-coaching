import {Component, OnInit} from '@angular/core';
import {ITraining} from '../../../models/training.model';

@Component({
  selector: 'app-run-training',
  templateUrl: './run-training.component.html',
  styleUrls: ['./run-training.component.scss']
})
export class RunTrainingComponent implements OnInit {
 rowerTrainings: Array<ITraining> = [];

 ngOnInit() {
   this.rowerTrainings = [
     {
       label: "Perte de poids",
       stages: [
         {
           duration : { minutes:1, seconds:30 },
           cadence: 16,
           order: 1
         },
         {
           duration : { minutes:0, seconds:30 },
           cadence: 28,
           order: 2
         }
       ]
     }
   ];
 }
}
