import React, { useContext, useRef, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import cart_icon from '../assets/img/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../assets/img/nav_dropdown.png';

const Navbar = ({ className, logo }) => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const menuItems = [
    { label: 'Shop', path: '/' },
    { label: 'Men', path: '/mens' },
    { label: 'Women', path: '/womens' },
    { label: 'Kids', path: '/kids' }
  ];

  return (
    <div className={`navbar ${className}`}>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="dropdown icon" />
      <ul ref={menuRef} className="nav-menu">
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
        {
          localStorage.getItem('auth-token') ?
            <button onClick={() => {
              localStorage.removeItem('auth-token');
              window.location.replace("/");
            }}>Logout</button>
            :
            <Link to='/login'><button>Login</button></Link>
        }
     
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
