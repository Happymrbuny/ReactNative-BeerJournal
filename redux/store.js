import {
    persistStore,
    persistCombineReducers,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { beersReducer } from '../features/beers/beersSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { breweriesReducer } from '../features/breweries/breweriesSlice';
import { eventsReducer } from '../features/events/eventsSlice';
import { myBeersReducer } from '../features/myBeers/myBeersSlice';

const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
};

export const store = configureStore({
    reducer: persistCombineReducers(config, {
        beers: beersReducer,
        comments: commentsReducer,
        breweries: breweriesReducer,
        events: eventsReducer,
        myBeers: myBeersReducer
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});

export const persistor = persistStore(store);