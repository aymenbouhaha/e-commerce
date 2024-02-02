import {Component, OnDestroy} from '@angular/core';
import {Observable, tap} from "rxjs";
import {Product} from "../core/models/base-models/product/product";
import {Store} from "@ngrx/store";
import {getProducts, getProductsError, getProductsLoading, ProductState} from "./store/product.reducer";
import * as ProductsActions from "./store/product.actions";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {GenericComponent} from "../shared/generic/generic.component";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent extends GenericComponent implements OnDestroy{

  products$ : Observable<Product[]>
  loading$ : Observable<boolean>

  constructor(private store : Store<ProductState>,private activatedRoute : ActivatedRoute,private dialog: MatDialog) {
    super(store.select(getProductsError),store,dialog)
    this.activatedRoute.queryParams.pipe(
      tap((params)=>{
        this.store.dispatch(ProductsActions.startFetchingProducts({params : {page : +params["page"], category : params["category"]}}))
      })
    ).subscribe()
    this.loading$ = this.store.select(getProductsLoading)
    this.products$ = this.store.select(getProducts)

  }

  ngOnDestroy(): void {
    this.destroySubscription()
  }





}
