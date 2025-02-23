import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../srcStylesheets/productRow.css'; // Import the CSS file for styling

const ProductRow = ({ title, products }) => {
    const navigate = useNavigate();

    const handleProductClick = (productName) => {
        navigate(`/product/${productName}`);
    };

    const truncateName = (name) => {
        return name.length > 20 ? name.substring(0, 20) + '...' : name;
    };

    return (
        <div className="product-row">
            <div className="product-row-header">
                <h2>{title}</h2>
            
            </div>
            <ul className="product-list">
                {products.map((product, index) => (
                    <li key={index} className="product-item" onClick={() => handleProductClick(product.name)}>
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-details">
                            <p className="product-title">{truncateName(product.name)}</p>
                            <p className="product-lowestAsk">Lowest Ask</p>
                            <p className="product-price">${product.price}</p>
                        </div>
                        <button type="button" className="favorite-button" aria-label="Follow">
                            <svg className="icon" viewBox="0 0 50 50" aria-hidden="true">
                                <path d="M33.5 11.3C37.5 11.3 40.8 14.6 40.8 18.6C40.8 19.5 40.6 20.4 40.3 21.2L39.9 22C38.1 25.6 30.5 33.1 25 38C19.5 33.1 11.9 25.7 10.1 22L9.7 21.1C9.4 20.3 9.2 19.4 9.2 18.5C9.2 14.5 12.5 11.2 16.5 11.2C18.9 11.2 21 12.7 23.1 15.9L25 18.8L26.9 16C29 12.9 31.2 11.3 33.5 11.3ZM33.5 9C29.8 9 27 11.8 25 14.7C23 11.6 20.2 9 16.5 9C11.3 9 7 13.3 7 18.5C7 19.7 7.2 20.8 7.6 21.9C9.3 27.5 25 41 25 41C25 41 40.7 27.5 42.3 22C42.7 20.9 42.9 19.8 42.9 18.6C43 13.3 38.7 9 33.5 9Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductRow;