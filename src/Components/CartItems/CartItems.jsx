import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/img/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
  // console.log('all_product:', all_product);
  // console.log('cartItems:', cartItems);
  
  return (
    <div className='cart-items'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        // console.log('product:', product);
        // console.log('cartItems[product.id]:', cartItems[product.id]);
        // console.log(getTotalCartAmount());
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <img className='carticon-product-icon' src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                <img 
                  src={remove_icon} 
                  onClick={() => { removeFromCart(product.id); }} 
                  alt="Remove" 
                  className='cartitems-remove-icon' 
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>cart Totals</h1>
        <div>
          <div className='cartitems-total-item'>
            <p>Subtotal</p>
        
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
                 <p>Shipping Fee</p>
                 <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='promo code' />
          <button>Submit</button>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default CartItems;
