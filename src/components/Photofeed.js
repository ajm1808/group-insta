import React from 'react';
import './Photofeed.css';
import commentIcon from '../img/comment-alt.svg';
import share from '../img/paper-plane.svg';




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
                <div className="bottom">
                    <div className="photoBar">
                        <span className="icons">
                            <button type="button" onClick={()=>props.addingLikes(props.index)} className="likeOthersBtn">
                            <svg className='likeBtn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            {props.changeFillLike()}
                            </svg>
                            </button>
                        </span>
                        <span className="icons">    
                            <img className="icons comments" src={commentIcon} alt="comments"/>
                        </span>
                        <span className="icons">
                        <   img className="icons share" src={share} alt="share"/>
                        </span>    
                    </div>
                    <div className="likeCount">
                        <div className="counter">
                            <p id="likebar">
                                <a className="likeCounter">{props.likeCount}</a>
                                <a id="likes">likes</a>
                            </p>
                        </div>
                    </div>
                    <div className="postingInfo">
                        <p>
                            <a className="profileNameB">{props.profileName}</a>
                            {props.description}
                        </p>
                    </div>
                    
                    <span className="commenthere">
                        <a id="com1">
                            Comments...
                        </a>
                    </span>
                </div>    
            </div>
        </div>    

    )

}

export default Photofeed;