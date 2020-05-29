import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import TopNav from './components/TopNav';
import Photofeed from './components/Photofeed';
import './App.css';
import BottomNav from './components/BottomNav';
import Cheryl from './img/feedImg/cheryl.PNG';
import CherylHome from './img/feedImg/home1.PNG';
import Charlie from './img/feedImg/charlie.PNG';
import CharlieHome from './img/feedImg/home2.PNG';


class App extends Component {
  state={
    posts:[
        {
          id:0,
          profileImg:Cheryl,
          profileName:"cheryltweedy",
          photo: CherylHome,
          description: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          likes:0,
        },  
        {
          id:1,
          profileImg:Charlie,
          profileName:"charliechaplin",
          photo: CharlieHome,
          description: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          likes:0,
        } 

    ]

  }

  addToLikes = () => {
    this.setState({
      likes:this.state.likes +1
    })
  }

  render(){
    const eachPost=this.state.posts.map((posts)=>{
      return <Photofeed 
        key={posts.id} 
        profileImg={posts.profileImg} 
        profileName={posts.profileName} 
        photo={posts.photo} 
        description={posts.description} 
        likes={posts.likes}
        addingLikes={this.addToLikes}
        likeCount={posts.likes}
        />
    })
    return(
      <div className="App">
        <TopNav/>
        {eachPost}
        <BottomNav/>
      </div>
    )

  }
}

export default App;

// for mobile
//  class app at top
//  state{ photo information}
// render - props for names of photo info
// return
//  wrapping div
//  browserRouter
//    top nav bar (Instagram home button - paper airplane)
//    Switch (top nav bar buttons, bottom nav bar buttons)
//    Photo feed
//    Bottom nav bar
//  wrapping div

// Components needed: top nav bar, photo feed, bottom nav bar
