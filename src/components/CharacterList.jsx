import "./CharacterList.css";
import { Link } from "react-router";

function CharacterList({ characters, page, pageCount, onPageChange }) {
    return (
        <>
            <div className="top-pagination">
                <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>Previous</button>
                <input type="number" min={1} max={pageCount} value={page} onChange={(e) => onPageChange(Number(e.target.value))} />
                <button onClick={() => onPageChange(page + 1)} disabled={page >= pageCount}>Next</button>
            </div>
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
            <div className="bottom-pagination">
                <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>Previous</button>
                <input type="number" min={1} max={pageCount} value={page} onChange={(e) => onPageChange(Number(e.target.value))} />
                <button onClick={() => onPageChange(page + 1)} disabled={page >= pageCount}>Next</button>
            </div>
        </>
    )
}

export default CharacterList;