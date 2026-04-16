import { createSlice } from '@reduxjs/toolkit'

const initialState = "light";
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
        set: (state, action) => action.payload
    }
});

const { actions, reducer } = themeSlice;

export const { toggleTheme, set } = actions;

export default reducer;