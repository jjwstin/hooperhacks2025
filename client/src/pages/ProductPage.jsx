import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProductRow from '../components/productRow'; // Import the ProductRow component
import '../srcStylesheets/ProductPage.css'; // Import the CSS file for styling
import Model from '../models/productModel';

const productModel = new Model();

const ProductPage = () => {
    const { productName } = useParams();
    const navigate = useNavigate();
    const product = productModel.getProductByName(productName);
    const products = productModel.getProducts();
    const relatedProducts = products.slice(0, 8); // Example related products

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedSide, setSelectedSide] = useState('');

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleContactSeller = () => {
        // Navigate to ChatPage and pass the product details as state
        navigate('/chat', { state: { attachedProduct: product } });
    };

    const handleTrade = () => {
        // Handle trade logic here
    };

    const handleBuyNow = () => {
        // Navigate to CheckOutPage and pass the product details as state
        navigate('/checkout', { state: { productName, selectedSize, selectedSide } });
    };

    const retailPrice = (product.price * 1.2).toFixed(2); // Calculate retail price

    return (
        <div className="product-page">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-details">
                <h1>{product.name}</h1>
                <p className="product-price">${product.price}</p>
                <div className="dropdowns">
                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                        <option value="">Select Size</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                    <select value={selectedSide} onChange={(e) => setSelectedSide(e.target.value)}>
                        <option value="">Select Side</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
                <button className="trade-button" onClick={handleTrade}>Look for Trade</button>
                <button className="contact-button" onClick={handleContactSeller}>Contact Sellers</button>
            </div>

            <section className="related-products">
                <ProductRow title="Related Products" products={relatedProducts} />
            </section>
            
            <section className="product-info">
                <h2>Product Information/Product Details</h2>
                <p><strong>Colors:</strong> {product.colorTagIDs.join(', ')}</p>
                <p><strong>Retail Price:</strong> ${retailPrice}</p>
                <p><strong>Description:</strong> This is a high-quality product that meets all your needs and expectations. Perfect for any occasion.</p>
            </section>
        </div>
    );
};

export default ProductPage;
