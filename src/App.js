import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Photofeed from './components/Photofeed';
import './App.css';
import RightNav from './components/RightNav';
import BottomNav from './components/BottomNav';
import AddPhoto from './components/AddPhoto';
import Cheryl from './img/feedImg/cheryl.PNG';
import CherylHome from './img/feedImg/home1.PNG';
import Charlie from './img/feedImg/charlie.PNG';
import CharlieHome from './img/feedImg/home2.PNG';
import John from './img/feedImg/john.PNG';
import Charlie1 from './img/feedImg/chap1.jpg';


class App extends Component {
  state = {
    toggleIsLiked: false,
    toggleAddPhoto: false,
    posts: [
      {
        id: 0,
        profileImg: Charlie,
        profileName: "chazzachaplin",
        photo: Charlie1,
        description: "felt cute, might delete later...",
        likes: 0,
      },
      {
        id: 1,
        profileImg: Cheryl,
        profileName: "cheryltweedy",
        photo: CherylHome,
        description: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        likes: 0,
      },
      {
        id: 2,
        profileImg: Charlie,
        profileName: "chazzachaplin",
        photo: CharlieHome,
        description: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        likes: 0,
      }
      
    ]

  }

  

  addPost = (caption) => {
    let newPost = {
      id: 3,
      profileImg: John,
      profileName: "jwayneyboi",
      photo: 'https://i.guim.co.uk/img/media/9c32c02f6efb6c834e13340a34ee88f9f7352be0/0_27_1865_2352/master/1865.jpg?width=300&quality=85&auto=format&fit=max&s=f3ffe0ad7d22ad9f85ed0348907edd32',
      description: caption,
      likes: 0,
    }

    // let allPosts = this.state.posts
    // allPosts.push(newPost)
    // this.setState({ posts: allPosts })

    this.setState(prevState => ({ posts: [newPost,...prevState.posts], toggleAddPhoto: false }))
  }

   changeFillLike = () => {
    return (
      <path className={this.state.toggleIsLiked ? 'likePathRed' : 'likePath'} fill='white' stroke='black' stroke-width='10px'  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
    )
    }



  addToLikes = (index) => {
    let currentLikes = this.state.posts
    let toggleIsLiked = this.state.toggleIsLiked
    if (currentLikes[index].likes == 0) {
      currentLikes[index].likes++;
      toggleIsLiked = true;
      this.setState({ posts: currentLikes,
      toggleIsLiked: toggleIsLiked })
    }
    else {
      currentLikes[index].likes--;
      toggleIsLiked = false;
      this.setState({ posts: currentLikes,
      toggleIsLiked: toggleIsLiked })
    }
  }

  handleToggleAddPhoto = () => {
    this.setState(prevState => ({ toggleAddPhoto: !prevState.toggleAddPhoto }))
  }

  render() {

    const eachPost = this.state.posts.map((posts, index) => {
      return (
        <Photofeed
          key={posts.id}
          profileImg={posts.profileImg}
          profileName={posts.profileName}
          photo={posts.photo}
          description={posts.description}
          likes={posts.likes}
          addingLikes={this.addToLikes}
          likeCount={posts.likes}
          index={index}
          changeFillLike={this.changeFillLike}
        />
      )
    })

    return (
      <div className="App">
        <TopNav />
        {this.state.toggleAddPhoto && <AddPhoto addPost={this.addPost} />}
        {eachPost}
        <RightNav />
        <BottomNav handleToggleAddPhoto={this.handleToggleAddPhoto}/>
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
