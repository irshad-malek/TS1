import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})
export class UpdatestudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private studentService:StudentService,public router:Router,private route: ActivatedRoute) { }
  updateStudentForm: FormGroup;
  id
  ngOnInit(): void {
    this.id = this.route.snapshot.params['student.id'];
    this.detailStudent(this.id)
    this.updateStudentForms();
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
  updateStudentForms() {
    this.updateStudentForm = this.formBuilder.group({
      Id:[],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailAddress: ['', [Validators.required]],
      EnrollDate: ['', Validators.required]
    })
  }
  submitted: boolean = false
  get f() { return this.updateStudentForm.controls; }

  onSubmit() {
    
    this.submitted = true;
    if (this.updateStudentForm.invalid) {
      return;
    }
    this.studentService.updateStudent(this.updateStudentForm.value).subscribe(res=>{
      Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, title: 'Updated!', icon: 'success' })
      this.router.navigate(['/Student'])
    })
  }
}
