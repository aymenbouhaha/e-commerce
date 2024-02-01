import {Injectable} from "@angular/core";
import {ProductRepositoryService} from "../../core/repositories/product-repository.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as ProductActions from "./product.actions"
import {catchError, map, of, switchMap, tap} from "rxjs";
import {fetchedProducts} from "./product.actions";


@Injectable()
export class ProductEffects{



  constructor(private productsRepository : ProductRepositoryService,private actions$ : Actions) {
  }


  fetchProducts = createEffect(()=>
    this.actions$.pipe(
      ofType(ProductActions.startFetchingProducts),
      switchMap((params)=>{
        return this.productsRepository.getProducts(params.params).pipe(
          map((products)=>{
            return ProductActions.fetchedProducts({products :products,params: params.params})
          }),
          catchError((err)=> {
            return of(ProductActions.errorFetchingProducts({error: err}))
          } )
        )
      })
    ),
    {dispatch: true}
  )


  fetchProduct = createEffect(()=>
      this.actions$.pipe(
        ofType(ProductActions.startFetchingProduct),
        switchMap((params)=>{
          return this.productsRepository.getProductById(params.productId).pipe(
            map((product)=>{
              return ProductActions.fetchedProduct({product :product})
            }),
            catchError((err)=> {
              return of(ProductActions.errorFetchingProducts({error: err}))
            } )
          )
        })
      ),
    {dispatch: true}
  )

  // clear=createEffect(()=>
  //     this.actions$.pipe(
  //       ofType(ProductActions.clearProductError),
  //       tap(()=>{
  //         console.log("Clear Error triggered")
  //       })
  //     ),
  //   {dispatch: false}
  // )


}
