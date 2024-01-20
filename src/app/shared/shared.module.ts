import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ItemsNumberComponent} from "./components/items-number/items-number.component";
import {RouterModule} from "@angular/router";
import { ProductImagesComponent } from './components/product-images/product-images.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ItemsNumberComponent,
    ProductImagesComponent
  ],
  imports: [
    CommonModule,
      RouterModule
  ],
    exports: [
        FooterComponent,
        HeaderComponent,
        ItemsNumberComponent,
        ProductImagesComponent
    ]
})
export class SharedModule { }
