import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IStepFormGroup, ITrainingFormGroup } from 'src/app/models/trainingForm';

@Component({
  selector: 'app-training-edit',
  templateUrl: './training-edit.component.html',
  styleUrl: './training-edit.component.scss'
})
export class TrainingEditComponent implements OnInit {
  @Input() trainingFormGroup: FormGroup<ITrainingFormGroup>;
  lastOrder: number;
  isStepsAdded = false;

  ngOnInit(): void {
    this.lastOrder = this.getLastOrder();
  }

  addStep(): void {
    this.trainingFormGroup.controls['steps'].push(this.createStepFormGroup());
    this.lastOrder = this.getLastOrder();
    this.isStepsAdded = true;
  }

  createStepFormGroup(): FormGroup<IStepFormGroup> {
    return new FormGroup<IStepFormGroup>({
      cadence: new FormControl<number>(0, [Validators.required, Validators.min(16)]),
      minutes: new FormControl<number>(0, [Validators.required]),
      secondes: new FormControl<number>(0, [Validators.required]),
      order: new FormControl<number>(this.lastOrder+1, [Validators.required])
    });
  }

  getLastOrder(): number {
    const orderedSteps = this.trainingFormGroup.controls['steps'].getRawValue().sort((a,b) => a.order > b.order ? -1 : 1);
    return orderedSteps.length > 0 ? orderedSteps[0].order : -1;
  }

}
