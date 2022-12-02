import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
product:any=[];
etat:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
addElementToTable(element:any){
  this.product.push(element);
}
changeEtat(){
   if (this.etat==false)
   {
     this.etat=true;
   }
   else
     this.etat=false;
}
}
