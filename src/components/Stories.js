import React from 'react';
import './Stories.css';
import john from '../img/feedImg/john.PNG';
import andyM from '../img/profileImg/andyM.jpg';
import pikachu from '../img/profileImg/pikachu.jpg';
import rebekah from '../img/profileImg/rebekah.jpg';
import dean from '../img/profileImg/dean.jpg';

const Stories = () => {
    return(
        <div id="profStorBox">
            <div id="profileNameBox">
                <img src={john} alt="Profile photo" id="profilePic" />
                <div>
                    <p className="profileName">jwayneyboi</p> <br/>
                    <a className="underProfName">John Wayne</a>
                </div> 
            </div>
            <div id="storBox">
                <div id="storTitleBox">
                    <div id="storTitle">Stories</div>
                    <div id="watchAllTitle">Watch All</div>
                </div>
                <div id="storSections">
                    <div>
                        <img src={andyM} alt="Story suggestion" className="storPics"/>
                    </div>
                    <div className="storSectMiddle">
                        <div className="storUserNames">legoandym + 1</div>
                        <div className="underStorNames">9 MINUTES AGO</div>
                    </div>
                    <div>
                        <button className="storLiveBtn">LIVE</button>
                    </div>
                </div>
                <div id="storSections">
                    <div>
                        <img src={pikachu} alt="Story suggestion" className="storPics"/>
                    </div>
                    <div className="storSectMiddle">
                        <div className="storUserNames">pikachuuuuu + 1</div>
                        <div className="underStorNames">53 MINTUES AGO</div>
                    </div>
                    <div>
                        <button className="storLiveBtn">LIVE</button>
                    </div>
                </div>
                <div id="storSections">
                    <div>
                        <img src={rebekah} alt="Story suggestion" className="storPics"/>
                    </div>
                    <div className="storSectMiddle">
                        <div className="storUserNames">rebekahkahkah</div>
                        <div className="underStorNames">4 HOURS AGO</div>
                    </div>
                    <div>
                        <button className="storBlankBtn">LIVE</button>
                    </div>
                </div>
                <div id="storSections">
                    <div>
                        <img src={dean} alt="Story suggestion" className="storPics"/>
                    </div>
                    <div className="storSectMiddle">
                        <div className="storUserNames">fightmedean</div>
                        <div className="underStorNames">17 HOURS AGO</div>
                    </div>
                    <div>
                        <button className="storBlankBtn">LIVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories