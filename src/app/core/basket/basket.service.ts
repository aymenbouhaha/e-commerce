import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product/product';
import { Basket } from '../models/basket/basket';
import { BasketProduct } from '../models/basket/basket-product';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private basket?: Basket;

  basketChanged = new Subject<Basket>();

  constructor() {}

  getBasket() {
    return this.basket;
  }

  setBasket(basket: Basket) {
    this.basket = basket;
    this.basketChanged.next(this.basket);
  }

  removeFromBasket(productId: string) {
    const productIndex = this.basket?.basketProduct?.findIndex(
      (basketProduct: BasketProduct) => {
        return basketProduct?.product?.id == productId;
      }
    );
    this.basket?.basketProduct?.splice(productIndex as number, 1);
    this.basketChanged.next(this.basket as Basket);
  }

  addToBasket(product: Product, itemsNumber: number, id: string) {
    this.basket?.basketProduct?.push({
      product: product,
      itemsNumber: itemsNumber,
      id: id,
    });
  }
}
