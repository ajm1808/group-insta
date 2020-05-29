import React, { Component } from 'react';
import './AddPhoto.css';


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
                    <input id='inputPhoto' type='file'  />
                    <span>New Post</span><button>Share</button>
                    <input type="text" id='captionBox' value={this.state.caption} onChange={this.handleInput}/>
                    <span>Tag People</span>
                    <span>Add Location</span>
                </form>
            </div>
        
        )
        
    }
}

export default AddPhoto;