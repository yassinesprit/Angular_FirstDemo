import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  class="4sae1";
  color="blue";

  constructor() { }

  ngOnInit(): void {
  }

  showMsg(){
    console.log('bonjour')
  }
  changeColor(){
    this.color="pink";
  }
}
