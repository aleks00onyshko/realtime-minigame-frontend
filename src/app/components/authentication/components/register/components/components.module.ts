import { NgModule } from '@angular/core';

import * as fromRoot from './root';
import * as fromShared from 'shared';

const COMPONENTS = [fromRoot.RegisterComponent];

@NgModule({
  imports: [fromShared.AppSharedModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class RegisterComponentsModule {}
