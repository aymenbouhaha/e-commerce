import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsNumberComponent } from './components/items-number/items-number.component';
import { RouterModule } from '@angular/router';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ItemsNumberComponent,
    ProductImagesComponent,
    ProductItemComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    ItemsNumberComponent,
    ProductImagesComponent,
    ProductItemComponent,
    MatDividerModule,
  ],
})
export class SharedModule {}
