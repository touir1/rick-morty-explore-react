import { createSlice } from '@reduxjs/toolkit'


const initialState = () => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState(),
    reducers: {
        setFavorites: (state, action) => {
            state = action.payload;
            localStorage.setItem("favorites", JSON.stringify(state));
            return state;
        },
        addFavorite: (state, action) => {
            if(state.includes(action.payload.id)) 
                return state;
            state.push(action.payload.id);
            localStorage.setItem("favorites", JSON.stringify(state));
        },
        removeFavorite: (state, action) => {
            const newState = state.filter(favorite => favorite !== action.payload.id);
            localStorage.setItem("favorites", JSON.stringify(newState));
            return newState;
        },
    }
});

const { actions, reducer } = favoritesSlice;

export const { setFavorites, addFavorite, removeFavorite } = actions;

export default reducer;