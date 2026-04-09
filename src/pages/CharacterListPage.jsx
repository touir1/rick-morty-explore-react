import { useEffect, useState } from "react";
import characterAPI from "../apis/character.api";
import CharacterList from "../components/CharacterList";
import "./CharacterListPage.css";
import CharacterSearch from "../components/CharacterSearch";

function CharacterListPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const [characters, setCharacters] = useState([]);
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        characterAPI.getAll({ ...filters, page }).then((data) => {
            setCharacters(data.results);
            setPageCount(data.pageCount);
            setLoading(false);
        }).catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, [filters, page]);

    function handleSearchSubmit(searchFilters) {
        // remove undefined or empty filters
        const newFilters = { ...searchFilters };
        Object.keys(newFilters).forEach((key) => {
            if (!newFilters[key]) {
                delete newFilters[key];
            } 
        });
        setFilters(newFilters);
        setPage(1);
    }

    function handlePageChange(newPage) {
        setPage(newPage);
    }

    if (loading) {
        return <p>Character list is loading...</p>
    }

    if (error) {
        return <p>Error loading characters: ({error.message})</p>
    }

    return (
        <div>
            <CharacterSearch handleSubmit={handleSearchSubmit} />
            <h1>Characters List</h1>
            <CharacterList characters={characters} page={page} pageCount={pageCount} onPageChange={handlePageChange} />
        </div>
    );
}

export default CharacterListPage;