import { Component, OnDestroy } from '@angular/core';
import { User } from '../../core/models/base-models/user';
import { Order } from '../../core/models/base-models/order/order';
import { Store } from '@ngrx/store';
import { GenericComponent } from 'src/app/shared/generic/generic.component';
import { OrdersState, selectOrdersLoading } from './Store/orders.reducer';
import { MatDialog } from '@angular/material/dialog';
import { getProductsError } from 'src/app/shop/store/product.reducer';
import * as OrderActions from '../orders/Store/orders.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent extends GenericComponent implements OnDestroy {
  user: User = new User(0); // Example user
  orders: Order[] = [];
  loading$: Observable<boolean> = new Observable<boolean>();
  constructor(private store: Store<OrdersState>, private dialog: MatDialog) {
    super(store.select(getProductsError), store, dialog);
    this.store.dispatch(OrderActions.startFetchingOrders());
    this.loading$ = this.store.select(selectOrdersLoading);
  }
  ngOnDestroy(): void {
    this.destroySubscription();
  }
}
