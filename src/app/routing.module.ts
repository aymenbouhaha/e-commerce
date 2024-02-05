import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "./shared/auth.guard";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'discount',
    loadChildren: () =>
      import('./discount/discount.module').then((m) => m.DiscountModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'cart',
    canActivate : [authGuard],
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'account',
    canActivate : [authGuard],
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
