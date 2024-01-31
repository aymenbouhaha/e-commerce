import { Category } from '../categroy';
import { Discount } from '../discount';

export interface ProductInterface {
  id: string;
  name: string;
  price: number;
  itemsNumber: number;
  description: string;
  category: Category;
  images: ImageInterface[];
  discount: Discount;
}

export interface GetProductInterface {
  products: ProductInterface[];
  length: number;
}

export interface ImageInterface {
  id: string;
  name: string;
  type: string;
  data: { type: string; data: Buffer };
}
