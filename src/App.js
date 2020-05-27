import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import TopNav from './components/TopNav';
import Photofeed from './components/Photofeed';
import './App.css';
import BottomNav from './components/BottomNav';

class App extends Component {
  state={
    posts:[
        {
          id:0,
          profileImg:"",
          profileName:"",
          photo:"",
          description:"",
          likes:"",
        }  

    ]

  }
  render(){
    const eachPost=this.state.posts.map((posts)=>{
      return <Photofeed 
        key={posts.id} 
        profileImg={posts.profileImg} 
        profileName={posts.profileName} 
        photo={posts.photo} 
        description={posts.description} 
        likes={posts.likes}/>
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
