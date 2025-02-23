import React from 'react';
import '../srcStylesheets/header.css'; // Create a separate CSS file if needed
import talkIcon from '../images/talkIcon.png'; // Import the talk icon image

const Header = () => {
    return (
        <header className="home-header">
            <div className="logo">Pair 2 Spare</div>
            <input type="text" className="search-bar" placeholder="Search..." />
            <nav className="nav-links">
                <a href="/news">News</a>
                <a href="/about">About</a>
                <a href="/help">Help</a>
                <a href="/sell">Sell</a>
            </nav>
            <div className="header-right">
                <img src={talkIcon} alt="Messaging" className="message-icon" />
                <img src="/path/to/profile-icon.jpg" alt="Profile" className="profile-icon" />
            </div>
        </header>
    );
};

export default Header;