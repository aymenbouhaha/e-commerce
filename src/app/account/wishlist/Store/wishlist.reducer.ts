import {createReducer, on} from "@ngrx/store";
import {Product} from "../../../core/models/base-models/product/product";
import {Delete, Init, Set} from "./wishlist.actions";
import {Order} from "../../../core/models/base-models/order/order";
export interface wishlistState {
  wishlist :    Product[] | null
  error :   string | null
  loading : boolean

}

const initialState : wishlistState = {
  wishlist: [
    new Product(0,"test",29),
    new Product(1,"test",29),
    new Product(2,"qqa",29),
    new Product(3,"test",222),

  ] ,
  error : null ,
  loading : false
}


export const wishlistReducer=createReducer(
  initialState,
  on(Delete, (state, {productId}) =>
  {
    return {
      ...state,
      wishlist: state.wishlist ? state.wishlist.filter(product => product.id !== productId) : [],
      error : null ,
      loading : false,
    }
  }),
  on(Set ,(state,{wishlist})=>
  {
    return {
      ...state,
      wishlist : wishlist,
      error : null ,
      loading : false,
    }
  }
) ,
) ;



