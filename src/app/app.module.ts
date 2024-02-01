import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RoutingModule} from "./routing.module";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {productReducer} from "./shop/store/product.reducer";
import {ToastrModule} from "ngx-toastr";
import {authReducer} from "./auth/store/auth.reducer";
import {ProductEffects} from "./shop/store/product.effects";
import {AuthEffects} from "./auth/store/auth.effects";
import {HttpClientModule} from "@angular/common/http";
import {cartReducer} from "./cart/store/cart.reducer";
import {CartEffects} from "./cart/store/cart.effects";
import {wishlistReducer} from "./account/wishlist/Store/wishlist.reducer";
import {wishlistEffects} from "./account/wishlist/Store/wishlist.effects";
import {userReducer} from "./account/general-details/Store/general-details.reducer";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center'
    }),
    BrowserAnimationsModule,
    StoreModule.forRoot({
      products : productReducer,
      auth : authReducer,
      cartReducer : cartReducer ,
      wishlist : wishlistReducer ,
      user     : userReducer ,
    }),
    EffectsModule.forRoot([
      ProductEffects,
      AuthEffects,
      CartEffects ,
      wishlistEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
