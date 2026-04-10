import "./CharacterList.css";
import { Link } from "react-router";
import { useContext } from "react";
import Pagination from "./Pagination";
import FavoritesContext from "../contexts/FavoritesContext";

function CharacterList({ characters, page, pageCount, onPageChange }) {
    const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

    function toggleFavorite(e, characterId) {
        e.preventDefault();
        isFavorite(characterId) ? removeFavorite(characterId) : addFavorite(characterId);
    }

    return (
        <>
            <Pagination page={page} pageCount={pageCount} onPageChange={onPageChange} />
            <ul className="blocImage">
                {characters && characters.map((character) => (
                    <li key={character.id} className="characterItem">
                        <Link to={`/character/${character.id}`}>
                            <div className="characterImageWrapper">
                                <img src={character.image} alt={character.name} />
                                <span
                                    className={`starIcon ${isFavorite(character.id) ? "favorite" : "unfavorite"}`}
                                    onClick={(e) => toggleFavorite(e, character.id)}
                                >
                                    {isFavorite(character.id) ? "★" : "☆"}
                                </span>
                            </div>
                            <p>{character.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Pagination page={page} pageCount={pageCount} onPageChange={onPageChange} />
        </>
    )
}

export default CharacterList;