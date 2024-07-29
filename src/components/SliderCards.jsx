import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import './Shop.css';
import creativitycard from  '../img/creativitycard.jpg';
import productivitycard from '../img/productivitycard.jpg';
import learningcard from '../img/learningcard.jpg';
import entertainmentcard from '../img/etnertainmentcard.jpg'
import applepencil from '../img/applepencil.jpg';
import guide from '../img/guide.jpg';

const slides = [
    {
        "image": productivitycard,
        "title": "Productivity",
        "text": "Your work place can be any place."
    },
    {
        "image": creativitycard,
        "title": "Creativity",
        "text": "Take your inner artist out and about."
    },
    {
        "image": learningcard,
        "title": "Learning",
        "text": "Your classroom can be anywhere."
    },
    {
        "image": entertainmentcard,
        "title": "Entertainment",
        "text": "Kick back. Tune it. Game on."
    },
    {
        "image": applepencil,
        "title": "Apple Pencil",
        "text": "Dream it up. Jot it down."
    },
    {
        "image": guide,
        "title": "IPadOS + Apps",
        "text": "Every day superpowers. Built right in."
    }
]

function SliderCards() {
    const handleButtonClick = () => {
        alert("It will be pop up");
    }
    return (
        <div className="mt-[90px]">
            <div>
                <h1>Get to know iPad.</h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={3.5}
                className="slider-container"
            >
                {slides.map((slides,index) =>(
                    <SwiperSlide className="slide-container">
                        <img className="slide-image" src={slides.image} alt={slides.title}/>
                        <div className="slide-text-container">
                            <h3>{slides.title}</h3>
                            <p className="slide-text">{slides.text}</p>
                        </div>
                        <button className="slide-button" onClick={handleButtonClick}>+</button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SliderCards;


