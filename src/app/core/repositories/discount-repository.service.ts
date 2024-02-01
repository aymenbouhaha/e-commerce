import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../utils/constant";
import {Discount} from "../models/base-models/discount";

@Injectable({
  providedIn: 'root'
})
export class DiscountRepositoryService {

  constructor(private httpClient: HttpClient) { }


  getDiscounts(){
    return this.httpClient.get<Discount[]>(
      Endpoints.discounts
    )
  }



}
