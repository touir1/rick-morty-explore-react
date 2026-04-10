import "./CharacterList.css";
import { Link } from "react-router";
import Pagination from "./Pagination";

function CharacterList({ characters, page, pageCount, onPageChange }) {

    
    return (
        <>
            <Pagination page={page} pageCount={pageCount} onPageChange={onPageChange} />
            <ul className="blocImage">
                {characters && characters.map((character) => (
                    <li key={character.id} className="characterItem">
                        <Link to={`/character/${character.id}`}>
                            <img src={character.image} alt={character.name} />
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