import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, tap} from "rxjs";
import {Product} from "../core/models/base-models/product/product";
import {Store} from "@ngrx/store";
import {getProducts, getProductsError, getProductsLoading, ProductState} from "./store/product.reducer";
import * as ProductsActions from "./store/product.actions";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogComponent} from "../shared/components/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit , OnDestroy{

  products$ : Observable<Product[]>
  error$ : Observable<string | null>
  loading$ : Observable<boolean>
  subscriptions : Subscription[]=[]

  constructor(private store : Store<ProductState>,private activatedRoute : ActivatedRoute,private dialog: MatDialog) {
    const queryParams$=this.activatedRoute.queryParams.pipe(
      tap((params)=>{
        this.store.dispatch(ProductsActions.startFetchingProducts({params : {page : +params["page"], category : params["category"]}}))
      })
    ).subscribe()
    this.loading$ = this.store.select(getProductsLoading).pipe()
    this.products$ = this.store.select(getProducts)
    this.error$ = this.store.select(getProductsError)
    const error= this.error$.subscribe(
      (value)=>{
        if (value){
          this.openDialog(value)
        }
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
