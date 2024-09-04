import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Assets/Frontend_Assets/arrow.png'
import hero_icon from '../Assets/Frontend_Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Shop Our Latest Arrivals</h2>
            <div>
                <div className='hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt=''></img>
                </div>
                <p>collections</p>
                <p>for all</p>
            </div>
            <div className='hero-latest-button'>
                <div>Latest Collections</div>
                <img src={arrow_icon}></img>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_icon}></img>
        </div>
      
    </div>
  )
}

export default Hero
