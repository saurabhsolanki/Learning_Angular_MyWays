import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  loginRef=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });
  
  constructor( public loginSer:LoginService){

  }
  handleSubmit() {
    let login=this.loginRef.value;
    // this.loginSer.create
  }
}
