import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  map,
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  first,
  startWith
} from 'rxjs/operators';

interface EmailExistResponse {
  message: string;
}

@Injectable()
export class EmailVerificationService {
  public emailInvalidError = 'emailInvalid';

  private readonly validatorUrl = 'http://localhost:4000/api/users/email-exist';

  constructor(private http: HttpClient) {}

  public checkIfEmailExists(email: string): Observable<EmailExistResponse> {
    return this.http.put<EmailExistResponse>(this.validatorUrl, { email });
  }

  public getEmailExistValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      control.valueChanges.pipe(
        switchMap((email: string) => {
          console.log('control', control.errors, control.value);
          return this.checkIfEmailExists(email).pipe(
            map(() => null),
            catchError(() => {
              console.log(' I am in catch error');
              return of({ [this.emailInvalidError]: true });
            })
          );
        }),
        first()
      );
  }
}
