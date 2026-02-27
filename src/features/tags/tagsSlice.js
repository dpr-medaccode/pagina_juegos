import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularTags, fetchSearchTags } from "./tagsService";


export const loadPopularTags = createAsyncThunk(
  "tags/loadPopularTags",
  async ({ pagina = 1, cantidad = 20 }) => {
    const data = await fetchPopularTags(pagina, cantidad);
    return data;
  }
);


export const loadSearchTags = createAsyncThunk(
  "tags/loadSearchTags",
  async ({ search, pagina = 1, cantidad = 50 }) => {
    const data = await fetchSearchTags(search, pagina, cantidad);
    return data;
  }
);

const tagsSlice = createSlice({
  name: "tags",

  initialState: {
    tags: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearTags: (state) => {
      state.tags = [];
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      
      .addCase(loadPopularTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPopularTags.fulfilled, (state, action) => {
        state.tags = action.payload;
        state.loading = false;
      })
      .addCase(loadPopularTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

    
      .addCase(loadSearchTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadSearchTags.fulfilled, (state, action) => {
        state.tags = action.payload;
        state.loading = false;
      })
      .addCase(loadSearchTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearTags } = tagsSlice.actions;

export default tagsSlice.reducer;
