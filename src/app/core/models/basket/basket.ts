import { BasketProduct } from './basket-product';
import { ProductInterface } from '../interfaces/product.interface';

export class Basket {
  id?: string;

  basketProduct?: BasketProduct[];
}

export interface BasketProductInterface {
  id: string;

  product: ProductInterface;

  itemsNumber: number;
}

export interface BasketInterface {
  id: string;

  basketProduct: BasketProductInterface[];
}
