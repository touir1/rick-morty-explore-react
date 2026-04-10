import { createContext } from "react";
import { useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
    isFavorite: () => false,
})

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (characterId) => {
        setFavorites((prev) => [...prev, characterId]);
    }

    const removeFavorite = (characterId) => {
        setFavorites((prev) => prev.filter((id) => id !== characterId));
    }

    const isFavorite = (characterId) => {
        return favorites.includes(characterId);
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;