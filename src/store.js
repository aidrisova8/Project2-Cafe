import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./cafeSlice"


export const store=configureStore({
    reducer:{meals:cafeReducer},
})