import { configureStore } from '@reduxjs/toolkit';
import { beersReducer } from '../features/beers/beersSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { breweriesReducer } from '../features/breweries/breweriesSlice';
import { eventsReducer } from '../features/events/eventsSlice';

export const store = configureStore({
    reducer: {
        beers: beersReducer,
        comments: commentsReducer,
        breweries: breweriesReducer,
        events: eventsReducer
    }
});