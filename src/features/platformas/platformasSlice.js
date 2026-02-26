import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPlatformas } from "./platformasService";

export const loadPlatformas = createAsyncThunk(
    "platforms/loadPlatforms",
    async ({ page }) => {
        return await fetchPlatformas(page);
    }
);

const platformasSlice = createSlice({
    name: "platforms",
    initialState: {
        plataformas: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPlatformas.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadPlatformas.fulfilled, (state, action) => {
                state.plataformas = action.payload;
                state.loading = false;
            })
            .addCase(loadPlatformas.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default platformasSlice.reducer;
