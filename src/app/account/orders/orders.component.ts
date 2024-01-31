import { Component } from '@angular/core';
import {User} from "../../core/models/user";
import {OrderService} from "../../core/order/order.service";
import {Order} from "../../core/models/order/order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private orderService : OrderService) {
  }
  user: User =this.orderService.User1; // Example user
  orders: Order[] = [];

  ngOnInit() : void {
    this.orders = this.orderService.GetOrders(this.user) ;
  }

}
