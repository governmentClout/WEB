import React, { Component } from "react";
import './createPost.css';
import { FilterList, Assignment, LocationOn, CameraAlt, DeveloperBoard, Poll } from '@material-ui/icons';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    }
  }

  render() {
    return (
      <div className="create-post__container">
        <div className="create-post__header">
          <p>Post</p>
          <button className="create-post__filter-button">
            <FilterList />
            Filter
          </button>
        </div>
        <div className="create-post__content">
          <div className="create-post__input-container">
            <div className="create-post__image-wrapper">
              <img
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                alt="user name"
                className="create-post__image"/>
            </div>
            <textarea
              name="post"
              id="post"
              cols="30"
              rows="2"
              placeholder="Whats on your mind"
              className="create-post__input" />
          </div>
          <div className="create-post__actions">
            <button className="create-post__action-button">
              <Assignment className="text-gclout-blue" /> Article
            </button>
            <button className="create-post__action-button">
              <CameraAlt className="text-gclout-blue" /> Photo/Video
            </button>
            <button className="create-post__action-button">
              <LocationOn className="text-gclout-blue" /> Location
            </button>
            <button className="create-post__action-button">
              <DeveloperBoard className="text-gclout-blue" /> Petition
            </button>
            <button className="create-post__action-button">
              <Poll className="text-gclout-blue" /> Poll
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePost;
