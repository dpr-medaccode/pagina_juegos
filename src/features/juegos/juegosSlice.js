import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularJuegos, fetchSearchJuegos } from "./juegosService";

export const loadJuegos = createAsyncThunk(

    "games/loadGames",

    async ({ search, page }) => {

        if (search) {

            return await fetchSearchJuegos(search, page);

        } else {

            return await fetchPopularJuegos(page);

        }

    }

)

const gamesSlice = createSlice({

    name: "games",

    initialState: {
        juegos: [],
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(loadJuegos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(loadJuegos.fulfilled, (state, action) => {
                state.juegos = action.payload;
                state.loading = false;
            })

            .addCase(loadJuegos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    },
    
})

export default gamesSlice.reducer;
