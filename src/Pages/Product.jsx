import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Navbar from '../Components/Navbar/Navbar';
import shopCategoryLogo from '../Components/assets/img/gg.png';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
              <div className="nav-container">
        <Navbar className="cart-navbar" logo={shopCategoryLogo} />
      </div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <Description/>
            <RelatedProducts/>
        </div>
    );
};

export default Product;
