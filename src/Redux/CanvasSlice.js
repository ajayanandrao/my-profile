import { createSlice } from "@reduxjs/toolkit";

export const CanvasSlice = createSlice({
    name: "canvas",
    initialState: {
        canvasWidth: 0,
        canvasHeight: 0,
        loading: 0
    },
    reducers: {
        canvasW: (state, action) => {
            state.canvasWidth = action.payload;
        },
        canvasH: (state, action) => {
            state.canvasHeight = action.payload;
        },
        load: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { canvasW, canvasH, load } = CanvasSlice.actions;

export default CanvasSlice.reducer;
