import {createReducer} from "@ngrx/store";
import {Order} from "../../../core/models/base-models/order/order";
import {User} from "../../../core/models/base-models/user";

export interface ordersState {
  orders :    Order[] | null
  error :   string | null
  loading : boolean

}

const initialState : ordersState = {
  orders : [new Order(1,new Date(),"waiting")],
  error : null ,
  loading : false
}

export const orderReducer=createReducer(
  initialState,

)
