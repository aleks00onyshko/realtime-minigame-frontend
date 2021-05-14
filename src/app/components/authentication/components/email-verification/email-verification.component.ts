import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit, Self } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthFacade } from 'auth/store';
import { EmailVerificationService } from './email-verification.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
  providers: [EmailVerificationService]
})
export class EmailVerificationComponent implements OnInit, AfterViewInit {
  @ViewChild('myinput') myInputField: ElementRef;

  public emailControl = new FormControl(
    '',
    [Validators.required, Validators.email],
    [this.emailVerificationService.getEmailExistValidator()]
  );

  constructor(
    @Self() public emailVerificationService: EmailVerificationService,
    public authFacade: AuthFacade
  ) {}

  ngOnInit(): void {
    this.emailControl.valueChanges.subscribe(() => {
      console.log('errors', this.emailControl.errors, this.emailControl);
      console.log('invalid', this.emailControl.invalid);
      console.log('touched', this.emailControl.touched);
      console.log('status', this.emailControl.status);

      this.myInputField.nativeElement.focusout();
    });
  }

  ngAfterViewInit() {}

  public onSubmit(): void {
    const email = this.emailControl.value;
  }
}
