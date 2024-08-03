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
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        itemTotalPrice: (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if(itemInCart){
              itemInCart.totalPrice = itemInCart.price * itemInCart.quantity;
            }
        }
    }
})
export const selectTotalQuantity = (state) =>
state.allCart.cart.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = (state) =>
    state.allCart.cart.reduce((total, item) => total + item.price * item.quantity, 0);

export const { addProduct , removeItem,itemTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;