import { ActivatedRouteSnapshot, Params, RouterStateSnapshot, RoutesRecognized } from '@angular/router';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { RouterStateSerializer, RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;
    return { url, queryParams, params };
  }
}

export const getRouterReducer = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');
