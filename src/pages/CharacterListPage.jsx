import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";
import "./CharacterListPage.css";
import CharacterSearch from "../components/CharacterSearch";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../slices/characters.thunk";
import { 
    selectCharacters, 
    selectCharactersError, 
    selectCharactersPage, 
    selectCharactersPageCount,
    selectCharactersStatus 
} from "../slices/characters.selector";
import { CHARACTERS_API_BASE_URL, setPage } from "../slices/characters.slice";


function CharacterListPage() {
    const dispatch = useDispatch();
    const characters = useSelector(selectCharacters);
    const page = useSelector(selectCharactersPage);
    const pageCount = useSelector(selectCharactersPageCount);
    const error = useSelector(selectCharactersError);
    const status = useSelector(selectCharactersStatus);

    const [filters, setFilters] = useState({});

    useEffect(() => {
        dispatch(fetchCharacters({ url: CHARACTERS_API_BASE_URL, page, filters }))
    }, [filters, page, dispatch]);

    function handleSearchSubmit(searchFilters) {
        // remove undefined or empty filters
        const newFilters = { ...searchFilters };
        Object.keys(newFilters).forEach((key) => {
            if (!newFilters[key]) {
                delete newFilters[key];
            } 
        });
        setFilters(newFilters);
        dispatch(setPage(1));
    }

    function handlePageChange(newPage) {
        dispatch(setPage(newPage));
    }

    return (
        <div>
            <CharacterSearch handleSubmit={handleSearchSubmit} />
            <h1>Characters List</h1>
            {status === "loading" && <p>Character list is loading...</p>}
            {status === "failed" && <p>Error loading characters: ({error})</p>}
            {status === "succeeded" && <CharacterList characters={characters} page={page} pageCount={pageCount} onPageChange={handlePageChange} />}
        </div>
    );
}

export default CharacterListPage;