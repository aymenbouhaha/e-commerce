import { Component } from '@angular/core';
import {Observable, tap} from "rxjs";
import {BasketState, getBasketError, getBasketLoading, getBasketProducts} from "./store/cart.reducer";
import {Store} from "@ngrx/store";
import {removeFromBasketStart} from "./store/cart.actions";
import {Product} from "../core/models/base-models/product/product";
import {GenericComponent} from "../shared/generic/generic.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends GenericComponent{
  currentTab: string = 'Tab1';

  basketProducts$: Observable< {
    product : Product
    itemsNumber : number
  }[]>
  loading$ : Observable<boolean>


  constructor(private store: Store< BasketState >,private dialog: MatDialog) {
    super(store.select(getBasketError),store,dialog)
    this.loading$=this.store.select(getBasketLoading);
    this.basketProducts$ = this.store.select(getBasketProducts);
  }

  openTab(tabName: string) {
    this.currentTab = tabName;
  }

  removeProduct(productId: number) {
    this.store.dispatch(removeFromBasketStart({ productId }));
  }

}
