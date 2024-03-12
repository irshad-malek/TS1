import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';
import { StudentService } from 'src/app/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
  submitted: boolean = false
  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private courseService: CourseService,private router:Router) { }

  ngOnInit(): void {
    this.getStudent();
    this.addCourseForms()
  }
  addCourseForm: FormGroup
  onSubmit() {
    debugger
    this.submitted = true;
    if (this.addCourseForm.invalid) {
      return;
    }

    this.courseService.InsertCourse(this.addCourseForm.value).subscribe(res => {
      Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, title: 'Inserted!', icon: 'success' })
      this.router.navigate(['/Course']);

    })
  }
  addCourseForms() {
    this.addCourseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      studentId: ['', Validators.required]
    })
  }
  get f() { return this.addCourseForm.controls; }
  studentList: any = []
  getStudent() {
    this.studentService.getStudent().subscribe(res => {
      this.studentList = res
    })
  }
}
