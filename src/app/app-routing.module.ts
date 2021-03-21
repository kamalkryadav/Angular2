import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {path:"" , pathMatch:"full" , redirectTo:"/course"},
  {path:"course", component: CourseComponent},
  {path: "apply", component: ApplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
