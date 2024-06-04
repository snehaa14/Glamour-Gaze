import React from 'react'
import './Blazer.css'
import blazer from '../assets/img/blazer-image1.webp'
const Blazer = () => {
  return (
    <div className='blazer'>
     <div className="blazer-left-part">
          <h6>WORK & OFFICE ATTIRE</h6>
          <h1>WORK & OFFICE ATTIRE
Professional Pinstripe Blazers Collection</h1>
<p>Elevate your workwear with our Professional Pinstripe Blazers Collection, where tailored sophistication meets modern confidence for a powerfully polished office look.</p>
<button>Shop Now</button>
     </div>

     <div className="blazer-right-part">
         <img src={blazer} alt="" />
     </div>
    </div>
  )
}

export default Blazer