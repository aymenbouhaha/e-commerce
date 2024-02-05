import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/core/models/base-models/order/order';
import {START_REMOVE_FROM_BASKET} from "../../../cart/store/cart.actions";

export const START_FETCHING_ORDERS = '[ORDERS] START_FETCHING_ORDERS';
export const FETCHED_ORDERS = '[ORDERS] FETCHED_ORDERS';
export const ORDERS_ERROR = '[ORDERS] ORDERS ERROR';
export const CREATE_ORDER = '[ORDERS] CREATE ORDER';


export const startFetchingOrders = createAction(START_FETCHING_ORDERS);

export const fetchedOrders = createAction(
  FETCHED_ORDERS,
  props<{ orders: Order[] }>()
);

export const errorFetchingOrders = createAction(
  ORDERS_ERROR,
  props<{ error: string }>()
);

export const createOrder=createAction(
  CREATE_ORDER,
  props<{id : number, itemsNumber : number}>()
)

export const CLEAR_ORDER_ERROR = '[ORDERS] CLEAR_ORDER_ERROR';
export const clearOrderError = createAction(CLEAR_ORDER_ERROR);
