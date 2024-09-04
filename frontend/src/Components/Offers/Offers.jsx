import React from 'react'
import './Offers.css'
import exlusive_image from '../Assets/Frontend_Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Our Best Selling Products</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exlusive_image} />
      </div>
    </div>
  )
}

export default Offers
