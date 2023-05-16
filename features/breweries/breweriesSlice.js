import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchBreweries = createAsyncThunk(
    'breweries/fetchBreweries',
    async () => {
        const response = await fetch(baseUrl + 'breweries');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const breweriessSlice = createSlice({
    name: 'breweries',
    initialState: { isLoading: true, errMess: null, breweriesArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBreweries.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchBreweries.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.breweriesArray = action.payload;
            })
            .addCase(fetchBreweries.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const breweriesReducer = breweriesSlice.reducer;