import { createSlice } from "@reduxjs/toolkit";

/** 
 * buat Slice untuk generate action reducers
 * params object:name, initialState, reducers
*/

const covidSlice = createSlice({
    name: "Covid Slice", // nama slice
    initialState: { 
        covid: [],
    },
    reducers: { 
        // membuat reducer: untuk update state
        updateCovid(state, action) {
            state.covid = action.payload;
        },
    },
        
});


const covidReducer = covidSlice.reducer;
const { addCovid, updateCovid } = covidSlice.actions;

export default covidReducer;
export {addCovid, updateCovid};