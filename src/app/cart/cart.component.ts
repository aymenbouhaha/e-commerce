import { Component } from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {BasketState, getBasketError, getBasketLoading, getBasketProducts} from "./store/cart.reducer";
import {Store} from "@ngrx/store";
import {removeFromBasketStart} from "./store/cart.actions";
import {Product} from "../core/models/base-models/product/product";
import {GenericComponent} from "../shared/generic/generic.component";
import {MatDialog} from "@angular/material/dialog";
import {selectOrdersLoading} from "../account/orders/Store/orders.reducer";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent extends GenericComponent{
  currentTab: string = 'Tab1';
  selectedShipping: string = 'Free shipping';
  expressShippingCost: number = 15.00;
  currentDate: string | null;


  basketProductsToOrder$: { id: number, itemsNumber: number }[];
  basketProducts: {
    product : Product
    itemsNumber : number
  }[]
  loading$ : Observable<boolean>
  orderloading$ : Observable<boolean>

  constructor(private store: Store< BasketState >,private dialog: MatDialog,private datePipe: DatePipe) {
    super(store.select(getBasketError),store,dialog)
    this.loading$=this.store.select(getBasketLoading);
    this.orderloading$=this.store.select(selectOrdersLoading);
    this.store.select(getBasketProducts).subscribe(
      (value => {
          this.basketProducts=value
        this.basketProductsToOrder$=this.basketProducts.map(productItem => ({
          id: productItem.product.id!,
          itemsNumber: productItem.itemsNumber
        }))
      })
    );
    const now = new Date();
    this.currentDate = this.datePipe.transform(now, 'MMMM dd, yyyy');
  }

  openTab(tabName: string) {
    this.currentTab = tabName;
  }

  removeProduct(productId: number) {
    this.store.dispatch(removeFromBasketStart({ productId }));
  }

  addOrder(){
    // this.store.dispatch(createOrder({products :this.basketProductsToOrder$ }));
  }
}
