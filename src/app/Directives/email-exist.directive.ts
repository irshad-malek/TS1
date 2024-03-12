import { Directive, EventEmitter, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, ControlContainer, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BehaviorSubject,  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentService } from '../Services/student.service';


@Directive({
  selector: '[uniqueUsernamevalue]',
  providers: [
    {
      provide:  NG_ASYNC_VALIDATORS,
      useExisting: EmailExistDirective,
      multi: true,
    },
  ],
})


export class EmailExistDirective implements AsyncValidator {
  formUtilisateur: FormGroup;

  constructor(private studentService: StudentService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      const anotherCtrl = control.parent.value.Id;
    debugger
    return this.studentService.emailExist(anotherCtrl,control.value).pipe(
      map(users => {
        return users ? { Email: { value: control.value } } : null;
      })
    );
  }
}



  