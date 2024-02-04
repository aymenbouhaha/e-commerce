import { Component, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../core/models/base-models/user';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser } from './Store/general-details.selector';

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.css'],
})
export class GeneralDetailsComponent {
  form: FormGroup;
  //User$: Observable<User>;

  constructor(private store: Store<{ user: User }>) {
    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      phoneNumber: new FormControl(),
    });
    // this.User$ = this.store.select(selectUser);
  }

  onSubmit() {
    console.log(this.form);
  }
}
