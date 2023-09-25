import {Component, Input} from '@angular/core';
import {IStage} from '../../../models/training.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input({required: true}) stage: IStage | undefined;
  @Input( {required: true}) stages: number = 0;
  @Input({required: true}) minutes$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  @Input({required: true}) seconds$ : BehaviorSubject<number> = new BehaviorSubject<number>(0);

}
