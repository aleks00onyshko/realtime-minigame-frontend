import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthFacade } from 'auth/store';

@Component({
  selector: 'dp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(21)
      ])
    });
  }

  public onSubmit(): void {
    const { email, password } = this.loginForm.controls;

    this.authFacade.login(email.value, password.value);
  }
}
