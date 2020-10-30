import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface State {
}

export const reducers: ActionReducerMap<State> = {
  // flightBooking: flightBookingReducer
  // currUser: authReduer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
