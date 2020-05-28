import React from 'react';
import './BottomNav.css';
import  home from '../img/home.svg'
import  search from '../img/search.svg'
import  plus from '../img/plus-square.svg'
import  heart from '../img/heart.svg'



const BottomNav = (props) => {
    return (
        <nav>
            <a href="">
                <object type="image/svg+xml" data={home} class="icon">Home</object>
            </a>
            <a href="">
                <object type="image/svg+xml" data={search} class="icon">Search</object>
            </a>
            <a href="">
                <object type="image/svg+xml" data={plus} class="icon">Add</object>
            </a>
            <a href="">
                <object type="image/svg+xml" data={heart} class="icon">Heart</object>
            </a>
            <a href="">
                <img className="profileImg" src={props.profileImg} alt=""/>
            </a>
            

        </nav>
    )
}

export default BottomNav;