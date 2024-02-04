import {Product} from "../../core/models/base-models/product/product";
import {createReducer, on} from "@ngrx/store";
import * as CartActions from "./cart.actions"
import {Basket, BasketProductInterface} from "../../core/models/base-models/basket/basket";
import {BasketProduct} from "../../core/models/base-models/basket/basket-product";
import * as ProductActions from "../../shop/store/product.actions";

export interface BasketState{
  error : string | null
  products : {
    product : Product
    itemsNumber : number
  }[]
}

const sofa = new Product(1, 'Sofa', 500);
const bed = new Product(2, 'Bed', 700);
const diningTable = new Product(3, 'Dining Table', 300);

const basketProductSofa: BasketProduct = { id: 1, product: sofa, itemsNumber: 2 };
const basketProductBed: BasketProduct = { id: 2, product: bed, itemsNumber: 1 };
const basketProductTable: BasketProduct = { id: 3, product: diningTable , itemsNumber: 1 };


const basket: Basket = { id: 1, basketProduct: [basketProductSofa, basketProductBed, basketProductTable] };

export const cartInitialState : BasketState= {
  error : null,
  products : []
}


export const cartReducer=createReducer(
  cartInitialState,
  on(
    CartActions.getBasket,
    (state)=>{
      return {
        ...state,
        error : null
      }
    }
  ),

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
      loading : false,
      products : newPrevProductsRef
    }
  }),
  on(CartActions.removeFromBasketStart,(state)=>{
    return{
      ...state,
    }
  }),
  on(CartActions.removeFromBasketSuccess, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      (product) => product.product.id !== productId
    );

    return {
      ...state,
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





















