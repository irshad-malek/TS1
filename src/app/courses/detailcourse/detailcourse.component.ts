import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-detailcourse',
  templateUrl: './detailcourse.component.html',
  styleUrls: ['./detailcourse.component.scss']
})
export class DetailcourseComponent implements OnInit {
  EditCourseForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private studentService:StudentService,private courseService:CourseService,private route:ActivatedRoute) { }
  id:any
  ngOnInit(): void {
    this.getStudent()
    this.EditCourseForms()
    this.id=this.route.snapshot.params['course.id'];
    this.getCourseById(this.id)
  }
  EditCourseForms(){
    this.EditCourseForm =this.formBuilder.group({
      courseName: [''],
      studentId: ['']
    })
  }
  studentList: any = []
  getStudent() {
    this.studentService.getStudent().subscribe(res => {
      this.studentList = res
    })
  }

  getCourseById(id){
    this.courseService.getCourseById(id).subscribe(res=>{
      debugger
      this.EditCourseForm.patchValue({
        courseName:res[0].courseName,
        studentId:res[0].studentId
      })
    })
  }
}
