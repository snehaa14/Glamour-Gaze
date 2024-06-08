import React, { useContext, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import cart_icon from '../assets/img/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = ({ className, logo }) => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const menuItems = [
    { label: 'Shop', path: '/' },
    { label: 'Men', path: '/mens' },
    { label: 'Women', path: '/womens' },
    { label: 'Kids', path: '/kids' }
  ];

  return (
    <div className={`navbar ${className}`}>
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.label} onClick={() => setMenu(item.label.toLowerCase())}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={item.path}>{item.label}</Link>
            {menu === item.label.toLowerCase() && <hr />}
          </li>
        ))}
      </ul>

      <div className={`nav-logo ${className}`}>
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
