import { Component } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Product} from "../../core/models/base-models/product/product";
import {Store} from "@ngrx/store";
import {getProductsError, getProductsLoading, getSelectedProduct, ProductState} from "../store/product.reducer";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import * as ProductsAction from "../store/product.actions"
import {DialogComponent} from "../../shared/components/dialog/dialog.component";
import * as ProductsActions from "../store/product.actions";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {


  product$ : Observable<Product | null>
  error$ : Observable<string | null>
  loading$ : Observable<boolean>
  subscriptions : Subscription[]=[]


  constructor(private store : Store<ProductState>,private activatedRoute : ActivatedRoute,private dialog: MatDialog){
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.store.dispatch(ProductsAction.startFetchingProduct({productId : params["id"]}))
      }
    )
    this.product$=this.store.select(getSelectedProduct)
    this.error$ = this.store.select(getProductsError)
    this.loading$ = this.store.select(getProductsLoading)
    const error= this.error$.subscribe(
      (value)=>{
        if (value){
          this.openDialog(value)
        }
      }
    )
    this.subscriptions.push(error)
  }



  openDialog(msg : string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        message : msg,
        action : ProductsActions.clearProductError(),
        store : this.store
      }
    });
  }

}
