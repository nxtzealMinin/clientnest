import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm;
  signupForm;
  restForm;
  showLogin = true;
  showSignup = false;
  showReset = false;
  showVerification = false;
  hide = true;
  checked = false;

  constructor(private fb: FormBuilder, private router: Router) {
    // login form
    this.loginForm = this.fb.group({
      EMAIL_ID: ['', [Validators.required, Validators.email]],
      PASSWORD: ['', [Validators.required]],
      // REMEM: ['']
    });

    // signup form
    this.signupForm = this.fb.group({
      EMAIL_ID: ['', [Validators.required, Validators.email]],
      PASSWORD: ['', [Validators.required]],
      CONFIRM_PASSWORD: ['', [Validators.required]]
    });

    // reset password
    this.restForm = this.fb.group({
      EMAIL_ID: ['', [Validators.required, Validators.email]],
      NEW_PASSWORD: ['', [Validators.required]],
      CONFIRM_PASSWORD: ['', [Validators.required]],
      VERIFICATION_CODE: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }


  onLogin() {
  }

  onSignup() {

  }

  onReset() {

  }

  fbLogin() {
    console.log('Welcome to FB');
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  googleLogin() {
    console.log('Welcome to Google');
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  submitEmail() {
  }

  // show login form
  onShowLogin() {
    this.formToggle(true, false, false);
  }
  // show signup form
  onShowSignup() {
    this.formToggle(false, true, false);
  }
  // show reset form
  onShowReset() {
    this.formToggle(false, false, true);
  }

  // show and hide forms
  formToggle(login: boolean, signup: boolean, reset: boolean) {
      this.showLogin = login;
      this.showSignup = signup;
      this.showReset = reset;
  }
}
