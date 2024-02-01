import { Category } from '../categroy';
import { Discount } from '../discount';

export class Product {
  id?: number;
  name?: string;
  price?: number;
  itemsNumber?: number;
  description?: string;
  category?: Category;
  images?: string[];
  discount?: Discount;
}
