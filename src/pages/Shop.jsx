import React from 'react'
import  video from "../img/iPadVideo.mp4"
import './Shop.css'
function Shop() {
  return (
    <div className='flex w-[100vw]'>
      <video autoPlay muted className='video-elemnt'>
        <source src={video} type='video/mp4'></source>
      </video>
    </div>
  )
}

export default Shop
