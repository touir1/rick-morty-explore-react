import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../slices/favorites.slice";
import { favoritesSelector } from "../slices/favorites.selector";

export const useFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(favoritesSelector);

    const isFavorite = (characterId) => {
        return favorites.some(favorite => favorite === characterId);
    };

    const toggleFavorite = (characterId) => {
        if (isFavorite(characterId)) {
            dispatch(removeFavorite({ id: characterId }));
        } else {
            dispatch(addFavorite({ id: characterId }));
        }
    };

    return { isFavorite, toggleFavorite };
}