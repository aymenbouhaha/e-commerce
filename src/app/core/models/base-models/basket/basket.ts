import { BasketProduct } from './basket-product';
import { ProductInterface } from '../interfaces/product.interface';

export interface Basket {
  id: number;

  basketProduct: BasketProduct[];
}

export interface BasketProductInterface {
  id: number;

  product: ProductInterface;

  itemsNumber: number;
}

export interface BasketInterface {
  id: number;

  basketProduct: BasketProductInterface[];
}
