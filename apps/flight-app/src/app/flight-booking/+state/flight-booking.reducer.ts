import { Flight } from '@flight-workspace/flight-lib';
import { Action, createReducer, on } from '@ngrx/store';
import { flightsLoaded, updateFlight } from './flight-booking.actions';

import { mutableOn } from 'ngrx-etc';

export const flightBookingFeatureKey = 'flightBooking';

export interface FlightBookingAppStateSlice {
  [flightBookingFeatureKey]: FlightBookingState;
}

export interface FlightBookingState {
  flights: Flight[];
  stats: object;
  basket: object;
  denyList: number[];
}

export const initialState: FlightBookingState = {
  flights: [],
  stats: {},
  basket: {},
  denyList: [4]
};


export const reducer = createReducer(
  initialState,

  mutableOn(flightsLoaded, (state, action) => {
    const flights = action.flights;

    // Mutation
    state.flights = flights;

    // return {...state, flights }

  }),
  mutableOn(updateFlight, (state, action) => {

    const flight = action.flight;

    // flight.id

    const flights = state.flights.map(f => (f.id === flight.id) ? flight : f);

    // Mutation
    state.flights = flights;

    // return {...state, flights }

  }), 

);

