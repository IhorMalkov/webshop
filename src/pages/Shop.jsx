import React from 'react'
import  video from "../img/iPadVideo.mp4"
import Slider from "../components/Slider";

function Shop() {
  return (
      <div>
          <div className="flex justify-between items-center ml-[30px] mr-[30px]">
              <h1>iPad</h1>
              <h2>Touch, draw and type <br/> on one magical device.</h2>
          </div>
          <video autoPlay muted className='video-element'>
                  <source src={video} type='video/mp4'></source>
          </video>
          <Slider></Slider>
      </div>
  )
}

export default Shop
