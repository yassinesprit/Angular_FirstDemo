import { Component, OnInit  } from '@angular/core';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  search=-1;
  //produit:Product;
  listProdcut:Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  constructor() { }

  ngOnInit(): void {
  }

  decrementQuantite(pt:Product){
    let index = this.listProdcut.indexOf(pt);
    if (index!=-1){
    this.listProdcut[index].quantity -- ;
    }
  }
  /*incrementLike(pt:Product){
    let index = this.listProdcut.indexOf(pt);
    if (index!=-1){
    this.listProdcut[index].like ++ ;
    }
  }*/

  incrementLike(indice:number){
        this.listProdcut[indice].like ++ ;
    
  }
}
