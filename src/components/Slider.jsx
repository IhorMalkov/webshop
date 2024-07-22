import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import './Shop.css'

import productivitycard from '../img/productivitycard.jpg';

function Slider() {
    return (
        <div>
            <div className="ml-[30px]">
                <h1>Get to know iPad.</h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={3.6}
            >
                <SwiperSlide className="cursor-pointer ml-[30px]"><img src={productivitycard}/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
