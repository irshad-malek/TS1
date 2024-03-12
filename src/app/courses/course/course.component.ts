import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';
import { StudentService } from 'src/app/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private courseService: CourseService,private router:Router) { }
  Index:number=1;
  ngOnInit(): void {
    this.getCourse()
    this.getStudent()
    this.addCourseForms()
  }
  courseList:any=[]
  getCourse(){
    this.courseService.getCourse().subscribe(res=>{
      this.courseList=res
      
    })
  }
  displayStyle = "none"; 
  displayStyleAdd="none";
  id:number
  displayStyleEdit="none"
  openStudentPopUp(){
    this.submitted=false;
    this.id=0
    this.displayStyleAdd = "block"; 
  }
  openStudentEditPopUp(id){
    debugger
    this.displayStyleEdit = "block"; 
    this.id=id
    this.getCourseById()
  }
  closeStudentEditPopUp(){
    this.displayStyleEdit = "none"; 
    this.addCourseForms()
  }
  closeStudentPopUp(){
    this.displayStyleAdd = "none"; 
    this.addCourseForms()

  }
  openPopup(id:number) { 
    this.displayStyle = "block"; 
    this.id=id
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
  deleteCourse(){
    this.courseService.deleteCourse(this.id).subscribe(res=>{
      Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, title: 'Deleted!', icon: 'success' })
      this.closePopup()
      this.getCourse()
    })
  }

  addCourseForm: FormGroup;
  
  submitted:boolean=false;
  getCourseById() {
    this.courseService.getCourseById(this.id).subscribe(res => {
      debugger
      this.addCourseForm.patchValue({
        Id: res[0].id,
        courseName: res[0].courseName,
        studentId: res[0].studentId
      })
    })
  }
  onSubmit() {
    debugger
    this.submitted = true;
    if (this.addCourseForm.invalid) {
      return;
    }
    debugger
    if(this.id==null || this.id==0){
      this.courseService.InsertCourse(this.addCourseForm.value).subscribe(res => {
        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, title: 'Inserted!', icon: 'success' })
        this.getCourse()
        // this.router.navigate(['/Course']);
        this.closeStudentPopUp()
      })
    }
      else{
      this.courseService.updateCourse(this.addCourseForm.value).subscribe(res => {
        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, title: 'Updated!', icon: 'success' })
        // this.router.navigate(['/Course'])
        this.getCourse()
        this.closeStudentEditPopUp()
      })
    }
  }
  addCourseForms() {
    this.addCourseForm = this.formBuilder.group({
      Id:[0],
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
