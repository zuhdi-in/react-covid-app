// import configureStore: untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/covidSlice";
import provReducer from "../features/provinceSlice";

/**
 * Membuat store: untuk state global
 * menerima param object: reducer
 * menyimpan slice yang sudah di buat
 */
const store = configureStore({
    reducer: {
        covid: covidReducer,
        prov: provReducer
    },
});

// export default store
export default store;