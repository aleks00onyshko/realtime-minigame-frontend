import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthFacade } from 'auth/store';

@Component({
  selector: 'dp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public emailControl = new FormControl(null, [Validators.required, Validators.email]);

  constructor(public authFacade: AuthFacade) {
    // this.emailControl.touched
    // this.emailControl.valid
    // this.emailControl.invalid
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    const email = this.emailControl.value;
  }
}
