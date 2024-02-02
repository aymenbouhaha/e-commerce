import { Component } from '@angular/core';
import {User} from "../../core/models/base-models/user";
import {Order} from "../../core/models/base-models/order/order";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectorders} from "./Store/orders.selector";
import {selectUser} from "../general-details/Store/general-details.selector";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {


  User$: Observable<User | null>// Example user
  orders$: Observable<Order[] | null>
  constructor(private store : Store<{orders : Order[]}>) {
    this.orders$=this.store.select(selectorders)
    this.User$=this.store.select(selectUser)
  }

}
