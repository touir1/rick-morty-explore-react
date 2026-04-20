import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        message: '',
        type: 'info',
        visible: false,
    },
    reducers: {
        showNotification: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.visible = true;
        },
        hideNotification: (state) => {
            state.visible = false;
        },
        clearNotification: (state) => {
            state.message = '';
            state.type = 'info';
            state.visible = false;
        }
    },
});

export const { showNotification, hideNotification, clearNotification } = notificationSlice.actions;
const reducer = notificationSlice.reducer;

export default reducer;