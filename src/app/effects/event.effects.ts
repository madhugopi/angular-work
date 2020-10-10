import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as eventActions from '../actions/event.actions';
import { EventService } from '../core/http/event.service';
import { mergeMap, map, catchError } from'rxjs/operators';


@Injectable()
export class EventEffects {



  constructor(private actions$: Actions, private eventService: EventService) {}

  @Effect({dispatch: false})
  loadEvents$: Observable<Action> = this.actions$.pipe(
    ofType(eventActions.EventActionTypes.LoadEvents),
    mergeMap(
      (action: eventActions.LoadEvents) => this.eventService.getAllEvents().pipe(
        map(events => (new eventActions.LoadEventsSuccess({data: events}))),
        catchError(err => of(new eventActions.LoadEventsFailure({error: err})))
      )
    )
  )

  @Effect({dispatch: false})
  addEvents$: Observable<any> = this.actions$.pipe(
    ofType(eventActions.EventActionTypes.AddEvent),
    mergeMap(
      (action: eventActions.AddEvent) => this.eventService.addEvents(action.payload.data).pipe(
        map(events => (new eventActions.AddEventsSuccess({data: events}))),
        catchError(err => of(new eventActions.AddEventsFailure({error: err})))
      )
    )
  )

}
