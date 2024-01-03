import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface ITrainingFormGroup {
    id?: FormControl<string>;
    label: FormControl<string>;
    steps: FormArray<FormGroup<IStepFormGroup>>;
}

export interface IStepFormGroup {
    id?: FormControl<string>;
    order: FormControl<number>;
    cadence: FormControl<number>;
    minutes: FormControl<number>;
    secondes: FormControl<number>;
}