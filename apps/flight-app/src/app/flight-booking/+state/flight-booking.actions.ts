import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';

export const flightsLoaded = createAction(
  '[FlightBooking] flightsLoaded',          // Event
  props<{flights: Flight[]}>()
);

export const loadFlights = createAction(
  '[FlightBooking] loadFlights',          // Command
  props<{from: string, to: string, urgent: boolean}>()
);

export const loadFlightsError = createAction(
  '[FlightBooking] loadFlightsError',          // Event
  props<{message: string, errorCode: number}>()
);


export const updateFlight = createAction(
  '[FlightBooking] updateFlight',           // Command
  props<{flight: Flight}>()
);




