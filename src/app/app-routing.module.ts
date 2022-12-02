import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductsComponent} from "./Core/Productss/add-products/add-products.component";
import {ShowProductsComponent} from "./Core/Productss/show-products/show-products.component";
import {ListProductComponent} from "./Product/list-product/list-product.component";
import {NotFoundComponent} from "./Shared/not-found/not-found.component";
import {LoginComponent} from "./Core/User/login/login.component";
import {DetailsComponent} from "./Core/Productss/details/details.component";
import {ProductsComponent} from "./products/products.component";
import {HomeComponentComponent} from "./Workshops/3/home-component/home-component.component";
import {FormProductComponent} from "./Core/form-product/form-product.component";

const routes: Routes = [
 /* {
    path:"" , redirectTo:"login",pathMatch:"full"
  },*/
  {
    path:"home",component:HomeComponentComponent
  },
  {
    path:"new",component:AddProductsComponent
  },
  {
    path:"login" , component:LoginComponent
  },
  {
    path:"addproduct",component:AddProductsComponent
  },
  {
    path:"list",component:ShowProductsComponent
  },
  {
    path:"produits" , component:ProductsComponent
  },
  {
    path:"details/:id" , component:DetailsComponent
  },
  {
    path:"form", component:FormProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
