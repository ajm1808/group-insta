import React from 'react';
import './Suggestions.css';
import bex from '../img/profileImg/bex.jpg';
import charmander from '../img/profileImg/charmander.jpg';
import richard from '../img/profileImg/richard.jpg';

const Suggestions = () => {
    return (
        <div id="sugBox">
            <div id="sugTitleBox">
                <div id="sugTitle">Suggestions for you</div>
                <div id="seeAllTitle">See All</div>
            </div>
            <div id="sugSections">
                <div>
                    <img src={bex} alt="Suggestion" className="sugPics"/>
                </div>
                <div className="sugSectMiddle">
                    <div className="sugUserNames">bamboobex</div>
                    <div className="underSugNames">Popular</div>
                </div>
                <div>
                    <button className="sugFollowBtn">Follow</button>
                </div>
            </div>
            <div id="sugSections">
                <div>
                    <img src={charmander} alt="Suggestion" className="sugPics"/>
                </div>
                <div className="sugSectMiddle">
                    <div className="sugUserNames">charcharfire</div>
                    <div className="underSugNames">Suggested for you</div>
                </div>
                <div>
                    <button className="sugFollowBtn">Follow</button>
                </div>
            </div>
            <div id="sugSections">
                <div>
                    <img src={richard} alt="Suggestion" className="sugPics"/>
                </div>
                <div className="sugSectMiddle">
                    <div className="sugUserNames">trickydickie</div>
                    <div className="underSugNames">New to Instagram</div>
                </div>
                <div>
                    <button className="sugFollowBtn">Follow</button>
                </div>
            </div>
        </div>
    )
}

export default Suggestions