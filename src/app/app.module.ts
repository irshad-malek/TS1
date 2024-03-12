import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Component/student/student.component';
import { CourseComponent } from './courses/course/course.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HttpClientModule } from  '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AddstudentComponent } from './Component/addstudent/addstudent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatestudentComponent } from './Component/updatestudent/updatestudent.component';
import { GetstudentComponent } from './Component/getstudent/getstudent.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddcourseComponent } from './courses/addcourse/addcourse.component';
import { EditcourseComponent } from './courses/editcourse/editcourse.component';
import { DetailcourseComponent } from './courses/detailcourse/detailcourse.component';
import { EmailExistDirective } from './Directives/email-exist.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    NavbarComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    GetstudentComponent,
    AddcourseComponent,
    EditcourseComponent,
    DetailcourseComponent,
    EmailExistDirective
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
