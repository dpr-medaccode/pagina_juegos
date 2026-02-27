import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIdPublishers, fetchPublishersJuegos } from "./publishersService";

export const loadPublisherPorId = createAsyncThunk(
    "idPublishers/loadPublisherPorId",
    async (id) => {
        const data = await fetchIdPublishers(id);
        return data;
    }
);

export const loadPublisherJuegos = createAsyncThunk(
    "idPublishers/loadPublisherJuegos",
    async ({ id, pagina, cantidad }) => {
        const data = await fetchPublishersJuegos(id, pagina, cantidad);
        return {
            juegos: data,
            pagina,
        };
    }
);

const idPublishersSlice = createSlice({
    name: "idPublishers",
    initialState: {
        publisher: null,
        juegos: [],
        pagina: 1,
        loadingPublisher: false,
        loadingJuegos: false,
        error: null,
    },
    reducers: {
        clearPublisher: (state) => {
            state.publisher = null;
            state.juegos = [];
            state.error = null;
            state.pagina = 1;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(loadPublisherPorId.pending, (state) => {
                state.loadingPublisher = true;
                state.error = null;
            })

            .addCase(loadPublisherPorId.fulfilled, (state, action) => {
                state.loadingPublisher = false;
                state.publisher = action.payload;
            })

            .addCase(loadPublisherPorId.rejected, (state, action) => {
                state.loadingPublisher = false;
                state.error = action.error.message;
            })

            .addCase(loadPublisherJuegos.pending, (state) => {
                state.loadingJuegos = true;
            })

            .addCase(loadPublisherJuegos.fulfilled, (state, action) => {
                state.loadingJuegos = false;
                state.juegos = action.payload.juegos;
                state.pagina = action.payload.pagina;
            })

            .addCase(loadPublisherJuegos.rejected, (state, action) => {
                state.loadingJuegos = false;
                state.error = action.error.message;
            })

    },
    
});

export const { clearPublisher } = idPublishersSlice.actions;
export default idPublishersSlice.reducer;
