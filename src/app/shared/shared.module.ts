import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsNumberComponent } from './components/items-number/items-number.component';
import { RouterModule } from '@angular/router';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ItemComponent } from './components/item/item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ServicesComponent } from './components/services/services.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ItemsNumberComponent,
    ProductImagesComponent,
    ProductItemComponent,
    ItemComponent,
    ServicesComponent,
  ],
  imports: [CommonModule, RouterModule, MatInputModule, MatFormFieldModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    ItemsNumberComponent,
    ProductImagesComponent,
    ProductItemComponent,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    ItemComponent,
    MatGridListModule,
    ServicesComponent,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
})
export class SharedModule {}
