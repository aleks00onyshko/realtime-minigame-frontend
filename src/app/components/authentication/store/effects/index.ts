import * as fromLoginStore from '../../components/login/store';
import * as fromRegisterStore from '../../components/register/store';
import * as fromRootEffects from './root.effects';

export const effects = [fromLoginStore.LoginEffects, fromRegisterStore.RegisterEffects, fromRootEffects.RootEffects];
