import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Delete, Init, Set} from "./wishlist.actions";
import {map, of, switchMap, tap, withLatestFrom} from "rxjs";
import {Store} from "@ngrx/store";
import {Product} from "../../../core/models/base-models/product/product";
import {Injectable} from "@angular/core";
@Injectable()
export class wishlistEffects{

  loadwishList =createEffect(
    () =>this.actions$.pipe(
      ofType(Init) ,
      switchMap(() =>{
        const storedWishlist= localStorage.getItem('wishlist')
        if(storedWishlist) {
        const wishlist=JSON.parse(storedWishlist)
        return of(Set({wishlist : wishlist}))
        }
        return this.store.select('wishlist').pipe(
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
        withLatestFrom(this.store.select('wishlist')),
        tap(([_,wishlist])=> {
          console.log("ff") ;
          localStorage.setItem('wishlist',JSON.stringify(wishlist) )
          }     ) ,)
   ,{dispatch : false}  )
  constructor(private actions$: Actions ,private store :Store<{wishlist : Product[]}>) {

  }
}
