import React from 'react'
import {useSelector} from "react-redux";
import {selectTotalPrice} from "../state/cartSlice";

const Cart = () => {
    const totalPrice = useSelector(selectTotalPrice);
    console.log(totalPrice);
    return (
    <div>
        <p className="font-semibold">Your total price is <span className="font-bold text-blue-500">${totalPrice}</span></p>
    </div>
    )
}

export default Cart
