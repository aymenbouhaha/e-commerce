import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ShopRoutingModule} from "./shop-routing.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule , ShopRoutingModule , RouterModule
  ]
})
export class ShopModule { }
