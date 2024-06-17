import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        try {
            // Upload image and get URL
            const formData = new FormData();
            formData.append('product', image);

            const imageResponse = await fetch("http://localhost:8000/upload", {
                method: "POST",
                body: formData,
            });

            const responseData = await imageResponse.json();

            if (responseData.success) {
                // Set the image URL to product details
                const updatedProductDetails = {
                    ...productDetails,
                    image: responseData.image_url
                };

                console.log(updatedProductDetails);

                // Send the product details to backend
                const productResponse = await fetch("http://localhost:8000/addproduct", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedProductDetails),
                });

                const productResponseData = await productResponse.json();

                if (productResponseData.success) {
                    alert("Product Added Successfully");
                    console.log("Product added successfully:", productResponseData);
                } else {
                    alert("Failed to Add Product");
                    console.error("Failed to add product:", productResponseData.message);
                }
            } else {
                alert("Image Upload Failed");
                console.error("Image upload failed:", responseData.message);
            }
        } catch (error) {
            alert("Error Occurred");
            console.error("Error:", error);
        }
    };

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder="Type Here" />
            </div>

            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder="Type Here" />
                </div>

                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder="Type Here" />
                </div>
            </div>

            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Kid">Kid</option>
                </select>
            </div>

            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img' alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>

            <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
        </div>
    );
};

export default AddProduct;
