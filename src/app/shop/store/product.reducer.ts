import {Product} from "../../core/models/base-models/product/product";
import {createReducer, on} from "@ngrx/store";
import * as ProductActions from "./product.actions"

export interface ProductState {

  products : Product[]

  error : string | null

  loading? : boolean

}


const initialProductsState : ProductState = {
  error : null,
  loading: false,
  products : []
}

export const productReducer = createReducer(
  initialProductsState,
  on(
    ProductActions.startFetchingProducts,
    (state)=>{
      return {
        ...state,
        error : null,
        loading : true
      }
    }
    ),
  on(
    ProductActions.fetchedProducts,
    (state,action)=>{
      return {
        ...state,
        error : null,
        loading : false,
        products : action.products
      }
    }
  ),
  on(
    ProductActions.errorFetchingProducts,
    (state,action)=>{
      return {
        ...state,
        error : action.error,
        loading : false,
      }
    }
  )
)

