import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../ProductService/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private  ps:ProductService) { }

  ngOnInit(): void {
    this.ps.obs().subscribe(
      (d)=>{
        console.log(d);
      }
    );
  }

}
