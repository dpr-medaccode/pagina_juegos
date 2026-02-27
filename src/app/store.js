import { configureStore } from "@reduxjs/toolkit";

import juegosReducer from "../features/juegos/juegosSlice";
import platformasReducer from "../features/platformas/platformasSlice";
import tagsReducer from "../features/tags/tagsSlice";
import publishersReducer from "../features/publishers/publishersSlice";
import idJuegoReducer from "../features/juegos/idJuegoSlice";
import idPlatformsReducer from "../features/platformas/idPlatformsSlice"
import idPublishersReducer from "../features/publishers/idPublishersSlice";
import idTagsReducer from "../features/tags/idTagsSlice";
import eventosReducer from "../features/eventos/eventosSlice";
import favoritosReducer from '../features/favoritos/favoritosSlice'
import busquedaReducer from '../features/header/busquedaSlice'

export const store = configureStore({

    reducer: {

        games: juegosReducer,
        idGame: idJuegoReducer,

        platforms: platformasReducer,
        idPlatforms: idPlatformsReducer,

        tags: tagsReducer,
        idTags: idTagsReducer,

        publishers: publishersReducer,
        idPublishers: idPublishersReducer,

        eventos: eventosReducer,

        favoritos: favoritosReducer,

        busqueda: busquedaReducer,

    },

});
