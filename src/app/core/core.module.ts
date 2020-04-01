import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppSharedModule } from 'shared';

@NgModule({
  imports: [AppSharedModule, HttpClientModule]
})
export class RootCoreModule {}
