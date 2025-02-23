import React from 'react';
import './HomeScreen.css'; // Optional for styling

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <header className="home-header">
                <h1>Pair 2 Spare</h1>
                <p>Connecting people with unique needs to quality single items.</p>
            </header>

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
