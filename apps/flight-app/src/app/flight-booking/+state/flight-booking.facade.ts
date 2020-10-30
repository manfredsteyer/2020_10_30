import { Injectable } from '@angular/core';
import { FlightService, Flight } from '@flight-workspace/flight-lib';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { flightsLoaded, loadFlights } from './flight-booking.actions';
import { FlightBookingAppStateSlice, flightBookingFeatureKey } from './flight-booking.reducer';
import {selectFlights2} from './flight-booking.selectors';


// -- 4 --
@Injectable({providedIn: 'root'})
export class FlightBookingFacade {

    readonly flights$: Observable<Flight[]> = this.store.select(selectFlights2);

    constructor(
        private store: Store<FlightBookingAppStateSlice>) { }
    
    search(from: string, to: string, urgent: boolean): void {
        this.store.dispatch(loadFlights({from, to, urgent}));
    }

}

// -- 3 --
// @Injectable({providedIn: 'root'})
// export class FlightBookingFacade {

//     readonly flights$: Observable<Flight[]> = this.store.select(selectFlights2);

//     constructor(
//         private store: Store<FlightBookingAppStateSlice>,
//         private flightService: FlightService) { }
    
//     search(from: string, to: string, urgent: boolean): void {
//         this.flightService.find(from, to, urgent).subscribe(flights => {

//             this.store.dispatch(flightsLoaded({flights}));

//         })
//     }

// }


// -- 2 --
// @Injectable({providedIn: 'root'})
// export class FlightBookingFacade {

//     readonly flights$: Observable<Flight[]> = this.store.select(x => x[flightBookingFeatureKey].flights);

//     constructor(
//         private store: Store<FlightBookingAppStateSlice>,
//         private flightService: FlightService) { }
    
//     search(from: string, to: string, urgent: boolean): void {
//         this.flightService.find(from, to, urgent).subscribe(flights => {

//             this.store.dispatch(flightsLoaded({flights}));

//         })
//     }

// }


// -- 1 ---
// @Injectable({providedIn: 'root'})
// export class FlightBookingFacade {

//     private flightsSubject = new BehaviorSubject<Flight[]>([]);
//     readonly flights$: Observable<Flight[]> = this.flightsSubject.asObservable();

//     constructor(private flightService: FlightService) { }
    
//     search(from: string, to: string, urgent: boolean): void {
//         this.flightService.find(from, to, urgent).subscribe(flights => {

//             this.flightsSubject.next(flights);

//         })
//     }

// }