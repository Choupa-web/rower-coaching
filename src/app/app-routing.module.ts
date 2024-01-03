import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RunTrainingComponent} from './components/trainings/run-training/run-training.component';
import { TrainingsListComponent } from './components/creation/trainings-list/trainings-list.component';

const routes: Routes = [
  { path: 'trainings', component: TrainingsListComponent },
  { path: '**', component: RunTrainingComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
