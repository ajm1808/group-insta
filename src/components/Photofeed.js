import React from 'react';
import './Photofeed.css';


const Photofeed=(props)=>{
    return(
        <div className="feed">
            <div className="feedBox">
                <div className="topBar">
                    <img className="profileImg" src={props.profileImg} alt=""/>
                    <div className="profileName">{props.profileName}</div>
                    <div className="dots">...</div>
                </div>
                <div className="photoBox">
                    <img className="photo" src={props.photo} alt=""/>
                </div>
                <div className="photoBar">
                    
                    <button className="likeOthersBtn"></button>
                    <img className="comments" src={props.comment}alt="comments"/>
                    <img className="share" src="" alt="share"/>
                </div>
                <div className="likeCount">
                    <div className="counter"></div>
                </div>
                <div className="postingInfo">
                    <div className="profileNameB">{props.profileName}</div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>    

    )

}

export default Photofeed;