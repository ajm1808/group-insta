import React from 'react';
import './Suggestions.css';
import john from '../img/feedImg/john.PNG';

const Suggestions = () => {
    return (
        <div id="sugBox">
            <div id="sugTitleBox">
                <div id="sugTitle">Suggestions for you</div>
                <div id="seeAllTitle">See All</div>
            </div>
            <div id="sugSections">
                <div>
                    <img src={john} alt="Suggestion" className="sugPics"/>
                </div>
                <div className="sugSectMiddle">
                    <div className="sugUserNames">User name suggestion 1</div>
                    <div className="underSugNames">Popular</div>
                </div>
                <div>
                    <button className="sugFollowBtn">Follow</button>
                </div>
            </div>
            <div id="sugSections">
                <div>
                    <img src={john} alt="Suggestion" className="sugPics"/>
                </div>
                <div className="sugSectMiddle">
                    <div className="sugUserNames">User name suggestion 2</div>
                    <div className="underSugNames">Suggested for you</div>
                </div>
                <div>
                    <button className="sugFollowBtn">Follow</button>
                </div>
            </div>
            <div id="sugSections">
                <div>
                    <img src={john} alt="Suggestion" className="sugPics"/>
                </div>
                <div className="sugSectMiddle">
                    <div className="sugUserNames">User name suggestion 3</div>
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