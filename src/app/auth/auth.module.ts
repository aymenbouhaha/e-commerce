import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CodeVerificationComponent } from './code-verification/code-verification.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    CodeVerificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
