import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  orderCount: {},
  customer:{},
  receiptOrder:[]
};

const cafeSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const { idMeal, strMeal, price, strMealThumb } = action.payload;
      const existingOrder = state.orders.find((order) => order.idMeal === idMeal);

      if (existingOrder) {
        state.orderCount[idMeal]++;
      } else {
        state.orders.push(action.payload);
        state.orderCount[idMeal] = 1;
      }
    },
    increaseOrder: (state, action) => {
      const { idMeal } = action.payload;
      if (state.orderCount[idMeal]) {
        state.orderCount[idMeal]=state.orderCount[idMeal]+1;
      }
    },
    decreaseOrder: (state, action) => {
      const { idMeal } = action.payload;
      if (state.orderCount[idMeal] && state.orderCount[idMeal] > 0) {
        state.orderCount[idMeal]--;
      }
      if (state.orderCount[idMeal] === 0) {
        state.orders=state.orders.filter(order=>order.idMeal!==idMeal);
    }},

    deleteOrder: (state, action) => {
      const {idMeal} =action.payload;
   state.orders=state.orders.filter(order=>order.idMeal!==idMeal);
      
    },
addCustomer:(state,action)=>{
  state.customer = action.payload;
},

clearCart: (state, action) => {
  state.receiptOrder = state.orders.map(item => ({
    ...item,
    count: state.orderCount[item.idMeal] || 0
  }));
  state.orders = [];
  state.orderCount = {};
},
  },
});

export const { addOrder, increaseOrder, decreaseOrder,deleteOrder,addCustomer,clearCart} = cafeSlice.actions;
export default cafeSlice.reducer;
