import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-getstudent',
  templateUrl: './getstudent.component.html',
  styleUrls: ['./getstudent.component.scss']
})
export class GetstudentComponent implements OnInit {

  constructor(private studentService:StudentService,private route:ActivatedRoute,private formBuilder: FormBuilder) { }
  id
  updateStudentForm:FormGroup
  ngOnInit(): void {
    this.id = this.route.snapshot.params['student.id'];
    this.detailStudent(this.id)
    this.updateStudentForms();
  }
  updateStudentForms() {
    this.updateStudentForm = this.formBuilder.group({
      Id:[],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailAddress: ['', [Validators.required]],
      EnrollDate: ['', Validators.required]
    })
  }
  detailStudent(id: number) {
    debugger
    this.studentService.getStudentById(id).subscribe(Response=> {
      debugger
      this.updateStudentForm.patchValue({
        Id:Response[0].id,
        FirstName:Response[0].firstName,
        LastName:Response[0].lastName,
        EmailAddress:Response[0].emailAddress,
        EnrollDate:Response[0].enrollDate
      })
      // this.updateStudentForm=res
      // this.valuedata=Response.id
      // this.valuedata1=Response.email_Id
    })

  }
}
