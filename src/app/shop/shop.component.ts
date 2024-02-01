import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
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
export class ShopComponent implements OnInit{

  products$ : Observable<Product[]>
  error$ : Observable<string | null>

  constructor(private store : Store<ProductState>,private activatedRoute : ActivatedRoute) {
    this.activatedRoute.queryParams.pipe(
      tap((params)=>{

        console.log(params)
        this.store.dispatch(ProductsActions.startFetchingProducts({params : {page : +params["page"], category : params["category"]}}))
      })
    ).subscribe()
    this.products$ = this.store.select(getProducts)
    this.error$ = this.store.select(getProductsError)
    this.error$.pipe(
      tap((value)=>{
        if (value){
          console.log(value)
          this.store.dispatch(ProductsActions.clearProductError())
        }
      })
    )
  }

  ngOnInit(): void {
  }



}
