import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/event.reducer';

const getEventFeatureState = createFeatureSelector<State>('eventsState');

export const getEvent = createSelector (
    getEventFeatureState,
    state => state.events
);

export const getError = createSelector (
    getEventFeatureState,
    state => state.error
);