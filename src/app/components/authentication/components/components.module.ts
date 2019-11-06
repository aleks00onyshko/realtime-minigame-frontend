import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import * as fromShared from 'shared';
import * as fromRoot from './root';

const COMPONENTS = [fromRoot.AuthenticationRootComponent];

@NgModule({
  imports: [RouterModule, fromShared.AppSharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class AuthenticationComponentsModule {}
