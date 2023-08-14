import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RunTrainingComponent } from './components/trainings/run-training/run-training.component';

@NgModule({
  declarations: [
    AppComponent,
    RunTrainingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
