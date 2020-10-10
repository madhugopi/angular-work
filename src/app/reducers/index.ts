import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromEvent from './event.reducer';


export interface State {

  [fromEvent.eventFeatureKey]: fromEvent.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromEvent.eventFeatureKey]: fromEvent.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
