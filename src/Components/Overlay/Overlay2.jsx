import React from 'react'
import './Overlay2.css'
import image2 from '../assets/img/overlaybg2.jpg'
const Overlay2 = () => {
  return (
    <div className="overlay2">
    <div className="overlay2-inside-wrapper">
      <div className="overlay2-inside">
        <img src={image2} alt="" />
        <h1>
      Discover The Allure Of<br/>Fashion Reinvented!</h1>
        <button>Shop Now</button>
      </div>
    </div>
  </div>
  )
}

export default Overlay2