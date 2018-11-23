import React, { Component } from "react";
import "./makePost.css";
import PostMedia from "./postMedia";
import axios from "axios";
import { Redirect } from "react-router-dom";


class MakePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewPost: false
    };
    this.newPostToggle = this.newPostToggle.bind(this);
  }
  newPostToggle() {
    let currentState = this.state.showNewPost;
    this.setState({ showNewPost: !currentState });
  }
  updatePosts = () => this.props.updatePosts();
  render() {
    return (
      <div className="make-post">
        <div className="make-post-header d-flex">
          <button className="btn btn-tab" onClick={this.newPostToggle}>
            <i
              className="fas fa-file text-gclout-blue"
              style={{ marginRight: "10px" }}
            />
            Post
          </button>
          <p className="text-right ml-auto align-self-center">
            Filters
          </p>
        </div>
        <PostCreation updatePosts={this.updatePosts} show={this.state.showNewPost} />
      </div>
    );
  }
}

export default MakePost;

class PostCreation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0,
      post: "",
      uploadImages: false,
      toProfile: false,
      disable: false,
      loading: false
    };

    this.updateWordCount= this.updateWordCount.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  updatePostsNow = () => this.props.updatePosts()
  onSubmit(e) {

  // postData(ev) {
    this.setState({loading: true});
    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");
    e.preventDefault();

    const data = {
      post: this.state.post
    }

    axios({
    
      method: "post",
      url: "http://api.gclout.com:3000/posts",
      data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        token: token,
        uuid: id
      }
    })
      .then(response => {

        /*if(response.data.Success){

          alert('djd');

        }*/

        this.setState({

            loading: false,
            post: ""

        });

        this.updatePostsNow();
        if (response.data.Success) {
          sessionStorage.setItem("message", response.data.Success)
        } else {
          console.log("login error")
        }
        console.log(response.data.Success);
      })
      .catch(err => {
        this.setState({loading: false, post: ""});
        console.log(err)
      });
  }

  updateWordCount = event => {
    this.setState({ post: event.target.value });
    if (this.state.post === "") {
      this.setState({ wordCount: 0 });
    } else {
      let wordCount = this.state.post.split(" ").length;
      this.setState({ wordCount: wordCount });
    }
    if (this.state.wordCount > 100 || this.state.wordCount === 0) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  };

  showImageUploader = event => {
    event.preventDefault();
    let currentState = this.state.uploadImages;
    this.setState({ uploadImages: !currentState });
  };

  render() {
    return (
      <div
        className={
          this.props.show ? "new-post-container show" : "new-post-container"
        }
      >
        <div className="pt-4 px-4 pb-5">
          <h5>Post</h5>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <textarea
                className={
                  this.state.wordCount < 100
                    ? "form-control"
                    : "form-control border-red"
                }
                rows="4"
                name="post"
                onChange={this.updateWordCount}
                onCut={this.updateWordCount}
                onBlur={this.updateWordCount}
                onPaste={this.updateWordCount}
                value={this.state.post}
                placeholder="Type post here..."
                required={true}
              />
            </div>
            <p className="text-right mb-0">
              {100 - this.state.wordCount} {""} words left
            </p>
            <PostMedia showUploader={this.state.uploadImages} />
            <div className="d-flex">
              <button
                className="btn btn-gclout-blue mr-2"
                style={{ marginBottom: "0" }}
                disabled={!this.state.disable}
              >
                {this.state.loading ? <i className="fas fa-circle-notch fa-spin" /> : "Share post"} 
              </button>
              <button
                className="btn btn-gclout-blue-outline"
                style={{ marginBottom: "0" }}
                onClick={this.showImageUploader}
                type="button"
              >
                <i className="fas fa-camera mr-2" />
                Photo & Video
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

