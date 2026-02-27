import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPlataformaPorId, fetchPlataformaJuegos } from "./platformasService";

export const loadPlataformaPorId = createAsyncThunk(

    "idPlatforms/loadPlataformaPorId",

    async (id) => {

        const data = await fetchPlataformaPorId(id);

        return data;

    }

)


export const loadPlataformaJuegos = createAsyncThunk(

    "idPlatforms/loadPlataformaJuegos",

    async ({ id, pagina, cantidad }) => {

        const data = await fetchPlataformaJuegos(id, pagina, cantidad);

        return {

            juegos: data,

            pagina

        }

    }
);


const idPlatformsSlice = createSlice({

    name: "idPlatforms",

    initialState: {

        plataforma: null,

        juegos: [],

        pagina: 1,

        loadingPlataforma: false,

        loadingJuegos: false,

        error: null,

    },

    reducers: {

        clearPlataforma: (state) => {

            state.plataforma = null;

            state.juegos = [];

            state.error = null;

            state.pagina = 1;

        }

    },

    extraReducers: (builder) => {

        builder

          
            .addCase(loadPlataformaPorId.pending, (state) => {

                state.loadingPlataforma = true;

                state.error = null;

            })

            .addCase(loadPlataformaPorId.fulfilled, (state, action) => {

                state.loadingPlataforma = false;

                state.plataforma = action.payload;

            })

            .addCase(loadPlataformaPorId.rejected, (state, action) => {

                state.loadingPlataforma = false;

                state.error = action.error.message;

            })


            
            .addCase(loadPlataformaJuegos.pending, (state) => {

                state.loadingJuegos = true;

            })

            .addCase(loadPlataformaJuegos.fulfilled, (state, action) => {

                state.loadingJuegos = false;

                state.juegos = action.payload.juegos;

                state.pagina = action.payload.pagina;

            })

            .addCase(loadPlataformaJuegos.rejected, (state, action) => {

                state.loadingJuegos = false;

                state.error = action.error.message;

            });

    }

});


export const { clearPlataforma } = idPlatformsSlice.actions;

export default idPlatformsSlice.reducer;
