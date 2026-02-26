import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPublishers } from "./publishersService";

export const loadPublishers = createAsyncThunk(
  "publishers/loadPublishers",
  async ({ search, page }) => {
    return await fetchPublishers(search, page);
  }
);

const publishersSlice = createSlice({
  name: "publishers",
  initialState: {
    publishers: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPublishers.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadPublishers.fulfilled, (state, action) => {
        state.publishers = action.payload;
        state.loading = false;
      })
      .addCase(loadPublishers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default publishersSlice.reducer;
