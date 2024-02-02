import {createReducer, on} from "@ngrx/store";
import {Product} from "../../../core/models/base-models/product/product";
import {Delete, Init, Set} from "./wishlist.actions";

const wishListInit=[
  new Product(0,"test",29),
  new Product(1,"test",29),
  new Product(2,"qqa",29),
  new Product(3,"test",222),

]
export const wishlistReducer=createReducer(
  wishListInit,
  on(Delete, (state, {productId}) => state.filter(product => product.id !== productId) ) ,
  on(Set ,(state,{wishlist})=> wishlist ) ,
) ;



