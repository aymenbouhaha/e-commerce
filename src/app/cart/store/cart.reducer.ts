import {Product} from "../../core/models/base-models/product/product";
import {createFeature, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as CartActions from "./cart.actions"
import {Basket, BasketProductInterface} from "../../core/models/base-models/basket/basket";
import {BasketProduct} from "../../core/models/base-models/basket/basket-product";
import * as ProductActions from "../../shop/store/product.actions";

export interface BasketState{
  error : string | null
  loading: boolean
  products : {
    product : Product
    itemsNumber : number
  }[]
}

export const cartInitialState : BasketState= {
  error : null,
  loading:false,
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
      loading : true,
      products : newPrevProductsRef
    }
  }),

  // on(CartActions.removeFromBasketStart,(state)=>{
  //   return{
  //     ...state,
  //   }
  // }),
  //
  on(CartActions.removeFromBasketSuccess, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      (product) => product.product.id !== productId
    );

    return {
      ...state,
      loading: false,
      products: updatedProducts,
    };
  }),
  on(CartActions.startAddToBasket,(state)=>{
    return{
      ...state,
    }
  }),
  on(CartActions.basketError,(state,action)=>{
    return{
      ...state,
      error : action.error,
    }
  }),
  on(CartActions.clearError,(state)=>{
    return{
      ...state,
      error : null,
    }
  }),
)



export const cartFeatureState = createFeatureSelector<BasketState>("cartReducer")




export const getBasketProducts = createSelector(cartFeatureState,(state)=>state.products)

export const getBasketError = createSelector(cartFeatureState,(state)=>state.error)

export const getBasketLoading = createSelector(cartFeatureState, (state)=> state.loading)


















