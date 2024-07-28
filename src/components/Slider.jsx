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

function Slider() {
    const handleButtonClick = () => {
        alert("It will be pop up");
    }
    return (
        <div>
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
                <SwiperSlide className="slide-container">
                    <img src={productivitycard} alt="productivity card" className="slide-image"/>
                    <div className="slide-text-container">
                        <h3>Productivity</h3>
                        <p className="slide-text">Your work place <br/> can be any place.</p>
                    </div>
                    <button className="slide-button" onClick={handleButtonClick}>+</button>
                </SwiperSlide>
                <SwiperSlide className="slide-container">
                    <img src={creativitycard} alt="productivity card" className="slide-image"/>
                    <div className="slide-text-container">
                        <h3>Creativity</h3>
                        <p className="slide-text">Take your inner artist<br/> out and about.</p>
                    </div>
                    <button className="slide-button" onClick={handleButtonClick}>+</button>
                </SwiperSlide>
                <SwiperSlide className="slide-container">
                    <img src={learningcard} alt="productivity card" className="slide-image"/>
                    <div className="slide-text-container">
                        <h3>Learning</h3>
                        <p className="slide-text">Your classroom<br/>can be anywhere.</p>
                    </div>
                    <button className="slide-button" onClick={handleButtonClick}>+</button>
                </SwiperSlide>
                <SwiperSlide className="slide-container">
                    <img src={entertainmentcard} alt="productivity card" className="slide-image"/>
                    <div className="slide-text-container">
                        <h3>Entertainment</h3>
                        <p className="slide-text">Kick back. Tune it. <br/>Game on.</p>
                    </div>
                    <button className="slide-button" onClick={handleButtonClick}>+</button>
                </SwiperSlide>
                <SwiperSlide className="slide-container">
                    <img src={applepencil} alt="productivity card" className="slide-image"/>
                    <div className="slide-text-container">
                        <h3>Apple Pencil</h3>
                        <p className="slide-text">Dream it up.<br/> Jot it down.</p>
                    </div>
                    <button className="slide-button" onClick={handleButtonClick}>+</button>
                </SwiperSlide>
                <SwiperSlide className="slide-container">
                    <img src={guide} alt="productivity card" className="slide-image"/>
                    <div className="slide-text-container">
                        <h3>IPadOS + Apps</h3>
                        <p className="slide-text">Every day superpowers.<br/> Built right in.</p>
                    </div>
                    <button className="slide-button" onClick={handleButtonClick}>+</button>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;


