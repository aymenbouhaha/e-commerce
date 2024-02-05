import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as CartActions from "./cart.actions"
import {catchError, map, of, switchMap, tap} from "rxjs";
import {BasketRepositoryService} from "../../core/repositories/basket-repository.service";
import * as GeneralDetailsActions from "../../account/general-details/Store/general-details.action";
import {HttpErrorResponse} from "@angular/common/http";


@Injectable()
export class CartEffects{



  constructor(private actions$ : Actions,private cartRepository : BasketRepositoryService) {
  }


  addToBasket = createEffect(()=>{
    return this.actions$.pipe(
      ofType(CartActions.startAddToBasket),
      switchMap((action)=>{
        return this.cartRepository.addToBasket(action.productId.id!,action.itemsNumber).pipe(
          map((value)=>{
            return CartActions.addToBasketSuccess({product : value.product,itemsNumber : value.itemsNumber})
          }),
          catchError(
            (er : HttpErrorResponse)=>{
              return of(CartActions.basketError({error : er.error.message.toString()}))
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
            (er : HttpErrorResponse)=>{
              return of(CartActions.basketError({error : er.error.message.toString()}))
            }
          )
        )
      })
    )
  },{dispatch : true})


  storeBasketToLocalStorage = createEffect(()=>{
    return this.actions$.pipe(
      ofType(CartActions.setBasket),
      tap(value => {
        localStorage.setItem("basket",JSON.stringify(value.basket))
      })
    )
  },{dispatch : false})



}
