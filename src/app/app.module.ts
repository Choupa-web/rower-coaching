import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RunTrainingComponent } from './components/trainings/run-training/run-training.component';
import { MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { StepComponent } from './components/trainings/step/step.component';
import {RemainingStepsComponent} from './components/trainings/remaining-steps/remaining-steps.component';
import {RemainingStepComponent} from './components/trainings/remaining-step/remaining-step.component';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent, RunTrainingComponent, StepComponent, RemainingStepsComponent, RemainingStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatChipsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  exports: [
    StepComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
