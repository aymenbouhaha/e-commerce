import { Component } from '@angular/core';
import {Product} from "../../core/models/base-models/product/product";


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {


  wishList? : Product[]=[
    new Product(0,"test",29),
    new Product(0,"test",29),
    new Product(0,"test",29),
    new Product(0,"test",29),
    new Product(0,"test",29),
  ]


}
