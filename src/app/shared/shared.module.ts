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
import { MatGridListModule } from '@angular/material/grid-list';
import { ServicesComponent } from './components/services/services.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {OverlayModule} from "@angular/cdk/overlay";
import { PricePipe } from './pipes/price.pipe';
import { ImagePipe } from './pipes/image.pipe';
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
    ServicesComponent,
    LoaderComponent,
    DialogComponent,
    PricePipe,
    ImagePipe,
  ],
  imports: [CommonModule, RouterModule, MatInputModule, MatFormFieldModule,MatDialogModule, MatButtonModule,OverlayModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    ItemsNumberComponent,
    ProductImagesComponent,
    ProductItemComponent,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    ServicesComponent,
    LoaderComponent,
    OverlayModule,
    MatDialogModule,
    PricePipe,
    ImagePipe,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
})
export class SharedModule {}
