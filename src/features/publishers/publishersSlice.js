import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularPublishers, fetchSearchPublishers } from "./publishersService";

export const loadPopularPublishers = createAsyncThunk(
  "publishers/loadPopularPublishers",
  async ({ pagina = 1, cantidad = 20 }) => {
    const data = await fetchPopularPublishers(pagina, cantidad);
    return data
  }
);

export const loadSearchPublishers = createAsyncThunk(
  "publishers/loadSearchPublishers",
  async ({ search, pagina = 1, cantidad = 50 }) => {
    const data = await fetchSearchPublishers(search, pagina, cantidad);
    return data;
  }
);

const publishersSlice = createSlice({
  name: "publishers",

  initialState: {
    publishers: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearPublishers: (state) => {
      state.publishers = [];
      state.error = null;
    },
  },

  extraReducers: (builder) => {

    builder

      .addCase(loadPopularPublishers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loadPopularPublishers.fulfilled, (state, action) => {
        state.publishers = action.payload;
        state.loading = false;
      })

      .addCase(loadPopularPublishers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(loadSearchPublishers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loadSearchPublishers.fulfilled, (state, action) => {
        state.publishers = action.payload;
        state.loading = false;
      })

      .addCase(loadSearchPublishers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});

export const { clearPublishers } = publishersSlice.actions;

export default publishersSlice.reducer;
