import { Product } from '../product/product';

export interface BasketProduct {
  id: number;

  product: Product;

  itemsNumber: number;
}
