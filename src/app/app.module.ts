import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ListProductComponent } from './Product/list-product/list-product.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './Shared/nav/nav.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { LogoComponent } from './Shared/logo/logo.component';
import { ShowProductsComponent } from './Core/Productss/show-products/show-products.component';
import { AddProductsComponent } from './Core/Productss/add-products/add-products.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { LoginComponent } from './Core/User/login/login.component';
import { DetailsComponent } from './Core/Productss/details/details.component';
import { HomeComponentComponent } from './Workshops/3/home-component/home-component.component';
import { FormProductComponentComponent } from './Workshops/3/form-product-component/form-product-component.component';
import { FormProductComponent } from './Core/form-product/form-product.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ListProductComponent,
    AddProductComponent,
    ProductsComponent,
    NavComponent,
    FooterComponent,
    LogoComponent,
    ShowProductsComponent,
    AddProductsComponent,
    NotFoundComponent,
    LoginComponent,
    DetailsComponent,
    HomeComponentComponent,
    FormProductComponentComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
