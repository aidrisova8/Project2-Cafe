import { createSlice } from "@reduxjs/toolkit";

const initialState={
    meals:[]
}

const cafeSlice=createSlice({
    name: "meals",
    initialState,
    reducers:{

    }
})

export default cafeSlice.reducer;