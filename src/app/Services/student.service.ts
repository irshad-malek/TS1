import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  url:string="https://localhost:7144/api/"
  getStudent(){
   return this.http.get(this.url+"Stundent/getStudent")
  }
  getStudentById(id){
    return this.http.get(this.url+"Stundent/getStudentById/"+id)
   }
  insertStudent(model:any){
    return this.http.post(this.url+"Stundent/InsertStudent",model)
  }
  deleteStudent(id:number){
   return this.http.delete(this.url+"Stundent/DeleteStudent/"+id)
  }
  updateStudent(model:any){
    return this.http.put(this.url+"Stundent/UpdateStudent",model)
  }
  emailExist(id,Email){
    return this.http.get(this.url+"Stundent/EmailExist/"+id+"/"+Email)
  }
}
