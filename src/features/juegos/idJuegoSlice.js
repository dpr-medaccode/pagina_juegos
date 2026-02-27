import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJuegoPorId } from "./juegosService";

export const loadJuegoPorId = createAsyncThunk(
    "idGame/loadJuegoPorId",
    async (id) => {
        const data = await fetchJuegoPorId(id);
        return data
    }
)

const idJuegoSlice = createSlice({

    name: "idGame",

    initialState: {
        id: null,
        juego: null,
        loading: false,
        error: null,
    },

    reducers: {

        clearIdGame: (state) => {
            state.id = null
            state.juego = null
            state.error = null
        },
    },

    extraReducers: (builder) => {

        builder

            .addCase(loadJuegoPorId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(loadJuegoPorId.fulfilled, (state, action) => {
                state.juego = action.payload;
                state.loading = false;
            })

            .addCase(loadJuegoPorId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    },

})

export const { clearIdGame } = idJuegoSlice.actions

export default idJuegoSlice.reducer
