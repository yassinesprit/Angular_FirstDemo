import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../ProductService/product.service";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private s:ProductService) { }

  ngOnInit(): void {

  }

  showForm(t:any){
    console.log(t);
  }

  addP(f:any){
    this.s.addProduct(f).subscribe(
      ()=>{
        console.log("added")
      }
    );
  }
}
