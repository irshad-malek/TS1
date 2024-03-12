import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { StudentService } from 'src/app/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService, public datePipe: DatePipe,private courseService:CourseService) { }
  searchText: string = "";
  userFilter: any = { firstName: '', lastName: '', emailAddress: '' };

  ngOnInit(): void {
    this.getStudent();
    this.getCourse();
  }
  studentList: any = [];
  getStudent() {
    this.studentService.getStudent().subscribe(res => {
      this.studentList = res
      this.filteredData=res
    })
  }

  filteredData: any = []
  nameFilter: any = null
  Index:number=1
  filterData() {
    debugger
    this.filteredData = this.studentList.filter(item => item.firstName.includes(this.nameFilter) || item.emailAddress.includes(this.nameFilter));
  }
  courseList:any=[]
  getCourse(){
    this.courseService.getCourse().subscribe(res=>{
      this.courseList=res
      
    })
  }
  courseName:string
  currentCourse(studentId){
    
    let courseName = [];
    this.courseList.forEach(element => {
      debugger
      if(element.studentId === studentId) {
        debugger
        courseName.push(element.courseName);
      }
    });
    
    return courseName;
  }
  displayStyle = "none"; 
  id:number
  openPopup(id:number) { 
    this.displayStyle = "block"; 
    this.id=id
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
  deleteStudent(){
    this.studentService.deleteStudent(this.id).subscribe(res=>{
      if(res==true){
        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, title: 'Deleted!', icon: 'success' })
        this.closePopup()
        this.getStudent()
      }
      else{
        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, title: 'student have present in course so not deleted.!', icon: 'warning' })

      }
      
    })
  }
}
