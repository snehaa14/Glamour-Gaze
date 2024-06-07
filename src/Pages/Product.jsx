import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';

const Product = () => {
    const {all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    console.log('all_product:', all_product); // Debugging line
    console.log('productId:', productId); // Debugging line
    console.log('product:', product); // Debugging line

    return (
        <div>
            {product ? (
                <>
                    <Breadcrum product={product}></Breadcrum>
                    <ProductDisplay product={product}></ProductDisplay>
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}

export default Product;