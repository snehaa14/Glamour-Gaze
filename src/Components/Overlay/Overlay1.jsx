import React from 'react';
import './Overlay1.css';
import image from '../assets/img/overlaybg1.jpg';

const Overlay1 = () => {
  return (
    <div className="overlay1">
      <div className="overlay-inside-wrapper">
        <div className="overlay-inside">
          <img src={image} alt="Bag Collection" />
          <h1>Explore Our Exquisite Bag Collection Now!</h1>
          <button>View Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Overlay1;
