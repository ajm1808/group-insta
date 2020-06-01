import React from 'react';
import Stories from './Stories';
import Suggestions from './Suggestions';
import './RightNav.css';

const RightNav = () => {
    return (
        <div id="rightNav">
            <Stories />
            <Suggestions />
        </div>
    )
}

export default RightNav