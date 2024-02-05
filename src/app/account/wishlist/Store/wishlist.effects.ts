import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Delete, Init, Set} from "./wishlist.actions";
import {map, of, switchMap, tap, withLatestFrom} from "rxjs";
import {Store} from "@ngrx/store";
import {Product} from "../../../core/models/base-models/product/product";
import {Injectable} from "@angular/core";
import {selectWishlist} from "./wishlist.selector";
@Injectable()
export class wishlistEffects{

  loadWishlist =createEffect(
    () =>this.actions$.pipe(
      ofType(Init) ,
      switchMap(() =>{
        const storedWishlist= localStorage.getItem('wishlist')
        if(storedWishlist) {
        const wishlist=JSON.parse(storedWishlist)
        return of(Set({wishlist : wishlist}))
        }
        return this.store.select(selectWishlist).pipe(
          map(wishlistFromStore => Set({ wishlist: wishlistFromStore }))
        );
        }
      )
    )
  )


  saveWishList =createEffect(
() =>
      this.actions$.pipe(
        ofType(Delete),
        withLatestFrom(this.store.select(selectWishlist)),
        tap(([_,wishlist])=> {
          localStorage.setItem('wishlist',JSON.stringify(wishlist) )
          }     ) ,)
   ,{dispatch : false}  )
  constructor(private actions$: Actions ,private store :Store<{wishlist : Product[]}>) {

  }
}
