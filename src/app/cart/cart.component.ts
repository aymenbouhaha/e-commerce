import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Basket} from "../core/models/base-models/basket/basket";
import {BasketState} from "./store/cart.reducer";
import {Store} from "@ngrx/store";
import {getBasket,removeFromBasketStart} from "./store/cart.actions";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  currentTab: string = 'Tab1';

  basketState$: Observable<BasketState>;

  constructor(private store: Store<{ cart: BasketState }>) {
    this.basketState$ = this.store.select('cart');
  }

  ngOnInit() {
    this.store.dispatch(getBasket({ user: yourUserObject })); //how to get the current user entity
  }

  openTab(tabName: string) {
    this.currentTab = tabName;
  }

  removeProduct(productId: number) {
    this.store.dispatch(removeFromBasketStart({ productId }));
  }

}
