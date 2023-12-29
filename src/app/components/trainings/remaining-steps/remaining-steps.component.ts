import {Component, Input} from '@angular/core';
import {IStage} from '../../../models/training.model';

@Component({
  selector: 'app-remaining-steps',
  templateUrl: './remaining-steps.component.html',
  styleUrl: './remaining-steps.component.scss'
})
export class RemainingStepsComponent {
  @Input() allSteps: Array<IStage> = [];

  @Input() set currentOrder(value: number) {
    this.remainingOrder = value + 1;
    this._currentOrder = value;
  }

  get currentOrder() {
    return this._currentOrder;
  }

  _currentOrder: number = 0;
  remainingOrder: number = 0;


}
