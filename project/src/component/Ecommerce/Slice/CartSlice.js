import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart : []
    },
    reducers:{
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
              state.cart[find].quantity += 1;
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });
            }
          },
}
})

export const {addToCart} = cartSlice.actions;