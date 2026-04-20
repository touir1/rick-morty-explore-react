import { configureStore, combineReducers } from '@reduxjs/toolkit'
import themeReducer from '../slices/theme.slice'
import favoritesReducer from '../slices/favorites.slice';
import charactersReducer from '../slices/characters.slice';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';
import { favoritesMiddleware } from '../middelwares/favorites.middleware';
import notificationReducer from '../slices/notifications.slice';

const rootReducer = combineReducers({
    theme: themeReducer,
    favorites: favoritesReducer,
    characters: charactersReducer,
    notifications: notificationReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites', 'theme'],
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }).concat(favoritesMiddleware),
});

export const persistor = persistStore(store);