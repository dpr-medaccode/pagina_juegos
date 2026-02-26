import { configureStore } from "@reduxjs/toolkit";

import juegosReducer from "../features/juegos/juegosSlice";
import platformasReducer from "../features/platformas/platformasSlice";
import tagsReducer from "../features/tags/tagsSlice";
import publishersReducer from "../features/publishers/publishersSlice";

export const store = configureStore({
  reducer: {
    games: juegosReducer,
    platforms: platformasReducer,
    tags: tagsReducer,
    publishers: publishersReducer,
  },
});
