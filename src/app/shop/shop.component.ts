import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, tap} from "rxjs";
import {Product} from "../core/models/base-models/product/product";
import {Store} from "@ngrx/store";
import {getProducts, getProductsError, ProductState} from "./store/product.reducer";
import * as ProductsActions from "./store/product.actions";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit , OnDestroy{

  products$ : Observable<Product[]>
  error$ : Observable<string | null>
  subscriptions : Subscription[]=[]

  constructor(private store : Store<ProductState>,private activatedRoute : ActivatedRoute) {
    const queryParams$=this.activatedRoute.queryParams.pipe(
      tap((params)=>{
        this.store.dispatch(ProductsActions.startFetchingProducts({params : {page : +params["page"], category : params["category"]}}))
      })
    ).subscribe()
    this.products$ = this.store.select(getProducts)
    this.error$ = this.store.select(getProductsError)
    const error= this.error$.subscribe(
      (value)=>{
        console.log("error",value)
      }
    )
    this.subscriptions.push(queryParams$,error)
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(
        (el)=>{
          el.unsubscribe()
        }
      )
  }

  ngOnInit(): void {
  }



}
