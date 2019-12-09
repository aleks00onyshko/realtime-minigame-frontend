import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { jwtDecodeProvider } from './consts';
import { AppSharedModule } from 'shared';

@NgModule({
  imports: [AppSharedModule, HttpClientModule],
  providers: [jwtDecodeProvider]
})
export class RootCoreModule {}
