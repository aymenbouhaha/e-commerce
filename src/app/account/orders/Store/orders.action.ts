import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/core/models/base-models/order/order';

export const START_FETCHING_ORDERS = '[ORDERS] START_FETCHING_ORDERS';
export const FETCHED_ORDERS = '[ORDERS] FETCHED_ORDERS';
export const ORDERS_ERROR = '[ORDERS] ORDERS ERROR';

export const startFetchingOrders = createAction(START_FETCHING_ORDERS);

export const fetchedOrders = createAction(
  FETCHED_ORDERS,
  props<{ orders: Order[] }>()
);

export const errorFetchingOrders = createAction(
  ORDERS_ERROR,
  props<{ error: string }>()
);

export const CLEAR_ORDER_ERROR = '[ORDERS] CLEAR_ORDER_ERROR';
export const clearOrderError = createAction(CLEAR_ORDER_ERROR);
