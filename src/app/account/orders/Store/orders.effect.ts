import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrderRepositoryService } from 'src/app/core/repositories/order-repository.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as OrderActions from './orders.action';
import { Order } from 'src/app/core/models/base-models/order/order';

@Injectable()
export class OrdersEffects {
  constructor(
    private orderRepository: OrderRepositoryService,
    private action$: Actions
  ) {}

  fetchOrders = createEffect(
    () =>
      this.action$.pipe(
        ofType(OrderActions.startFetchingOrders),
        switchMap(() => {
          return this.orderRepository.getOrders().pipe(
            map((orders) => {
              return OrderActions.fetchedOrders({ orders: orders as Order[] });
            }),
            catchError((err) => {
              return of(OrderActions.errorFetchingOrders({ error: err }));
            })
          );
        })
      ),
    { dispatch: true }
  );
}
