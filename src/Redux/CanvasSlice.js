import { createSlice } from "@reduxjs/toolkit";

export const CanvasSlice = createSlice({
    name: "canvas",
    initialState: {
        canvasWidth: 0,
        canvasHeight: 0
    },
    reducers: {
        canvasW: (state, action) => {
            state.canvasWidth = action.payload;
        },
        canvasH: (state, action) => {
            state.canvasHeight = action.payload;
        }
    }
});

export const { canvasW, canvasH } = CanvasSlice.actions;

export default CanvasSlice.reducer;
