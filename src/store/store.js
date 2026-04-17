import { configureStore, combineReducers } from '@reduxjs/toolkit'
import themeReducer from '../slices/theme.slice'
import favoritesReducer from '../slices/favorites.slice';
import charactersReducer from '../slices/characters.slice';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';


const rootReducer = combineReducers({
    theme: themeReducer,
    favorites: favoritesReducer,
    characters: charactersReducer,
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
    }),
});

console.log(storage)

export const persistor = persistStore(store);