import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Endpoints} from "../utils/constant";
import {Product} from "../models/base-models/product/product";
import {GetProductsParams} from "../models/dto/get-products-params";

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  constructor(private httpClient : HttpClient) { }

  getProducts(params: GetProductsParams){
    let httpParams = new HttpParams()
    if (params.category){
      httpParams=httpParams.append("category",params.category)
    }
    if (params.page){
      httpParams = httpParams.append("page",params.page)
    }
    return this.httpClient.get<Product[]>(
      Endpoints.products,
      {
        params : httpParams
      }
    )
  }

  getProductById(id:number){
    return this.httpClient.get<Product>(
      Endpoints.productById(id)
    )
  }



}
