import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITraining } from 'src/app/models/training.model';
import { IStepFormGroup, ITrainingFormGroup } from 'src/app/models/trainingForm';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrl: './trainings-list.component.scss'
})
export class TrainingsListComponent {
  allTrainings: ITraining[];
  selectedTrainingCtrl: FormControl<ITraining | null>;
  isClicOnAddButton = false;
  selectedTrainingFormGroup: FormGroup<ITrainingFormGroup>;
  
  constructor() {
    this.allTrainings = [];
    this.selectedTrainingCtrl = new FormControl<ITraining | null>(null);
    this.selectedTrainingFormGroup = this.initFormGroup();
  }

  add(): void {
    this.isClicOnAddButton = true;
  }

  /**
   * Initialize empty formgroup
   * @returns formgroup
   */
  initFormGroup():FormGroup<ITrainingFormGroup> {
    return new FormGroup<ITrainingFormGroup>({
      id: new FormControl<string>(""),
      label: new FormControl<string>("", [Validators.required]),
      steps: new FormArray<FormGroup<IStepFormGroup>>([])
    });

  }

  onTrainingSelection(): void {

  }
}
