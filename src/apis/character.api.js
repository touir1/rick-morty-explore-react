const API_BASE_URL = "https://rickandmortyapi.com/api";

const getAll = async (filters) => {
    // check if filters is empty, if so, don't add query params
    const hasFilters = filters && Object.keys(filters).length > 0;
    const queryParams = hasFilters ? new URLSearchParams(filters).toString() : "";

    const url = `${API_BASE_URL}/character?${queryParams}`;
    return fetch(url)
        .then((response) => {
            if (response.status === 404) {
                return { results: [], pageCount: 0 };
            }
            if (!response.ok) {
                throw new Error("Error fetching characters");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Characters: ", data);
            return { results: data.results, pageCount: data?.info?.pages };
        })
        .catch((error) => {
            console.error("Error fetching characters: ", error);
            throw error;
        });
}

const getById = async (id) => {
    return fetch(`${API_BASE_URL}/character/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error fetching character with id ${id}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(`Character ${id}: `, data);
            return data;
        })
        .catch((error) => {
            console.error(`Error fetching character with id ${id}: `, error);
            throw error;
        });
}

export default {
    getAll: getAll,
    getById: getById
}