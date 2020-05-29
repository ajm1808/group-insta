import React from 'react';
import './BottomNav.css';
import  home from '../img/home.svg'
import  search from '../img/search.svg'
import  plus from '../img/plus-square.svg'
import  heart from '../img/heart.svg'
import john from '../img/feedImg/john.PNG'


const BottomNav = (props) => {
    return (
        <nav className='bottomNav'>
            <button className='btnIcons'>
            <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">          
                <path class='svgIcon' fill='white' stroke='black' stroke-width='10px' height='20px' d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
            </svg>
            </button>
            <button className='btnIcons'>
            <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path class='svgIcon' fill='white' stroke='black' stroke-width='10px' height='20px' d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
            </svg>
            </button>
            <button onClick={props.handleToggleAddPhoto} className='btnIcons'>
            <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
<path class='svgIcon'  fill='white' stroke='black' stroke-width='10px' d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/></svg>
            </button>
            <button className='btnIcons'>
            <svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path class='svgIcon' fill='white' stroke='black' stroke-width='10px'  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
            </svg>
            </button>
            <a href="">
                <div className='icon' id='imgDiv'><img className="avatarbNav" src={john} alt=""/></div>
            </a>
            

        </nav>
    )
}

export default BottomNav;