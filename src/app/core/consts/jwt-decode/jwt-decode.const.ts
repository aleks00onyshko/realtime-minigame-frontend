import { InjectionToken, Provider } from '@angular/core';

import * as jwtDecode from 'jwt-decode';

export function provideJwtDecode() {
  return jwtDecode;
}
export const JWT_DECODE = new InjectionToken('JWT_DECODE');
export const jwtDecodeProvider: Provider = {
  provide: JWT_DECODE,
  useFactory: provideJwtDecode
};
