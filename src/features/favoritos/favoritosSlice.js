import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMisFavoritos, agregarFavorito, quitarFavorito } from "./favoritosService";

export const loadFavoritos = createAsyncThunk(
    "favoritos/loadFavoritos",
    async () => getMisFavoritos()
);

const favoritosSlice = createSlice({
    name: "favoritos",
    initialState: {
        favoritos: [],
        loading: false,
        error: null,
    },
    reducers: {
        toggleFavorito: (state, action) => {
            const id = action.payload;
            if (state.favoritos.includes(id)) {
                state.favoritos = quitarFavorito(id);
            } else {
                state.favoritos = agregarFavorito(id);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadFavoritos.fulfilled, (state, action) => {
            state.favoritos = action.payload;
        });
    },
});

export const { toggleFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;
