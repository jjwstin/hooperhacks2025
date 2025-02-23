import React from 'react';
import ProductRow from '../components/productRow';
import RunningImage from '../images/guyRunning.png'; // Import the running image
import Model from '../models/productModel';
import './HomeScreen.css'; // Optional for styling

const productModel = new Model();

const HomeScreen = () => {      
    const products = productModel.getProducts();
    const productsRowOne = products.slice(0, 8);
    const productsRowTwo = products.slice(8, 16);
    const productsRowThree = products.slice(16, 24);

    return (
        <div className="home-screen">
            <main className="home-main">
                <section className="hero">
                    <img
                        src={RunningImage} // Replace with your image path
                        alt="Discover Your Perfect Match"
                        className="hero-image"
                    />
                    <div className="hero-text">
                        <h2>Discover Your Perfect Match</h2>
                        <p>
                            Looking for a single item that fits your unique needs? Browse our curated listings and find exactly what you're looking for.
                        </p>
                    </div>
                </section>

                <ProductRow title="Recent Shoes added to Listings" products={productsRowOne} />
                <ProductRow title="Recommended Shoes" products={productsRowTwo} />
                <ProductRow title="Other Items" products={productsRowThree} />

                <section className="features">
                    <h3>Why Choose Us?</h3>
                    <div className="features-list">
                        <div className="feature">
                            <h4>User-Friendly Interface</h4>
                            <p>Enjoy a seamless and accessible browsing experience.</p>
                        </div>
                        <div className="feature">
                            <h4>Verified Listings</h4>
                            <p>Quality control ensures every item meets our standards.</p>
                        </div>
                        <div className="feature">
                            <h4>Community Driven</h4>
                            <p>A platform designed to empower and connect users.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="home-footer">
                <div className="footer-links">
                    <div className="footer-column">
                    <h4>More Information</h4>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/how-it-works">How It Works</a></li>
                            <li><a href="/verification">Verification</a></li>
                            <li><a href="/newsroom">Newsroom</a></li>
                            <li><a href="/careers">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="/help-center">Help Center</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                            <li><a href="/product-suggestions">Product Suggestions</a></li>
                            <li><a href="/size-guide">Size Guide</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Sell</h4>
                        <ul>
                            <li><a href="/selling-guide">Selling Guide</a></li>
                            <li><a href="/professional-tools">Professional Tools</a></li>
                            <li><a href="/sponsored-asks">Sponsored Asks</a></li>
                            <li><a href="/developers">Developers</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Popular Brands</h4>
                        <ul>
                            <li><a href="/air-jordan">Air Jordan</a></li>
                            <li><a href="/adidas">Adidas</a></li>
                            <li><a href="/new-balance">New Balance</a></li>
                            <li><a href="/nike">Nike</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Popular Releases</h4>
                        <ul>
                            <li><a href="/jordan-3-retro-black-cat">Jordan 3 Retro Black Cat (2025)</a></li>
                            <li><a href="/jordan-5-retro-og-black-metallic">Jordan 5 Retro OG Black Metallic Reimagined</a></li>
                            <li><a href="/jordan-1-retro-high-85-og-bred">Jordan 1 Retro High '85 OG Bred (2025)</a></li>
                            <li><a href="/jordan-11-retro-legend-blue">Jordan 11 Retro Legend Blue (2024)</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Apparel</h4>
                        <ul>
                            <li><a href="/denim-tears">Denim Tears</a></li>
                            <li><a href="/fear-of-god-essentials">Fear of God Essentials</a></li>
                            <li><a href="/nike-apparel">Nike Apparel</a></li>
                            <li><a href="/supreme">Supreme</a></li>
                            <li><a href="/travis-scott">Travis Scott</a></li>
                            <li><a href="/yeezy">Yeezy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Accessories</h4>
                        <ul>
                            <li><a href="/swatch-x-omega">Swatch X Omega</a></li>
                            <li><a href="/stanley">Stanley</a></li>
                            <li><a href="/designer-sunglasses">Designer Sunglasses</a></li>
                            <li><a href="/louis-vuitton-accessories">Louis Vuitton Accessories</a></li>
                            <li><a href="/gucci-accessories">Gucci Accessories</a></li>
                            <li><a href="/supreme-accessories">Supreme Accessories</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Pair 2 Spare. All rights reserved.</p>
                    <ul className="footer-terms">
                        <li><a href="/terms">Terms</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/privacy-choices">Your Privacy Choices</a></li>
                    </ul>
                    <div className="footer-languages">
                        <a href="/en-us">English (US)</a>
                        <a href="/en-uk">English (UK)</a>
                        <a href="/it">Italiano</a>
                        <a href="/de">Deutsch</a>
                        <a href="/fr">Français (FR)</a>
                        <a href="/zh-cn">简体中文</a>
                        <a href="/zh-tw">繁體中文</a>
                        <a href="/ja">日本語</a>
                        <a href="/ko">한국어</a>
                        <a href="/es-mx">Español (MX)</a>
                        <a href="/es-us">Español (US)</a>
                        <a href="/es-es">Español (ES)</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomeScreen;