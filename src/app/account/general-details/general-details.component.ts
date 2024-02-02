import {Component, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../core/models/base-models/user";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectUser} from "./Store/general-details.selector";
import {HttpClient} from "@angular/common/http";
import {updateUser} from "./Store/general-details.action";


@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.css']
})
export class GeneralDetailsComponent implements OnInit{


  form : FormGroup
  User$ : Observable<User | null>

  constructor(private store : Store<{user : User}> ,private http :HttpClient) {
    this.form=new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      address : new FormControl(),
      phoneNumber : new FormControl(),
    })
    this.User$=this.store.select(selectUser)
  }
  ngOnInit(): void {
    // Subscribe to the user observable to update form values when user data changes
    this.User$.subscribe((user) => {
      if(user) {
      this.form.patchValue(user); // Update form values with user data
      }
    });
  }

  updateUser(user : Observable<User | null>  ) {
  this.store.dispatch(updateUser({formData : this.form.value}))
  }

  onSubmit(){
  }

}





