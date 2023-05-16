import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchBeers = createAsyncThunk(
    'beers/fetchBeers',
    async () => {
        const response = await fetch(baseUrl + 'beers');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const beersSlice = createSlice({
    name: 'beers',
    initialState: { isLoading: true, errMess: null, beersArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBeers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchBeers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.beersArray = action.payload;
            })
            .addCase(fetchBeers.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const beersReducer = beersSlice.reducer;