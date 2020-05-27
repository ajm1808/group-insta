import React from 'react';
import './BottomNav.css';

const BottomNav = () => {
    return (
        <nav>
            <ul className="bottomNav">
                <li id="home">Home</li>
                <li id="search">Search</li>
                <li id="addPhoto">Add photo</li>
                <li id="activity">activity</li>
                <li id="yourProfile">Your profile</li>
            </ul>
        </nav>
    )
}

export default BottomNav;