import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

export const cartSlice  = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addProduct: (state,action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
            }else{
                state.cart.push({...action.payload, quantity: 1});
            }
        },
    }
})