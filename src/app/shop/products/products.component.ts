import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getProducts, ProductState} from "../store/product.reducer";
import {Observable} from "rxjs";
import {Product} from "../../core/models/base-models/product/product";
import * as ProductsActions from "../store/product.actions"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit{

  products$ : Observable<Product[]>

  constructor(private store : Store<ProductState>) {
    this.products$ = this.store.select(getProducts)
  }

  ngOnInit(): void {
    this.store.dispatch(ProductsActions.startFetchingProducts({params : {page : null , category : null}}))
  }







}
