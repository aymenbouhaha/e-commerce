import {Component, OnDestroy} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../core/models/base-models/product/product";
import {Store} from "@ngrx/store";
import {getProductsError, getProductsLoading, getSelectedProduct, ProductState} from "../store/product.reducer";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import * as ProductsAction from "../store/product.actions"
import {GenericComponent} from "../../shared/generic/generic.component";
import {clearProductError} from "../store/product.actions";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent extends GenericComponent implements OnDestroy{


  product$ : Observable<Product | null>
  loading$ : Observable<boolean>


  constructor(private store : Store<ProductState>,private activatedRoute : ActivatedRoute,private dialog : MatDialog){
    super(store.select(getProductsError),store,dialog,clearProductError)
    this.activatedRoute.params.subscribe(
      (params)=>{
        console.log(params)
        this.store.dispatch(ProductsAction.startFetchingProduct({productId : params["id"]}))
      }
    )
    this.product$=this.store.select(getSelectedProduct)
    this.loading$ = this.store.select(getProductsLoading)
  }

  ngOnDestroy(): void {
    this.destroySubscription()
  }




}
