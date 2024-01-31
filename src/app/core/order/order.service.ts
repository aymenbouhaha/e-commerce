import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BasketService} from "../basket/basket.service";
import {Order} from "../models/order/order";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  User1: User =new User("1","firas","saada","bizerta","hey@jj","20202020","student",true)
  User2: User =new User("2","firas","saada","bizerta","hey@jj","20202020","student",true)
  Order1: Order =new Order("1","not yet",new Date('2024-01-30T12:00:00'),this.User1);
  Order2: Order =new Order("2","Delievered",new Date('2024-01-30T12:00:00'),this.User1);
  Order3: Order =new Order("3","Delievered",new Date('2024-01-30T12:00:00'),this.User2);
  Orders=[this.Order1,this.Order2,this.Order3]

  constructor(
//    private http: HttpClient,
    private router: Router,
//    private basketService: BasketService
  ) {}

  GetOrders(user : User) {
    //how to access all orders of a user
    return this.Orders.filter(order => order.client === user);
  }
}
