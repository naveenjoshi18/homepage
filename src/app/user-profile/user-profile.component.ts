import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private http: HttpClient,private service:UserServiceService) { }

  ngOnInit(): void {
    this.service.getUserData().subscribe(data=>{
      console.log(data)
      this.userName=data.book1.name +' '+data.book1.lname;
      this.title=data.book1.title;
      this.about=data.book1.about;
      this.location=data.book1.location;
      this.twitter=data.book1.twitterLink;
      this.facebook=data.book1.websiteLink;
      this.github=data.book1.githubLink;
    })
  }
  userName:any;
title:any;
about:any;
location:any;
twitter:any;
facebook:any;
github:any;
onUpdate(){
  this.service.getUserData().subscribe(data=>{
    console.log(data)
    this.userName=data.book1.name +' '+data.book1.lname;
    this.title=data.book1.title;
    this.about=data.book1.about;
    this.location=data.book1.location;
    this.twitter=data.book1.twitterLink;
    this.facebook=data.book1.websiteLink;
    this.github=data.book1.githubLink;
  })
}
  

}
