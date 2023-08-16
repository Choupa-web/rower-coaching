import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RunTrainingComponent} from './components/trainings/run-training/run-training.component';

const routes: Routes = [
  { path: 'test', component: RunTrainingComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
