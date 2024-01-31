import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DiscountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: "" , component: DiscountComponent}])
  ]
})
export class DiscountModule { }
