import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../assets/img/star_icon.png";
import start_dull_icon from "../assets/img/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <p>Item added to cart!</p>
        </div>
      )}

      <div className='productdisplay'>
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={start_dull_icon} alt="" />
            <p>(122)</p>
          </div>

          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
            Discover the ultimate in comfort and style with our ComfortBlend Sweatshirt. Crafted from a premium blend of 80% cotton and 20% polyester, this sweatshirt features a cozy fleece lining and a modern, relaxed fit. Its classic crew neck, ribbed cuffs, and hem provide a snug, durable finish.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>
          <p className="productdisplay-right-category"><span>Category:</span>Women, T-Shirt, Crop Top</p>
          <p className="productdisplay-right-category"><span>Tags:</span>Modern, Latest</p>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
