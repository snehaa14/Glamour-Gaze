import React from 'react'
import './Features.css'
import image1 from '../assets/img/f1.png'
import image2 from '../assets/img/f2.png'
import image3 from '../assets/img/f3.png'
import image4 from '../assets/img/f4.png'
import image5 from '../assets/img/f5.png'
import image6 from '../assets/img/f6.png'
const Features = () => {
  return (
    <div>
      <div class="feature section-p1">
      <div class="features-box">
        <img src={image1} alt="" />
        <h5>Free Shipping</h5>
      </div>

      <div class="features-box">
        <img src={image2} alt="" />
        <h5>Online Order</h5>
      </div>

      <div class="features-box">
        <img src={image3} alt="" />
        <h5>Save Money</h5>
      </div>

      <div class="features-box">
        <img src={image4} alt="" />
        <h5>Promotions</h5>
      </div>

      <div class="features-box">
        <img src={image5} alt="" />
        <h5>Happy Sell</h5>
      </div>

      <div class="features-box">
        <img src={image6} alt="" />
        <h5>24/7 Support</h5>
      </div>
    </div>
    </div>
  )
}

export default Features