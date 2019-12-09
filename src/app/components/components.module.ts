import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RootComponent } from './root';
import { HomeComponent } from './home';
import { AuthenticationModule } from './authentication';

const COMPONENTS = [RootComponent, HomeComponent];

const MODULES = [AuthenticationModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...MODULES]
})
export class RootComponentsModule {}
