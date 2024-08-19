import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import {product} from "../products";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../state/cartSlice";


function Productslider() {
    const products = useSelector(state => state.allCart.cart);
    console.log(products);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        console.log(dispatch(addProduct(product))); // Dispatch addItem action
    };

    return (
        <div className="mt-[90px] bg-gray-100 w-[100%]">
            <h1>Explore the Lineup.</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={3}
                className="slider-container"
            >
                {product.map((item) => (
                    <SwiperSlide key={item.id} className="flex">
                        <div className="flex flex-col items-center text-center p-4 max-w-[300px] w-full">
                            <img src={item.img} alt={item.title} className="h-[260px] object-fit mb-4"
                            />
                            <p className="text-orange-400 mb-2">New</p>
                            <h3 className="font-bold mb-2">{item.title}</h3>
                            <p className="mb-4">{item.info}</p>
                            <p className="mb-4 font-bold">{item.prices}</p>
                            <div className="flex gap-[60px]">
                                <button onClick={() => handleAddToCart(item)} className="p-2 bg-blue-600 text-white rounded-full">Add to Cart</button>
                                <button className="p-2 bg-blue-500 text-white rounded-full">Learn more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Productslider;
