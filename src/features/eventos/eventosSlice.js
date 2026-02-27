import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEventos } from "./eventosService";
import { getMisEventos, apuntarseEvento, cancelarEvento } from "./misEventosService";


export const loadEventos = createAsyncThunk("eventos/loadEventos", async () => {

    const data = await fetchEventos()
    return data

})

export const loadMisEventos = createAsyncThunk("eventos/loadMisEventos", async () => {
    return getMisEventos()
})

const eventosSlice = createSlice({

    name: "eventos",

    initialState: {

        eventos: [],

        misEventos: [], 

        loading: false,

        error: null,

    },

    reducers: {

        apuntarse: (state, action) => {
            const id = action.payload;
            state.misEventos = apuntarseEvento(id);
        },

        cancelar: (state, action) => {
            const id = action.payload;
            state.misEventos = cancelarEvento(id);
        },

    },

    extraReducers: (builder) => {

        builder

            .addCase(loadEventos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(loadEventos.fulfilled, (state, action) => {
                state.loading = false;
                state.eventos = action.payload;
            })

            .addCase(loadEventos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(loadMisEventos.fulfilled, (state, action) => {
                state.misEventos = action.payload;
            })
    },
})

export const { apuntarse, cancelar } = eventosSlice.actions;
export default eventosSlice.reducer;
