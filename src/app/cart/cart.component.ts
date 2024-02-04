import { Component } from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {BasketState, getBasketError, getBasketLoading, getBasketProducts} from "./store/cart.reducer";
import {Store} from "@ngrx/store";
import {removeFromBasketStart} from "./store/cart.actions";
import {Product} from "../core/models/base-models/product/product";
import {GenericComponent} from "../shared/generic/generic.component";
import {MatDialog} from "@angular/material/dialog";
import {selectOrdersLoading} from "../account/orders/Store/orders.reducer";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends GenericComponent{
  currentTab: string = 'Tab1';

  basketProductsToOrder$: Observable<{ productId: number, itemsNumber: number }[]>;


  basketProducts$: Observable< {
    product : Product
    itemsNumber : number
  }[]>
  loading$ : Observable<boolean>
  orderloading$ : Observable<boolean>

  constructor(private store: Store< BasketState >,private dialog: MatDialog) {
    super(store.select(getBasketError),store,dialog)
    this.loading$=this.store.select(getBasketLoading);
    this.orderloading$=this.store.select(selectOrdersLoading);
    this.basketProducts$ = this.store.select(getBasketProducts);

    this.basketProductsToOrder$ = this.basketProducts$.pipe(
      map(basketProducts =>
        basketProducts.map(productItem => ({
          productId: productItem.product.id,
          itemsNumber: productItem.itemsNumber
        }))
      )
    );
  }

  openTab(tabName: string) {
    this.currentTab = tabName;
  }

  removeProduct(productId: number) {
    this.store.dispatch(removeFromBasketStart({ productId }));
  }

  addOrder(){
    // this.store.dispatch(createOrder(this.basketProductsToOrder$));
  }
}
