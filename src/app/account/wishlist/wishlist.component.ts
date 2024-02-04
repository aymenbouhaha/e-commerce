import {Component, OnInit} from '@angular/core';
import {Product} from "../../core/models/base-models/product/product";
import {Store} from "@ngrx/store";
import {wishlistReducer} from "./Store/wishlist.reducer";
import {Observable} from "rxjs";
import {Delete, Init, Set} from "./Store/wishlist.actions";
import {selectwishlist} from "./Store/wishlist.selector";


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  wishList$ : Observable<Product[]| null>

  constructor(private store : Store<{wishlist : Product[]}>) {
  this.wishList$ = this.store.select(selectwishlist)
  }
  ngOnInit() {
     this.store.dispatch(Init());
  }
  deleteFromWishlist(product : Product )
  {
    if(product.id !== undefined)
    {
    this.store.dispatch(Delete({productId : product.id }))
    }
  }


}
