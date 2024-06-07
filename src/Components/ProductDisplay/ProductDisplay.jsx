import React from 'react';
import './ProductDisplay.css';
import star_icon from '../assets/img/star_icon.png';
import star_dull_icon from '../assets/img/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
    console.log('ProductDisplay product:', product); // Debugging line

    return (
        <div className='productDisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star" />
                    <p>(122)</p>
                </div>
                
            </div>
        </div>
    );
}

export default ProductDisplay;
