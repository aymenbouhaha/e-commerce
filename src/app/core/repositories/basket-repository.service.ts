import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../utils/constant";

@Injectable({
  providedIn: 'root'
})
export class BasketRepositoryService {

  constructor(private httpClient: HttpClient) { }


  addToBasket(productId: number,itemsNumber : number){
    return this.httpClient.post(
      Endpoints.addToBasket,
      {
        id : productId,
        itemsNumber : itemsNumber
        }
      )
  }

  removeFromBasket(productId : number){
    return this.httpClient.delete(Endpoints.deleteFromBasket(productId))
  }




}
