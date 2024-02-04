import { User } from '../user';
import { OrderProduct } from './order-product';
import { BasketProductInterface } from '../basket/basket';

export class Order {
  id?: number;
  status?: string;
  date?: Date;
  client?: User;
  orderProducts?: OrderProduct[];

  constructor(id:number,dates:Date,status : string) {
    this.id=id;
    this.status=status ;
    this.date=dates
}

}

export interface OrderInterface {
  id: number;
  status: string;
  date: Date;
  client?: User;
  orderProducts: BasketProductInterface[];
}
