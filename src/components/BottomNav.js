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
                <object type="image/svg+xml" data={home} className="icon">Home</object>
            </a>
            <a href="">
                <object type="image/svg+xml" data={search} className="icon">Search</object>
            </a>
            <a href="">
                <object type="image/svg+xml" data={plus} className="icon">Add</object>
            </a>
            <a href="">
                <object type="image/svg+xml" data={heart} className="icon">Heart</object>
            </a>
            <a href="">
                <div className='icon' id='imgDiv'><img className="avatarbNav" src={john} alt=""/></div>
            </a>
            

        </nav>
    )
}

export default BottomNav;