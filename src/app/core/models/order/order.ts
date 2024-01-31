import { User } from '../user';
import { OrderProduct } from './order-product';
import { BasketProductInterface } from '../basket/basket';

export class Order {
  id?: string;
  status?: string;
  date?: Date;
  client?: User;
  orderProducts?: OrderProduct[];
}

export interface OrderInterface {
  id: string;
  status: string;
  date: Date;
  client?: User;
  orderProducts: BasketProductInterface[];
}
