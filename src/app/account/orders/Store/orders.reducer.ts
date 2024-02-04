import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Order } from '../../../core/models/base-models/order/order';
import * as OrderActions from './orders.action';

export interface OrdersState {
  orders: Order[];
  error: string | null;
  loading: boolean;
}
const initialOrdersState: OrdersState = {
  error: null,
  loading: false,
  orders: [],
};
export const ordersReducer = createReducer(
  initialOrdersState,
  on(OrderActions.startFetchingOrders, (state) => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  }),
  on(OrderActions.fetchedOrders, (state, action) => {
    return {
      ...state,
      error: null,
      loading: false,
      orders: action.orders,
    };
  }),
  on(OrderActions.errorFetchingOrders, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false,
    };
  }),
  on(OrderActions.clearOrderError, (state) => {
    return {
      ...state,
      error: null,
    };
  })
);
const ordersFeatureSelector = createFeatureSelector<OrdersState>('orders');
export const selectOrders = createSelector(
  ordersFeatureSelector,
  (state) => state.orders
);
export const selectOrdersError = createSelector(
  ordersFeatureSelector,
  (state) => state.error
);
export const selectOrdersLoading = createSelector(
  ordersFeatureSelector,
  (state) => state.loading
);
