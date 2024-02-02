import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthState } from '../store/auth.reducer';
import { Store } from '@ngrx/store';
import * as authActions from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  form: FormGroup;
  constructor(private store: Store<AuthState>, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  onSubmit() {
    const formValues = this.form.value;
    this.store.dispatch(
      authActions.signInStarted({
        email: formValues.email,
        password: formValues.password,
      })
    );
    this.router.navigate(['']);
  }
}
