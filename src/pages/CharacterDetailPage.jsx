import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import CharacterApi from '../apis/character.api'

function CharacterDetailPage() {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [character, setCharacter] = useState();

    const { id } = useParams();

    useEffect(() => {
        CharacterApi.getById(id).then((data) => {
            setCharacter(data);
            setLoading(false);
        }).catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {character && (
                <div>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt={character.name} />
                    <br />
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <p>Location: {character.location?.name}</p>
                    <p>Number of episodes: {character.episode?.length}</p>
                </div>
            )}
        </div>
    )
}

export default CharacterDetailPage;