import { User } from '../user';
import { OrderProduct } from './order-product';
import { BasketProductInterface } from '../basket/basket';

export class Order {

  id?: string;
  status?: string;
  date?: Date;
  client?: User;
  orderProducts?: OrderProduct[];

  constructor(
    id: string,
    status:string ,
    date : Date ,
    client : User
  ) {
    this.id = id;
    this.status = status;
    this.date = date;
    this.client = client;
  }
}


export interface OrderInterface {
  id: string;
  status: string;
  date: Date;
  client?: User;
  orderProducts: BasketProductInterface[];
}
