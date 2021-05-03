import { Action, ActionReducer } from '@ngrx/store';
import { hydrateSuccess } from '../actions';

function isHydrateSuccess(action: Action): action is ReturnType<typeof hydrateSuccess> {
  return action.type === hydrateSuccess.type;
}

export const hydrationMetaReducer = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (isHydrateSuccess(action)) {
      return action.state;
    } else {
      return reducer(state, action);
    }
  };
};
