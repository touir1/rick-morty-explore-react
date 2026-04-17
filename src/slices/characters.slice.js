import { createSlice, createAsyncThunk, isPending, isRejected } from "@reduxjs/toolkit";
import { fetchCharacters } from "./characters.thunk";

export const CHARACTERS_API_BASE_URL = "https://rickandmortyapi.com/api/character";

const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        page: 1,
        url: CHARACTERS_API_BASE_URL,
        pageCount: 0,
        status: "idle",
        error: null,
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
            state.page = 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.items = action.payload.results;
                state.pageCount = action.payload.info?.pages || 0;
                state.status = "succeeded";
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch characters";
            })
            .addCase(fetchCharacters.pending, (state, action) => {
                state.status = "loading";
                state.error = null;
            });
    }
});

const { actions, reducer } = charactersSlice;

export const { setPage, setUrl } = actions;

export default reducer;