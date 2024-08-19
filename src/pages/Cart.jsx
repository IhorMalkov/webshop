import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {selectTotalPrice,itemTotalPrice} from "../state/cartSlice";

const Cart = () => {
    const cartItems = useSelector(state => state.allCart.cart);
    const totalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        cartItems.forEach(item => {
            dispatch(itemTotalPrice(item));
        });
    }, [cartItems, dispatch]);


    console.log(totalPrice);
    return (
    <div>
        {cartItems.map((item) => (
            <div>
                <img src={item.img} alt={item.title}/>
                <div>
                    <h3>{item.title}</h3>
                    <h4>Quantity:{item.quantity}</h4>
                    <h3>Total: ${item.totalPrice}</h3>
                </div>
            </div>
        ))}
        <p className="font-semibold">Your total price is <span className="font-bold text-blue-500">${totalPrice}</span></p>
    </div>
    )
}

export default Cart
