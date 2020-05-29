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
            <a href="">
                <object type="image/svg+xml" data={home} className="icon" alt="home">Home</object>
            </a>
            <a href="">
                <object type="image/svg+xml" data={search} className="icon" alt="search">Search</object>
            </a>
            <a href="">
                <object type="image/svg+xml" data={plus} className="icon" alt="plus">Add</object>
            </a>
            <a href="">
                <object type="image/svg+xml" data={heart} className="icon" alt="heart">Heart</object>
            </a>
            <a href="">
                <div className='icon' id='imgDiv'><img className="avatarbNav" src={john} alt=""/></div>
            </a>
            

        </nav>
    )
}

export default BottomNav;