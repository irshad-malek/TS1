import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private studentService:StudentService,private router:Router) { }
  addStudentForm: FormGroup;

  ngOnInit(): void {
    this.addStudentForms();
  }

  addStudentForms() {
    this.addStudentForm = this.formBuilder.group({
      Id:[0],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailAddress: ['', [Validators.required]],
      EnrollDate: ['', Validators.required]
    })
  }
  submitted: boolean = false
  get f() { return this.addStudentForm.controls; }

  onSubmit() {
    debugger
    this.submitted = true;
    if (this.addStudentForm.invalid) {
      return;
    }
    this.studentService.insertStudent(this.addStudentForm.value).subscribe(res=>{
      Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, title: 'Inserted!', icon: 'success' })
      this.router.navigate(['/Student']);
    })
  }
}
