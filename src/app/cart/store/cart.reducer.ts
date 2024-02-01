import {Product} from "../../core/models/base-models/product/product";
import {createReducer, on} from "@ngrx/store";
import * as CartActions from "./cart.actions"

export interface BasketState{
  loading : boolean
  error : string | null
  products : {
    product : Product
    itemsNumber : number
  }[]
}



export const cartInitialState : BasketState= {
  loading : false,
  error : null,
  products : []
}


export const cartReducer=createReducer(
  cartInitialState,
  on(CartActions.setBasket,(state,action)=>{
    const products = action.basket.basketProduct.map((element)=>{
      return {
        product : element.product,
        itemsNumber : element.itemsNumber
      }
    })
    return{
      ...state,
      products : products
    }
  }),
  on(CartActions.addToBasketSuccess,(state,action)=>{
    const  prevProducts = [...state.products]
    const newPrevProductsRef = prevProducts.map((ele)=>{
      return {
        ...ele
      }
    })
    newPrevProductsRef.push({product : action.product, itemsNumber: action.itemsNumber})
    return{
      ...state,
      loading : false,
      products : newPrevProductsRef
    }
  }),
  on(CartActions.removeFromBasketStart,(state,action)=>{
    const  prevProducts = [...state.products]
    const newPrevProductsRef = prevProducts.map((ele)=>{
      return {
        ...ele
      }
    })
    newPrevProductsRef.filter((ele)=>{
      return ele.product.id==action.productId
    })
    return{
      ...state,
      loading : false,
      products : newPrevProductsRef
    }
  }),
  on(CartActions.removeFromBasketStart,(state)=>{
    return{
      ...state,
      loading : true,
    }
  }),
  on(CartActions.startAddToBasket,(state)=>{
    return{
      ...state,
      loading : true,
    }
  }),
  on(CartActions.basketError,(state,action)=>{
    return{
      ...state,
      error : action.error,
      loading : false
    }
  }),
  on(CartActions.clearError,(state)=>{
    return{
      ...state,
      error : null,
    }
  }),
)





















