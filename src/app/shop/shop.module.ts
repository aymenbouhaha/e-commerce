import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ShopComponent, ProductDetailsComponent, ProductsComponent],
    imports: [CommonModule, ShopRoutingModule, RouterModule, SharedModule, NgOptimizedImage],
})
export class ShopModule {}
