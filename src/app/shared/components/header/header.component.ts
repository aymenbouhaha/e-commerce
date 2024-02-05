import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as authActions from '../../../auth/store/auth.actions';
import {Observable} from "rxjs";
import {getBasketItemNumber} from "../../../cart/store/cart.reducer";
import {isSignedIn} from "../../../auth/store/auth.reducer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  itemsNumber : Observable<number>
  isAuthenticated : Observable<boolean>

  constructor(private store: Store, private router: Router) {
    this.itemsNumber=this.store.select(getBasketItemNumber)
    this.isAuthenticated=this.store.select(isSignedIn)
  }

  onClick() {
    this.store.dispatch(authActions.logout());
  }
}
