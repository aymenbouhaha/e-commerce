import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Product} from "../models/product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Prod1 : Product=new Product("1","sofa",100)
  Prod2 : Product=new Product("2","pillow",200)
  Prod3 : Product=new Product("3","Bambo Basket",300)
  WishList : Product[] =[this.Prod1,this.Prod2,this.Prod3]

  constructor() { }
  getWishList(user : User) {
    return this.WishList ;
  }
}
