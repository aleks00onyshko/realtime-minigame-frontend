import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import * as fromConts from './consts';
import * as fromSharedModule from 'shared';

@NgModule({
  imports: [fromSharedModule.AppSharedModule, HttpClientModule],
  providers: [fromConts.jwtDecodeProvider]
})
export class RootCoreModule {}
