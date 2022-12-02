import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as http from "http";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  tab=['a','b','c']
  constructor(private http:HttpClient) { }

  addProduct(data:any){
    return this.http.post('http://localhost:3000/products',data);
  }



  addElementToTab(element:any){
    this.tab.push(element);
    console.log(this.tab);
  }
  obs(){
    return new Observable(
      ()=>{
        console.log('obssssss')
      }
    )
  }



}
