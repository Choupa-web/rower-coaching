import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IStepFormGroup } from 'src/app/models/trainingForm';

@Component({
  selector: 'app-training-step',
  templateUrl: './training-step.component.html',
  styleUrl: './training-step.component.scss'
})
export class TrainingStepComponent implements OnInit {
  @Input() trainingStepFormGroup: FormGroup<IStepFormGroup>;

  ngOnInit(): void {
    console.log(this.trainingStepFormGroup.value);
  }
}
