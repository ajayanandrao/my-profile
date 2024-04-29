import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "./Redux/CanvasSlice.js";

export const Store = configureStore({
    reducer: {
        canva: canvasReducer,
    }
});  