import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthFacade } from 'auth/store';

@Component({
  selector: 'dp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(public authFacade: AuthFacade) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(21)
      ])
    });
  }

  public onSubmit(): void {
    const { email, username, password } = this.registerForm.controls;

    this.authFacade.register(email.value, username.value, password.value);
  }
}
