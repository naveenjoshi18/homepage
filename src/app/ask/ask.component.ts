import { Component, OnInit } from '@angular/core';
import { Ask } from './askmodel'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ask = new Ask("","",["C"])
  submit=0;

  onSubmit(){
    console.log(this.ask)
    this.postquestion(this.ask).subscribe(
      data => console.log(data)
    )
    this.submit=1;
  }


  //APIs

  postquestion(ask:any){
    return this.http.post(`http://localhost:3000/ask`,ask)
  }
  dropdownList;
  selectedItems ;
  dropdownSettings;

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'C' },
      { item_id: 2, item_text: 'Java' },
      { item_id: 3, item_text: 'C#' },
      { item_id: 4, item_text: 'HTML' },
      { item_id: 5, item_text: 'CSS' }
    ];
    console.log(this.dropdownList);
    this.dropdownSettings = {
      singleSelection: false,
       idField: 'item_id',
       textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
}