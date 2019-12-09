import { LoginEffects } from '../../components/login/store';
import { RegisterEffects } from '../../components/register/store';
import { RootEffects } from './root.effects';

export const effects = [LoginEffects, RegisterEffects, RootEffects];
