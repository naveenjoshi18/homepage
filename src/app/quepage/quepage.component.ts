import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-quepage',
  templateUrl: './quepage.component.html',
  styleUrls: ['./quepage.component.css']
})
export class QuepageComponent implements OnInit {

  id: any;
  iddata: any;
  tag: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  addans(ans: any) {
    console.log(ans)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })

    //console.log(this.id)
    this.gets().subscribe(
      data =>{
        this.iddata = data
        this.tag=this.iddata.tag;
      }

      )
  }

  //APIs
  //APIs
  gets() {
    return this.http.get(`http://localhost:3000/quesdetail/${this.id}`)
  }

}
