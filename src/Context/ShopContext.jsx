import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState({});
    
    useEffect(() => {
        fetch('http://localhost:8000/allproducts')
            .then((response) => response.json())
            .then((data) => {
                setAll_Product(data);
                setCartItems(getDefaultCart(data)); // Initialize cartItems after all_product is fetched

                if(localStorage.getItem('auth-token'))
                    {
                        fetch('http://localhost:8000/getcart',{
                            method: 'POST',
                            headers: {
                                Accept:'application/form-data',
                                'auth-token':`${localStorage.getItem('auth-token')}`,
                                'Content-Type': 'application/json',

                            },
                            body:""
                        }).then((response)=>response.json())
                        .then((data)=>setCartItems(data))
                    }
            },[])
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    // Define getDefaultCart function to initialize cartItems
    const getDefaultCart = (products) => {
        let cart = {};
        products.forEach(product => {
            cart[product.id] = 0;
        });
        return cart;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if(localStorage.getItem('auth-token'))
            {
                fetch('http://localhost:8000/addtocart',{
                    method: 'POST',
                    headers: {
                        Accept:'application/form-data',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"itemId":itemId}),
                })
                .then((response)=>response.json())
                .then((data)=>console.log(data));
            }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            if(localStorage.getItem('auth-token'))
                {
                    fetch('http://localhost:8000/removefromcart',{
                        method: 'POST',
                        headers: {
                            Accept:'application/form-data',
                            'auth-token':`${localStorage.getItem('auth-token')}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({"itemId":itemId}),
                    })
                    .then((response)=>response.json())
                    .then((data)=>console.log(data));
                }

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;

    }
    
    // Filter products by category
    const womenProducts = all_product.filter(product => product.category === 'women');
    const menProducts = all_product.filter(product => product.category === 'Men');
    const kidsProducts = all_product.filter(product => product.category === 'Kid');

    const contextValue = { 
        getTotalCartItems, 
        getTotalCartAmount, 
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart,
        womenProducts,
        menProducts,
        kidsProducts
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
