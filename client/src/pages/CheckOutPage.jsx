import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../srcStylesheets/CheckOutPage.css'; // Import the CSS file for styling
import Model from '../models/productModel';

const productModel = new Model();

const CheckOutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { productName, selectedSize, selectedSide } = location.state || {};
    const product = productModel.getProductByName(productName);

    const [shippingType, setShippingType] = useState('standard');
    const [deliveryMethod, setDeliveryMethod] = useState('ship');
    
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleNext = () => {
        // Handle the next button click
        console.log('Next button clicked');
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="checkout-page">
            <button className="back-button" onClick={handleBack}>Back</button>
            <div className="checkout-content">
                <div className="product-summary">
                    <h1>{product.name}</h1>
                    <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="checkout-form">
                    <p>Size: {selectedSize}</p>
                    <p>Side: {selectedSide}</p>
                    <div className="shipping-options">
                        <label>Shipping Type:</label>
                        <select value={shippingType} onChange={(e) => setShippingType(e.target.value)}>
                            <option value="standard">Standard Shipping</option>
                            <option value="express">Express Shipping</option>
                        </select>
                    </div>
                    <div className="delivery-method">
                        <label>
                            <input
                                type="radio"
                                value="ship"
                                checked={deliveryMethod === 'ship'}
                                onChange={(e) => setDeliveryMethod(e.target.value)}
                            />
                            Ship to Address
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="pickup"
                                checked={deliveryMethod === 'pickup'}
                                onChange={(e) => setDeliveryMethod(e.target.value)}
                            />
                            Pickup
                        </label>
                    </div>
                    <button className="next-button" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;
