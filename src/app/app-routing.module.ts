import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesComponent } from './components/classes/classes.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {path: '', component: ClassesComponent},
  {
    path: 'class', component: ClassesComponent, children: [
      {path: ':id/:className', component: StudentsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
