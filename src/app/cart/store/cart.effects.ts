import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as CartActions from "./cart.actions"
import {catchError, map, of, switchMap} from "rxjs";
import {BasketRepositoryService} from "../../core/repositories/basket-repository.service";
import * as ProductActions from "../../shop/store/product.actions";


@Injectable()
export class CartEffects{



  constructor(private actions$ : Actions,private cartRepository : BasketRepositoryService) {
  }


  getBasket = createEffect (()=>{
    return this.actions$.pipe(
        ofType(CartActions.getBasket),
        switchMap((params)=>{
          return this.cartRepository.getBasket(params.params).pipe(
            map((value)=>{
              return CartActions.getBasket(user: value)
            }),
            catchError((er)=>{
              return of(CartActions.basketError(er))
            })
          )
        })
      )
  },{dispatch : true})



  addToBasket = createEffect(()=>{
    return this.actions$.pipe(
      ofType(CartActions.startAddToBasket),
      switchMap((action)=>{
        return this.cartRepository.addToBasket(action.productId.id!,action.itemsNumber).pipe(
          map((value)=>{
            return CartActions.addToBasketSuccess({product : value.product,itemsNumber : value.itemsNumber})
          }),
          catchError(
            (er)=>{
              return of(CartActions.basketError(er))
            }
          )
        )
      })
    )
  },{dispatch : true})


  removeFromBasket = createEffect(()=>{
    return this.actions$.pipe(
      ofType(CartActions.removeFromBasketStart),
      switchMap((action)=>{
        return this.cartRepository.removeFromBasket(action.productId).pipe(
          map((value)=>{
            return CartActions.removeFromBasketSuccess({productId : action.productId})
          }),
          catchError(
            (er)=>{
              return of(CartActions.basketError(er))
            }
          )
        )
      })
    )
  },{dispatch : true})





}
