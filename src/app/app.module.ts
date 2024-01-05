import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RunTrainingComponent } from './components/trainings/run-training/run-training.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { StepComponent } from './components/trainings/step/step.component';
import { RemainingStepsComponent } from './components/trainings/remaining-steps/remaining-steps.component';
import { RemainingStepComponent } from './components/trainings/remaining-step/remaining-step.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TrainingsListComponent } from './components/creation/trainings-list/trainings-list.component';
import { TrainingEditComponent } from './components/creation/training-edit/training-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { TrainingStepComponent } from './components/creation/training-step/training-step.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    RunTrainingComponent,
    StepComponent,
    RemainingStepsComponent,
    RemainingStepComponent,
    TrainingsListComponent,
    TrainingEditComponent,
    TrainingStepComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatIconModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
