import { Action } from '@ngrx/store';
import { Event } from '../models/event';
export enum EventActionTypes {
  LoadEvents = '[Event] Load Events',
  LoadEventsSuccess = '[Event] Load Events Success',
  LoadEventsFailure = '[Event] Load Events Failure',
  AddEvent = '[Event] Add Events',
  AddEventsSuccess = '[Event] Add Events Success',
  AddEventsFailure = '[Event] Add Events Failure',
  RemoveEvent = '[Event] Remove Events'
}

export class LoadEvents implements Action {
  readonly type = EventActionTypes.LoadEvents;
}

export class LoadEventsSuccess implements Action {
  readonly type = EventActionTypes.LoadEventsSuccess;
  constructor(public payload: { data: Event[] }) { }
}

export class LoadEventsFailure implements Action {
  readonly type = EventActionTypes.LoadEventsFailure;
  constructor(public payload: { error: any }) { }
}

export class AddEvent implements Action {
  readonly type = EventActionTypes.AddEvent;
  constructor(public payload: { data: Event }) { }
}

export class AddEventsSuccess implements Action {
  readonly type = EventActionTypes.AddEventsSuccess;
  constructor(public payload: { data: Event[] }) { }
}

export class AddEventsFailure implements Action {
  readonly type = EventActionTypes.AddEventsFailure;
  constructor(public payload: { error: any }) { }
}

export class RemoveEvent implements Action {
  readonly type = EventActionTypes.RemoveEvent;
  constructor(public payload: { data: number }) { }
}

export type EventActions = LoadEvents 
| LoadEventsSuccess 
| LoadEventsFailure 
| AddEvent
| AddEventsSuccess
| AddEventsFailure
| RemoveEvent;

