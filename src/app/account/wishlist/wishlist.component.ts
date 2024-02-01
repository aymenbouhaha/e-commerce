import { Component } from '@angular/core';
import {ProductService} from "../../core/product/product.service";
import {UserService} from "../../core/user/user.service";
import {Product} from "../../core/models/product/product";
import {User} from "../../core/models/user";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishList? : Product[]
  User? : User
  constructor(private productService : ProductService ,private userService :UserService) {
  }
  ngOnInit() {
    this.User=this.userService.User1
    this.wishList = this.productService.getWishList(this.User)
  }




}
