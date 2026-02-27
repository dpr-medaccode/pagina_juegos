import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  busqueda: "",
  filtro: "games",
};

const busquedaSlice = createSlice({
  name: "busqueda",
  initialState,
  reducers: {
    setBusqueda: (state, action) => {
      state.busqueda = action.payload;
    },
    setFiltro: (state, action) => {
      state.filtro = action.payload;
    },
    resetBusqueda: (state) => {
      state.busqueda = "";
    },
  },
});

export const { setBusqueda, setFiltro, resetBusqueda } = busquedaSlice.actions;
export default busquedaSlice.reducer;
