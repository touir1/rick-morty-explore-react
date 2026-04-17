import { createSlice } from '@reduxjs/toolkit'


const initialState = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            return action.payload;
        },
        addFavorite: (state, action) => {
            if(state.includes(action.payload.id)) 
                return state;
            state.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            const newState = state.filter(favorite => favorite !== action.payload.id);
            return newState;
        },
    }
});

const { actions, reducer } = favoritesSlice;

export const { setFavorites, addFavorite, removeFavorite } = actions;

export default reducer;