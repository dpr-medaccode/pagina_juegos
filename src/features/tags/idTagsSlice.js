import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIdTag, fetchTagJuegos } from "./tagsService";

export const loadTagPorId = createAsyncThunk(
  "idTags/loadTagPorId",
  async (id) => {
    const data = await fetchIdTag(id);
    return data;
  }
);


export const loadTagJuegos = createAsyncThunk(
  "idTags/loadTagJuegos",
  async ({ id, pagina, cantidad }) => {
    const data = await fetchTagJuegos(id, pagina, cantidad);
    return { juegos: data, pagina };
  }
);


const idTagsSlice = createSlice({
  name: "idTags",
  initialState: {
    tag: null,
    juegos: [],
    pagina: 1,
    loadingTag: false,
    loadingJuegos: false,
    error: null,
  },
  reducers: {
    clearTag: (state) => {
      state.tag = null;
      state.juegos = [];
      state.pagina = 1;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(loadTagPorId.pending, (state) => {
        state.loadingTag = true;
        state.error = null;
      })

      .addCase(loadTagPorId.fulfilled, (state, action) => {
        state.loadingTag = false;
        state.tag = action.payload;
      })

      .addCase(loadTagPorId.rejected, (state, action) => {
        state.loadingTag = false;
        state.error = action.error.message;
      })

      .addCase(loadTagJuegos.pending, (state) => {
        state.loadingJuegos = true;
      })

      .addCase(loadTagJuegos.fulfilled, (state, action) => {
        state.loadingJuegos = false;
        state.juegos = action.payload.juegos;
        state.pagina = action.payload.pagina;
      })

      .addCase(loadTagJuegos.rejected, (state, action) => {
        state.loadingJuegos = false;
        state.error = action.error.message;
      })

  },
  
})

export const { clearTag } = idTagsSlice.actions;
export default idTagsSlice.reducer;
