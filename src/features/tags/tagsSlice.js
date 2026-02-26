import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTags } from "./tagsService";

export const loadTags = createAsyncThunk(
  "tags/loadTags",
  async ({ search, page }) => {
    return await fetchTags(search, page);
  }
);

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    tags: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTags.fulfilled, (state, action) => {
        state.tags = action.payload;
        state.loading = false;
      })
      .addCase(loadTags.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default tagsSlice.reducer;
