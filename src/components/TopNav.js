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
                <a>
                    <object type="image/svg+xml" data={home} className='topIcons' alt="home"></object>
                </a>
                <a>
                    <object type="image/svg+xml" data={paperplane} className='topIcons paper' alt="paperplane"></object>
                </a>
                <a>
                    <object type="image/svg+xml" data={compass} className='topIcons' alt="compass"></object>
                </a>
                <a>
                    <object type="image/svg+xml" data={heart} className='topIcons' alt ="heart"></object>
                </a>
                <a>
                    <img className="avatarbNav" src={john} alt=""/>
                </a>
            </div>
            
        </nav>
        
    )

}

export default TopNav;