import {Component, Input} from '@angular/core';
import {IStage} from '../../../models/training.model';

@Component({
  selector: 'app-remaining-step',
  templateUrl: './remaining-step.component.html',
  styleUrl: './remaining-step.component.scss'
})
export class RemainingStepComponent {
  get stage(): IStage {
    return this._stage;
  }

  @Input() set stage(value: IStage) {
    this._stage = value;
  }

  private _stage: IStage = {
    duration: {minutes: 0, seconds: 0},
    cadence: 0,
    order: 999
  };
}
