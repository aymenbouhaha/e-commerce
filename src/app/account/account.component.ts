import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getFullName} from "./general-details/Store/general-details.selector";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  userName : Observable<string>

  constructor(private store : Store) {
    this.userName=this.store.select(getFullName)
  }

}
