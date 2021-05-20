import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  email=localStorage.getItem("userMail")
  
  getUserData():Observable<any>{
    return this.http.get(`http://localhost:3000/forms/${this.email}`);
  }  

  updatePofile(data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/update/${this.email}`,data)
  }
  getUserData1(){
    let url='http://localhost:3000/enrollQuestionData';
    return this.http.get<any>(url);
 }
}
