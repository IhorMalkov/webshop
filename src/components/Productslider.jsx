import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import ipadPro from '../img/ipadPro.png';
import ipadAir from '../img/ipadAir.png';
import ipad from '../img/iPad.png';
import ipadMini from '../img/ipadMini.png';

const slides = [
    {
        img: ipadPro,
        title: 'iPad Pro',
        info: 'The ultimate iPad experience with the most advanced technology.',
        prices: 'From $1399 or $119.76/mo. for 12 mos. at 4.99 % APR',
        id: 1
    },
    {
        img: ipadAir,
        title: 'iPad Air',
        info: 'Serious performance in a thin and light design.',
        prices: 'From $799 or $68.40/mo. for 12 mos. at 4.99 % APR‡',
        id: 2
    },
    {
        img: ipad,
        title: 'iPad',
        info: 'The colourful, all‑screen iPad for the things you do every day.',
        prices: 'From $499 or $42.72/mo. for 12 mos. at 4.99 % APR‡',
        id: 3
    },
    {
        img: ipadMini,
        title: 'iPad Mini',
        info: 'The full iPad experience in an ultraportable design.',
        prices: 'From $679 or $58.12/mo. for 12 mos. at 4.99 % APR‡',
        id: 4
    }
];

function Productslider() {
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
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="flex">
                        <div className="flex flex-col items-center text-center p-4 max-w-[300px] w-full">
                            <img src={slide.img} alt={slide.title} className="h-[260px] object-fit mb-4"
                            />
                            <p className="text-orange-400 mb-2">New</p>
                            <h3 className="font-bold mb-2">{slide.title}</h3>
                            <p className="mb-4">{slide.info}</p>
                            <p className="mb-4 font-bold">{slide.prices}</p>
                            <div className="flex gap-[60px]">
                                <button className="p-2 bg-blue-600 text-white rounded-full">Add to Cart</button>
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
