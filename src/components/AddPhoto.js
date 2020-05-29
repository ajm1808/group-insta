import React, { Component } from 'react';
import './AddPhoto.css';
import john from '../img/feedImg/john.PNG';


class AddPhoto extends Component {
    state = {
        caption: ""
    }

    handleInput = (event) => {
        this.setState({ caption: event.target.value })
    }

    handleForm = (event) => {
        this.props.addPost(this.state.caption)

        event.preventDefault()
    }

    render () {

        return (
            <div className='photoWrapper'>
                <form className='photoForm' onSubmit={this.handleForm}>
                    <div><span>New Post</span><button>Share</button></div>
                    <div id='john'><img id='john' src={john}></img></div>
                    <input type="text" id='captionBox' value={this.state.caption} onChange={this.handleInput}/>
                    <span>Tag People</span>
                    <span>Add Location</span>
                </form>
            </div>
        
        )
        
    }
}

export default AddPhoto;