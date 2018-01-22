import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';


import { AuthenticationService } from '../services/oauth/authentication.service';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public error = '';
  model: any = {};

  constructor(fb:FormBuilder,private router: Router,
        private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
        // reset login status
        this.authenticationService.logout();
  }

  public login():void {
    this.submitted = true;
    if (true) {
      // your code goes here
      // console.log(values);

      this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    console.log('success on login');
                    this.router.navigate(['/pages/reportes']);
                } else {
                    // login failed
                    this.error = 'Usuario o contraseña son incorrectos.';
                    
                }
            });

    }
  }
}
