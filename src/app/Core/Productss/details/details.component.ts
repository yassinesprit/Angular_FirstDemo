import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any;
  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.ac.snapshot.params['id']);//send request to db
    this.id=this.ac.snapshot.params['id'];
  }

}
