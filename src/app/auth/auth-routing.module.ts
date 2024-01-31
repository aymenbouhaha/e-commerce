import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {CodeVerificationComponent} from "./code-verification/code-verification.component";


const routes : Routes = [
  {
    path : "sign-in" , component : SignInComponent
  },
  {
    path : "sign-up" , component : SignUpComponent
  },
  {
    path : "code-verification" , component : CodeVerificationComponent
  },
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class AuthRoutingModule { }
