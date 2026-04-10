import { createContext } from "react";
import { useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
    isFavorite: () => false,
})

export function FavoritesProvider({ children }) {
    
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem("favorites");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    const addFavorite = (characterId) => {
        setFavorites((prev) => {
            const updatedFavorites = [...prev, characterId];
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    }

    const removeFavorite = (characterId) => {
        setFavorites((prev) => {
            const updatedFavorites = prev.filter((id) => id !== characterId);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
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