import React from 'react';
import NavBar from '../components/navBar'; // Import the NavBar component
import ProductRow from '../components/productRow';
import RunningImage from '../images/guyRuning.png'; // Import the running image
import './HomeScreen.css'; // Optional for styling

const productsRowOne = [
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
        name: 'Nike Kobe 6 Protro Sail All-Star',
        price: 200,
        image: 'https://images.stockx.com/images/Nike-Kobe-6-Protro-Sail-Product.jpg',
        link: '/nike-kobe-6-protro-sail-all-star',
    },
    {
        name: 'Jordan 1 Retro High OG Black Toe Reimagined',
        price: 300,
        image: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Black-Toe-Reimagined-Product.jpg',
        link: '/air-jordan-1-retro-high-og-black-toe-reimagined',
    },
    {
        name: 'Jordan 1 Low OG Obsidian UNC',
        price: 900,
        image: 'https://images.stockx.com/images/Air-Jordan-1-Low-OG-Obsidian-UNC.jpg',
        link: '/air-jordan-1-low-og-obsidian-unc',
    },
    {
        name: 'On Running Cloudzone Kith White Ice',
        price: 198,
        image: 'https://images.stockx.com/images/On-Running-Cloudzone-Kith-White.jpg',
        link: '/on-running-cloudzone-kith-white',
    },
    {
        name: 'On Running Cloudzone Kith Black',
        price: 209,
        image: 'https://images.stockx.com/images/On-Running-Cloudzone-Kith-Black.jpg',
        link: '/on-running-cloudzone-kith-black',
    },
    {
        name: 'adidas Yeezy Boost 700 MNVN Blue Tint',
        price: 220,
        image: 'https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Blue-Tint-Product.jpg',
        link: '/adidas-yeezy-boost-700-mnvn-blue-tint',
    },
    // Add more products as needed
];
const productsRowTwo = [
    {
        name: 'Jordan 5 Retro OG Black Metallic Reimagined (GS)',
        price: 149,
        image: 'https://images.stockx.com/images/Air-Jordan-5-Retro-OG-Black-Metallic-Reimagined-GS-Product.jpg',
        link: '/air-jordan-5-retro-og-black-metallic-reimagined-gs',
    },
    {
        name: 'adidas Yeezy Slide Dark Onyx',
        price: 102,
        image: 'https://images.stockx.com/images/adidas-Yeezy-Slide-Dark-Onyx-Product.jpg',
        link: '/adidas-yeezy-slide-dark-onyx',
    },
    {
        name: 'UGG Tasman Slipper Chestnut (Women\'s)',
        price: 82,
        image: 'https://images.stockx.com/images/UGG-Tasman-Slipper-Chestnut-W-Product.jpg',
        link: '/ugg-tasman-slipper-chestnut-w',
    },
    {
        name: 'adidas Yeezy Foam RNR Onyx',
        price: 77,
        image: 'https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Onyx-Product.jpg',
        link: '/adidas-yeezy-foam-rnnr-onyx',
    },
    {
        name: 'Nike Kobe 6 Sail All-Star (GS)',
        price: 124,
        image: 'https://images.stockx.com/images/Nike-Kobe-6-Sail-All-Star-GS-Product.jpg',
        link: '/nike-kobe-6-sail-all-star-gs',
    },
    {
        name: 'Timberland 6" Premium Waterproof Boot Wheat',
        price: 124,
        image: 'https://images.stockx.com/images/Timberland-6-Inch-Premium-Waterproof-Wheat-Product.jpg',
        link: '/timberland-6-inch-premium-waterproof-wheat',
    },
    {
        name: 'Nike Air Max 270 Triple Black (PS)',
        price: 100,
        image: 'https://images.stockx.com/images/Nike-Air-Max-270-Triple-Black-PS.jpg',
        link: '/nike-air-max-270-triple-black-ps?size=13K',
    },
    {
        name: 'Nike Dunk Low Retro White Black Panda (GS)',
        price: 54,
        image: 'https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-GS-Product.jpg',
        link: '/nike-dunk-low-retro-white-black-gs',
    },
];

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <NavBar /> {/* Render the navBar.jsx component */}

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

                <ProductRow title="Recommended For You" products={productsRowOne} />
                <ProductRow title="Recommended Shoes" products={productsRowTwo} />
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