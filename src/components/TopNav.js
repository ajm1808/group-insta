import React from 'react';
import './TopNav.css';
import instalogo from '../img/insta-logo.svg';
import home from '../img/home.svg';
import paperplane from '../img/paper-plane.svg';
import compass from '../img/compass.svg';
import heart from '../img/heart.svg';
import john from '../img/feedImg/john.PNG'


const TopNav =()=>{
    return(
  
        <nav className="topnav">
            <img alt="Instagram" id="instaLogo" src={instalogo} />
            <input type="text" id="topSearch" placeholder="Search"></input>
            <div id="navIcons">
                <a href="">
                {/* <img src={home} /> */}
                    <object type="image/svg+xml" data={home} className='topIcons' alt="home"></object>
                </a>
                <a href="">
                {/* <img src={paperplane} /> */}
                    <object type="image/svg+xml" data={paperplane} className='topIcons' alt="paperplane"></object>
                </a>
                <a href="">
                {/* <img src={compass} /> */}
                    <object type="image/svg+xml" data={compass} className='topIcons' alt="compass"></object>
                </a>
                <a href="">
                    {/* <img src={heart} /> */}
                    <object type="image/svg+xml" data={heart} className='topIcons' alt ="heart"></object>
                </a>
                <a href="">
                    {/* <img src={heart} /> */}
                    <img className="avatarbNav" src={john} alt=""/>
                </a>


                
                {/* <li id="messages">Messages</li>
                <li id="discover">Discover</li>
                <li id="activity">Activity</li>
                <li id="yourProfile">Your profile</li> */}
            </div>
            
        </nav>
        
    )

}

export default TopNav;