import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../utils/constant";
import {SignUpDto} from "../models/dto/sign-up.dto";

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {

  constructor(private httpClient : HttpClient) { }


  login(email:string,password : string){
    return this.httpClient.post(
      Endpoints.login,
      {
        email : email,
        password : password
      }
    )
  }

  signUp(credentials : SignUpDto){
    return this.httpClient.post(
      Endpoints.signUp,
      credentials
    )
  }




}
