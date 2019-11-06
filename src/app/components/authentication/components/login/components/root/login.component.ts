import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as fromLoginFacade from '../../store/facade';

@Component({
  selector: 'dp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginFacade: fromLoginFacade.LoginFacade) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(21)])
    });
  }

  onSubmit(): void {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.loginFacade.login(email, password);
  }
}
