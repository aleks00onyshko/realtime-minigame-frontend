import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as fromRoot from './root';
import * as fromHome from './home';
import * as fromAuthentication from './authentication';

const COMPONENTS = [fromRoot.RootComponent, fromHome.HomeComponent];

const MODULES = [fromAuthentication.AuthenticationModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...MODULES]
})
export class RootComponentsModule {}
