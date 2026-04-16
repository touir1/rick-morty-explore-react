import "./CharacterList.css";
import { Link } from "react-router";
import Pagination from "./Pagination";
import { useFavorites } from "../hooks/useFavorites.hook";


function CharacterList({ characters, page, pageCount, onPageChange }) {
    const { isFavorite, toggleFavorite } = useFavorites();

    function handleToggleFavorite(e, isFav, characterId) {
        e.preventDefault();
        toggleFavorite(characterId);
    }

    return (
        <>
            <Pagination page={page} pageCount={pageCount} onPageChange={onPageChange} />
            <ul className="blocImage">
                {characters && characters.map((character) => {
                    
                    return (
                        <li key={character.id} className="characterItem">
                            <Link to={`/character/${character.id}`}>
                                <div className="characterImageWrapper">
                                    <img src={character.image} alt={character.name} />
                                    <span
                                        className={`starIcon ${isFavorite(character.id) ? "favorite" : "unfavorite"}`}
                                        onClick={(e) => handleToggleFavorite(e, isFavorite(character.id), character.id)}
                                    >
                                        {isFavorite(character.id) ? "\u2605" : "\u2606" /* u2605: filled star, u2606: empty star */} 
                                    </span>
                                </div>
                                <p>{character.name}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Pagination page={page} pageCount={pageCount} onPageChange={onPageChange} />
        </>
    )
}

export default CharacterList;