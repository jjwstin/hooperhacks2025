import React from 'react';
import { useParams } from 'react-router-dom';
import '../srcStylesheets/ProductPage.css'; // Import the CSS file for styling
import Model from '../models/productModel';

const productModel = new Model();

const ProductPage = () => {
    const { productName } = useParams();
    const product = productModel.getProductByName(productName);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-page">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h1>{product.name}</h1>
                <p className="product-price">${product.price}</p>
                <button className="buy-button">Buy Now</button>
                <button className="contact-button">Contact Sellers</button>
            </div>
        </div>
    );
};

export default ProductPage;
