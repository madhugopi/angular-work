import { Action } from '@ngrx/store';
import { Event } from '../models/event';
import { EventActions, EventActionTypes } from '../actions/event.actions';

export const eventFeatureKey = 'eventsState';

export interface State {
  events: Event[],
  error: string
}

export const initialState: State = {
  events: [],
  error: ''
};

export function reducer(state = initialState, action: EventActions): State {
  switch (action.type) {

    case EventActionTypes.LoadEvents:
      return {
        ...state
      }
    case EventActionTypes.LoadEventsSuccess:
      return {
        ...state,
        events: action.payload.data,
        error: ''
      }
    case EventActionTypes.LoadEventsFailure:
      return {
        ...state,
        events: [],
        error: action.payload.error
      }
    case EventActionTypes.AddEvent:
      return {
        events: [...state.events, action.payload.data],
        error: ''
      }
    case EventActionTypes.AddEventsSuccess:
      return {
        ...state,
        events: action.payload.data,
        error: ''
      }
    case EventActionTypes.AddEventsFailure:
      return {
        ...state,
        events: [],
        error: action.payload.error
      }
    case EventActionTypes.RemoveEvent:
      let newState = [...state.events];
      newState.splice(action.payload.data, 1);
      return {
        events: newState,
        error: ''
      }

    default:
      return state;
  }
}
