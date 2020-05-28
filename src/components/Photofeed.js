import React from 'react';
import './Photofeed.css';


const Photofeed=(props)=>{
    return(
        <div className="feed">
            <div className="feedBox">
                <div className="topBar">
                    
                        <img className="profileImg" src={props.profileImg} alt=""/>
                        <div className="nameDots">
                            <div className="profileName">{props.profileName}</div>
                            <div className="dots">...</div>
                        </div>
                        
                </div>
                <div className="photoBox">
                    <img className="photo" src={props.photo} alt=""/>
                </div>
                <div className="photoBar">
                    <span className="icons">
                        <button className="likeOthersBtn"><img src={props.likeIcon} alt="like"/></button>
                    </span>
                    <span className="icons">    
                        <img className="comments" src={props.comment} alt="comments"/>
                    </span>
                    <span className="icons">
                        <img className="share" src="" alt="share"/>
                    </span>    
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