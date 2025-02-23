import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navBar'; // Import the NavBar component
import '../srcStylesheets/ProductPage.css'; // Import the CSS file for styling
import Model from '../models/productModel';

const productModel = new Model();

const ProductPage = () => {
    const { productName } = useParams();
    const navigate = useNavigate();
    const product = productModel.getProductByName(productName);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleContactSeller = () => {
        // Navigate to ChatPage and pass the product details as state
        navigate('/chat', { state: { attachedProduct: product } });
    };


    return (
        <div className="product-page">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h1>{product.name}</h1>
                <p className="product-price">${product.price}</p>
                <button className="buy-button">Buy Now</button>
                <button className="contact-button" onClick={handleContactSeller}>Contact Sellers</button>
            </div>
        </div>
    );
};

export default ProductPage;
