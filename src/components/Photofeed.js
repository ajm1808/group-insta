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
                            <path className='likePath' fill='white' stroke='black' stroke-width='10px'  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
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