import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignUpDto } from 'src/app/core/models/dto/sign-up.dto';
import { AuthState } from '../store/auth.reducer';
import * as authActions from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  form: FormGroup;

  constructor(private store: Store<AuthState>, private router: Router) {
    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    const formValues = this.form.value;
    const dto: SignUpDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      phoneNumber: formValues.phoneNumber,
      email: formValues.email,
      password: formValues.password,
    };
    this.store.dispatch(authActions.signUpStarted(dto));
    this.router.navigate(['/auth/sign-in']);
  }
}
