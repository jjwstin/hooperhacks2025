import React from 'react';
import '../srcStylesheets/header.css';
import talkIcon from '../images/talkIcon.png';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../images/search.png'; // Import the search icon image

const Header = () => {
    const navigate = useNavigate();

    // Toggle the chat box visibility
    const handleChatClick = () => {
        navigate('/chat');
    };

    return (
        <header className="home-header">
            <div className="logo">Pair 2 Spare</div>
            <div className="search-container">
                <input type="text" className="search-bar" placeholder="Search for brand, color, etc" />
                <img src={searchIcon} alt="Search" className="search-icon" />
            </div>
            <nav className="nav-links">
                <a href="/news">News</a>
                <a href="/about">About</a>
                <a href="/help">Help</a>
                <a href="/sell">Sell</a>
            </nav>
            <div className="header-right">
                <img
                    src={talkIcon}
                    alt="Messaging"
                    className="message-icon"
                    onClick={handleChatClick} // Toggle chat on click
                />
                <img
                    src="/path/to/profile-icon.jpg"
                    alt="Profile"
                    className="profile-icon"
                />
            </div>
        </header>
    );
};

export default Header;
