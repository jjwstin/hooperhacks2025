import React from 'react';
import Header from '../components/header'; // Import the Header component
import NavBar from '../components/navBar'; // Import the NavBar component
import ProductRow from '../components/productRow';
import './HomeScreen.css'; // Optional for styling

const productsRowOne = [
    {
        name: 'Fear of God Essentials Hoodie Light Heather Grey',
        price: 180,
        image: 'https://images.stockx.com/images/Fear-of-God-Essentials-Hoodie-Light-Heather-Grey.jpg',
        link: '/fear-of-god-essentials-hoodie-light-heather-grey?size=M&xpress-ship=standard',
    },
    {
        name: 'Nike Kobe Bryant Baseball Jersey Black',
        price: 183,
        image: 'https://images.stockx.com/images/Nike-Kobe-Bryant-Baseball-Jersey-Black.jpg',
        link: '/nike-kobe-bryant-baseball-jersey-black',
    },
    {
        name: 'Hunter Original Chelsea Boots Black',
        price: 95,
        image: 'https://images.stockx.com/images/Hunter-Original-Chelsea-Boots-Black.jpg',
        link: '/hunter-original-chelsea-boots-black?size=10',
    },
    {
        name: 'Jordan 4 Retro Net Black (Women\'s)',
        price: 245,
        image: 'https://images.stockx.com/images/air-jordan-4-retro-net-black-womens.jpg',
        link: '/air-jordan-4-retro-net-black-womens',
    },
    {
        name: 'Nike Air Max 97 Silver Bullet',
        price: 170,
        image: 'https://images.stockx.com/images/Nike-Air-Max-97-Silver-Bullet-2022.jpg',
        link: '/nike-air-max-97-silver-bullet-2022',
    },
    {
        name: 'Adidas Yeezy Boost 350 V2 Zebra',
        price: 220,
        image: 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Zebra-2022.jpg',
        link: '/adidas-yeezy-boost-350-v2-zebra-2022',
    },
    // Add more products as needed
];

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <NavBar /> {/* Render the navBar.jsx component */}

            <main className="home-main">
                <section className="hero">
                    <img
                        src="/path/to/your/hero-image.jpg" // Replace with your image path
                        alt="Discover Your Perfect Match"
                        className="hero-image"
                    />
                    <div className="hero-text">
                        <h2>Discover Your Perfect Match</h2>
                        <p>
                            Looking for a single item that fits your unique needs? Browse our curated listings and find exactly what you're looking for.
                        </p>
                        <button onClick={() => alert('Browse Listings clicked!')}>
                            Browse Listings
                        </button>
                    </div>
                </section>

                <ProductRow title="Recommended For You" products={productsRowOne} />

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
                <p>&copy; {new Date().getFullYear()} Pair 2 Spare. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomeScreen;