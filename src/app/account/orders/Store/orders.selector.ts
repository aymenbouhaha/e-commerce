import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AccountState} from "../../general-details/Store/general-details.reducer";
import {ordersState} from "./orders.reducer";

const ordersFeatureState = createFeatureSelector<ordersState>("orders")

export const selectorders = createSelector(
  ordersFeatureState ,
  (state) => state.orders
)
