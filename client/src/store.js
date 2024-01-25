import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./cafeSlice"


export const store=configureStore({
    reducer:{orders:orderReducer},
})