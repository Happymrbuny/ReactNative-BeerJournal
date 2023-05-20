import { createSlice } from '@reduxjs/toolkit';

const myBeersSlice = createSlice({
    name: 'myBeers',
    initialState: [],
    reducers: {
        toggleMyBeer: (myBeers, action) => {
            if (myBeers.includes(action.payload)) {
                return myBeers.filter(
                    (myBeer) => myBeer !== action.payload
                );
            } else {
                myBeers.push(action.payload);
            }
        }
    }
});

export const { toggleMyBeer } = myBeersSlice.actions;
export const myBeersReducer = myBeersSlice.reducer;