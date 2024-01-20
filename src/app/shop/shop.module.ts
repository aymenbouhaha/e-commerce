import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ShopRoutingModule} from "./shop-routing.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";




@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule, ShopRoutingModule, RouterModule , SharedModule
  ]
})
export class ShopModule { }
