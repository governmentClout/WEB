import React, { Component } from "react";
import './createPost.css';
import { FilterList, Assignment, LocationOn, CameraAlt, DeveloperBoard, Poll } from '@material-ui/icons';
import axios from "axios";
import {API_URL} from "../config";

class CreatePost extends Component {

  constructor(props) {
    super(props);

    this.state = {

      focused: false,
      profile: []

    }

  }

  componentDidMount() {

    this.getProfile();

  }

  getProfile(){

    if(this.state.profile !== []){

      const id =  sessionStorage.getItem("uuid");
      const token  = sessionStorage.getItem("token");

      if(this.state.profile !== []) {

        //   id = sessionStorage.getItem("uuid"),
        //   token = sessionStorage.getItem("token");
        const url = `${API_URL}/profiles/${id}`;

        axios({

          method: "GET",
          url: url,
          headers: {

            uuid: id,
            token: token

          }

        }).then(res => {

          this.setState({

            profile: res.data.profile[0],
            loading: false

          });

        });
      }

    }
  }

  render() {

    const { profile } = this.state;

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
                src={profile.photo}
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
