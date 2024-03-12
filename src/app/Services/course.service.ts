import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  url:string="https://localhost:7144/api/"
  getCourse(){
    return this.http.get(this.url+"Course/GetCourse")
  }
  InsertCourse(model:any){
    return this.http.post(this.url+"Course/InsertCourse",model)
  }
  deleteCourse(id:number){
    return this.http.delete(this.url+"Course/DeleteCourse/"+id)
  }
  updateCourse(model:any){
    return this.http.put(this.url+"Course/updateCourse",model)
  }
  getCourseById(id){
    return this.http.get(this.url+"Course/GetCourseById/"+id);
  }
}
