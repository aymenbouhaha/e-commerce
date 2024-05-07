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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {cartReducer} from "./cart/store/cart.reducer";
import {CartEffects} from "./cart/store/cart.effects";
import {recommendationsReducer} from "./shop/product-details/recommendations/store/recommendations.reducer";
import {RecommendationsEffects} from "./shop/product-details/recommendations/store/recommendations.effects";
import {wishlistEffects} from "./account/wishlist/Store/wishlist.effects";
import {userReducer} from "./account/general-details/Store/general-details.reducer";
import {ordersReducer} from "./account/orders/Store/orders.reducer";
import {GeneralDetailsEffect} from "./account/general-details/Store/general-details.effect";
import {AuthInterceptor} from "./auth/auth.interceptor";
import { wishlistReducer} from "./account/wishlist/Store/wishlist.reducer";
import {discountReducer} from "./discount/store/discount.reducer";
import {DiscountEffects} from "./discount/store/discount.effects";

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
      products: productReducer,
      auth: authReducer,
      cart: cartReducer,
      recommendations: recommendationsReducer,
      cartReducer: cartReducer ,
      wishlist: wishlistReducer ,
      user: userReducer ,
      orders: ordersReducer,
      discounts : discountReducer
    }),
    EffectsModule.forRoot([
      ProductEffects,
      AuthEffects,
      CartEffects,
      RecommendationsEffects,
      CartEffects ,
      wishlistEffects,
      GeneralDetailsEffect,
      DiscountEffects
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
