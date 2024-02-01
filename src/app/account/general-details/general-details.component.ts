import {Component, signal} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.css']
})
export class GeneralDetailsComponent {


  form : FormGroup

  constructor() {
    this.form=new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      address : new FormControl(),
      phoneNumber : new FormControl(),
    })
  }


  onSubmit(){
    console.log(this.form)
  }

}





