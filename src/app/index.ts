import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../environments/environment';

export interface State {
  routerReducer: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<any>>('routerReducer');


