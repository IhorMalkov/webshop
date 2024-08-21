import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {selectTotalPrice, itemTotalPrice, updateItemQuantity} from "../state/cartSlice";

const Cart = () => {
    const cartItems = useSelector(state => state.allCart.cart);
    const totalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        cartItems.forEach(item => {
            dispatch(itemTotalPrice(item));
        });
    }, [cartItems, dispatch]);

    const handleQuantityChange = (itemId, newQuantity) => {
        const item = cartItems.find((item) => item.id === itemId);
        if (item) {
            dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
            dispatch(itemTotalPrice({ id: itemId }));
        }
    };


    console.log(totalPrice);
    return (
        <>
            <div className='flex justify-between'>
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <img src={item.img} alt={item.title}/>
                        <div>
                            <h3>{item.title}</h3>
                            <select
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                            >
                                {Array.from({length: 10}, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                         {i + 1}
                                    </option>
                                ))}
                            </select>
                            <h2>Total: ${item.totalPrice}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <p className="font-semibold">Your total price is
                <span className="font-bold text-blue-500">${totalPrice}</span>
            </p>
        </>
    )
}

export default Cart
