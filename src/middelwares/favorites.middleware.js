import { showNotification, hideNotification } from '../slices/notifications.slice';
import { toast } from 'react-toastify';

export const favoritesMiddleware = (store) => (next) => (action) => {
    const state = store.getState();
    if(action.type === "favorites/addFavorite" && state.favorites.length >= 10) {
        const msg = "Cannot add more than 10 favorites";
        console.warn(msg);
        const notification = { message: msg, type: "warning" };
        store.dispatch(showNotification(notification));
        setTimeout(() => store.dispatch(hideNotification()), 3000);
        toast(notification.message, { type: notification.type });
        return;
    }

    const result = next(action);
    return result;
}