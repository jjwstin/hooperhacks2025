import React from 'react';
import '../srcStylesheets/navBar.css'; // Optional for styling

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item"><a href="/men">Men</a></li>
                <li className="nav-item"><a href="/women">Women</a></li>
                <li className="nav-item"><a href="/kids">Kids</a></li>
                <li className="nav-item"><a href="/more-categories">More Categories</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
