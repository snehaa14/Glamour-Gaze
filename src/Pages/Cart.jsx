import React from 'react';
import CartItems from '../Components/CartItems/CartItems';
import Navbar from '../Components/Navbar/Navbar';
import shopCategoryLogo from '../Components/assets/img/gg.png';

const Cart = () => {
  return (
    <div>
       <div className="nav-container">
        <Navbar className="cart-navbar" logo={shopCategoryLogo} />
      </div>
      <CartItems />
    </div>
  );
};

export default Cart;
