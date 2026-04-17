import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacters = createAsyncThunk(
    "characters/fetch", 
    async ({url, page, filters}, {rejectWithValue}) => {
        const urlObject = new URL(url);
        urlObject.searchParams.set("page", page);

        const hasFilters = filters && Object.keys(filters).length > 0;
        if (hasFilters) {
            Object.keys(filters).forEach((key) => {
                urlObject.searchParams.set(key, filters[key]);
            });
        }

        try {
            const response = await fetch(urlObject.toString());
            if(response.status === 404) {
                return { results: [], info: { pages: 0 } };
            }
            if (!response.ok) {
                return rejectWithValue(`Error fetching characters: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);