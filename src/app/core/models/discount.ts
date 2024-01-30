import { Product } from './product/product';
import { ProductInterface } from './interfaces/product.interface';

export class Discount {
  id?: string;

  startDate?: Date;

  endDate?: Date;

  value?: number;

  product?: Product;
}

export interface DiscountInterface {
  id: string;

  startDate: Date;

  endDate: Date;

  value: number;

  product: ProductInterface;
}
