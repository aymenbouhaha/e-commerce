import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DiscountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DiscountComponent }]),
    SharedModule,
  ],
})
export class DiscountModule {}
