import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  // {
  //   path: 'product',
  //   component: ProductsComponent,
  // },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
