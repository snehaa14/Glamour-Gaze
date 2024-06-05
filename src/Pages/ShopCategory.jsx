import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/assets/img/dropdown_icon.png';
import Item from '../Components/Item/Item.jsx';
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
       
    <div className='shop-category'>
      
      <img className='shopcategory-banner' src={props.banner} alt={`${props.category} banner`} />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of {filteredProducts.length} products
        </p>

        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="Sort dropdown icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
