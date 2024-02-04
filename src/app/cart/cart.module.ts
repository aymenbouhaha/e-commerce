import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    CartComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: "", component: CartComponent}]),
        SharedModule,
    ]
})
export class CartModule { }
