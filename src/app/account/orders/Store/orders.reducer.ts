import {createReducer} from "@ngrx/store";
import {Order} from "../../../core/models/base-models/order/order";

initialOrders: Order[]=[new Order(),]
export const ordersReducer=createReducer()
