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
                <button className='btnIcons'>
                    <svg className='topIcons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">          
                        <path class='svgIcon' fill='white' stroke='black' stroke-width='10px' height='20px' d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                    </svg>
                </button>
                    <div className="btnIcons">
                    <object type="image/svg+xml" data={paperplane} className='topIcons plane' alt="compass"></object>
                    </div>
                    <div className="btnIcons">
                    <object type="image/svg+xml" data={compass} className='topIcons' alt="compass"></object>
                    </div>
                <button className='btnIcons'>
                    <svg className='topIcons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path class='svgIcon' fill='white' stroke='black' stroke-width='10px' height='20px' d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
                    </svg>
                    </button>

                    <img className="avatarbNav" src={john} alt=""/>
               
            </div>
            
        </nav>
        
    )

}

export default TopNav;