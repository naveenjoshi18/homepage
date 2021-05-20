import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router'
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router,private service:UserServiceService) { }

  titles:any; 

  loadque(i:any){
    this.router.navigate(['/quesdetail',i._id])
  }


  ngOnInit(): void {
    // this.gets().subscribe(
    //   data => this.titles= data
    //   )
    this.service.getUserData1().subscribe(data=>{
      this.showpost=data;
      console.log(this.showpost);
    })

  }
  today=Date.now();
  views=0;
  votes=0;
  answers=0;
  showpost;
  fakepost=[{title:"Title of the question",tag:["tag1","tag2"]},{title:"Title of the question",tag:["tag1","tag2"]}]
  

  //APIs  
  // gets(){
  //   return this.http.get(`http://localhost:3000/questions`)
  // }
}
