import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AccountComponent } from './account.component';
import {AccountRoutingModule} from "./account-routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    GeneralDetailsComponent,
    OrdersComponent,
    WishlistComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class AccountModule { }
