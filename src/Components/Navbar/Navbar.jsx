import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import cart_icon from '../assets/img/cart_icon.png'
const Navbar = ({ className, logo }) => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className={`navbar ${className}`}>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/mens'>Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/womens'>Women</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className={`nav-logo ${className}`}>
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
