import { createSlice } from "@reduxjs/toolkit";

const initialState={
    orders:[]
}

const cafeSlice=createSlice({
    name: "orders",
    initialState,
    reducers:{

    }
})

export default cafeSlice.reducer;