import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const{product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
      <div className="productDisplayLeft">
        <div className="productDisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-image">
            <img className='productDisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplayRight">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productDisplayRight-prices">
            <div className="productDisplayRight-price-old">Rs.{product.old_price}</div>
            <div className="productDisplayRight-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="productDisplayRight-description">

        </div>
        <div className="productDisplayRight-size">
            <h1>Select Size</h1>
            <div className="productDisplayRight-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        {/* <p className='productDisplayRight-category'> <span>Category: </span>Women, T-Shirt, Crop Top</p>
        <p className='productDisplayRight-category'> <span>Tag: </span>Modern, Latest</p> */}
      </div>
    </div>
  )
}

export default ProductDisplay
