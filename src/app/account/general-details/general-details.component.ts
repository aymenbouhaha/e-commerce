import { Component } from '@angular/core';
import {User} from "../../core/models/user";
import {UserService} from "../../core/user/user.service";
import { ReactiveFormsModule } from '@angular/forms';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.css']
})
export class GeneralDetailsComponent {
  user: User=new User("");
  displayName = '' ;
  password    = '' ;

  constructor(private userService : UserService , private formBuilder : FormBuilder , private toastr: ToastrService) {
    this.userForm = new FormGroup({
      oldPassword : new FormControl('') ,
      newPassword: new FormControl(''),
      repeatNewPassword: new FormControl(''),
    },{ validators: [this.passwordMatchValidator , this.oldPasswordMatchValidator] } );

  }// Example user
  name: any;
  userForm: any;
  ngOnInit() : void {
  this.user=this.userService.User1 ;


  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const newPassword = control.get('newPassword')?.value;
    const repeatNewPassword = control.get('repeatNewPassword')?.value;

    console.log('new password: ',newPassword,'repeat :',repeatNewPassword)
    return newPassword === repeatNewPassword ? null : { 'passwordMismatch': true };
  }
  oldPasswordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const oldPassword = control.get('oldPassword')?.value;
    console.log('OLD password: ',oldPassword)
    // Check if the old password matches the actual old password
    if (oldPassword !== "fer12" ) {
      return { 'oldPasswordMismatch': true };
    }

    return null;
  }



  onSaveChnages() {
    if (this.userForm.valid) {
      this.userService.updateUser(this.user);
      this.toastr.success('Changes saved successfully', 'Success');
    }
    else
      this.toastr.error('Error: Passwords do not match or some fields are invalid', 'Error');

    }
  }





