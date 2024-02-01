import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "../auth/sign-up/sign-up.component";
import {AccountComponent} from "./account.component";
import {GeneralDetailsComponent} from "./general-details/general-details.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {OrdersComponent} from "./orders/orders.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component : AccountComponent
      },
      {
        path: 'general-details',
        component: GeneralDetailsComponent,
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ],
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class AccountRoutingModule { }
