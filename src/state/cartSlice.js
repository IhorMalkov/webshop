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
        addItem: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            item.quantity++;
        },
        substractItem(state, action) {
            const item= state.cart.find(item => item.id === action.payload.id);
            item.quantity--;
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
    }
})

export const { addProduct, addItem, substractItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;