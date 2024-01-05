import { createSlice } from "@reduxjs/toolkit";

const initialState={
    orders:[]
}

const cafeSlice=createSlice({
    name: "orders",
    initialState,
    reducers:{
        addOrder:(state,action)=>{
            state.orders.push(action.payload);
        },

    }
})
export const { addOrder } = cafeSlice.actions;
export default cafeSlice.reducer;