import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';
import { StudentService } from 'src/app/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.scss']
})
export class EditcourseComponent implements OnInit {

  EditCourseForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }
  id: any
  ngOnInit(): void {
    this.getStudent()
    this.EditCourseForms()
    this.id = this.route.snapshot.params['course.id'];
    this.getCourseById(this.id)
  }
  EditCourseForms() {
    this.EditCourseForm = this.formBuilder.group({
      Id: [],
      courseName: ['', Validators.required],
      studentId: ['', Validators.required]
    })
  }
  studentList: any = []
  submitted: boolean = false
  getStudent() {
    this.studentService.getStudent().subscribe(res => {
      this.studentList = res
    })
  }
  get f() { return this.EditCourseForm.controls; }

  getCourseById(id) {
    this.courseService.getCourseById(id).subscribe(res => {
      debugger
      this.EditCourseForm.patchValue({
        Id: res[0].id,
        courseName: res[0].courseName,
        studentId: res[0].studentId
      })
    })
  }


  onSubmit() {
    debugger
    this.submitted = true;
    if (this.EditCourseForm.invalid) {
      return;
    }
    this.courseService.updateCourse(this.EditCourseForm.value).subscribe(res => {
      Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, title: 'Updated!', icon: 'success' })
      this.router.navigate(['/Course'])
    })

  }

  deleteCourse(){
    
  }
}
