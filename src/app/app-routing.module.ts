import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './Component/student/student.component';
import { CourseComponent } from './courses/course/course.component';
import { AddstudentComponent } from './Component/addstudent/addstudent.component';
import { UpdatestudentComponent } from './Component/updatestudent/updatestudent.component';
import { GetstudentComponent } from './Component/getstudent/getstudent.component';
import { AddcourseComponent } from './courses/addcourse/addcourse.component';
import { DetailcourseComponent } from './courses/detailcourse/detailcourse.component';
import { EditcourseComponent } from './courses/editcourse/editcourse.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'Student', component: StudentComponent },
  { path: 'Course', component: CourseComponent },
  { path: 'AddCourse', component: AddcourseComponent },
  {path:'AddStudent',component:AddstudentComponent},
  {
    path: 'Edit/:student.id', component: UpdatestudentComponent
  },
  {
    path:'Details/:student.id',component:GetstudentComponent
  },
  {
    path:'CourseDetails/:course.id',component:DetailcourseComponent
  },
  {path:'CourseEdit/:course.id',component:EditcourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
