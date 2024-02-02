import { Component } from '@angular/core';
import {User} from "../../core/models/base-models/user";
import {Order} from "../../core/models/base-models/order/order";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {


  user: User =new User(0); // Example user
  orders: Order[] = [];
  constructor(private store : Store) {
  }

}
