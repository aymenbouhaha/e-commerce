import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as authActions from '../../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private store: Store, private router: Router) {
    // this.store.dispatch(autoLogin())
  }

  onClick() {
    this.store.dispatch(authActions.logout());
  }
}
