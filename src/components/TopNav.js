import React from 'react';
import './TopNav.css';

const TopNav =()=>{
    return(
        <nav>    
            <ul className="topnav">
                <li id="instaLogo">Instagram</li>
                <li id="search">Search</li>
                <li id="home">Home</li>
                <li id="messages">Messages</li>
                <li id="discover">Discover</li>
                <li id="activity">Activity</li>
                <li id="yourProfile">Your profile</li>
            </ul>
        </nav>
        
    )

}

export default TopNav;