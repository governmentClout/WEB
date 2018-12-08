import React, { Component } from "react";
import "./makePost.css";
import PostMedia from "./postMedia";
import axios from "axios";
import { Manager, Reference, Popper } from "react-popper";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile"
import FilterList from "@material-ui/icons/FilterList"
import CameraAlt from "@material-ui/icons/CameraAlt"


class MakeExecutivePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewPost: false,
      showFilters: false
    };
    this.newPostToggle = this.newPostToggle.bind(this);
  }
  newPostToggle() {
    let currentState = this.state.showNewPost;
    this.setState({ showNewPost: !currentState });
  }
  showFilters = () => {
    let currentState = this.state.showFilters;
    this.setState({ showFilters: !currentState });
  }
  updatePosts = () => this.props.updatePosts();
  render() {
    return (
      <div className="make-post">
        <div className="make-post-header d-flex">
          <button className="btn btn-tab" onClick={this.newPostToggle}>
            <InsertDriveFile  className="text-gclout-blue"/>
            Post
          </button>
          <div className="ml-auto align-self-center">
            <Manager>
              <Reference>
                {({ ref }) => (
                  <button
                    type="button"
                    ref={ref}
                    onClick={this.showFilters}
                    className="btn btn-white"
                  >
                  <FilterList />
                  {" "}
                    Filters
                  </button>
                )}
              </Reference>
              <Popper placement="bottom">
                {({ ref, style, placement, arrowProps }) => (
                  <div ref={ref} style={style} data-placement={placement}>
                    <div
                      className={
                        this.state.showFilters
                          ? "button-dropdown show"
                          : "button-dropdown"
                      }
                    >
                      <ul className="button-dropdown-list">
                        <li
                          className="profile-dropdown-list-item"
                          onClick={this.showFilters}
                        >
                          <button className="button-dropdown-list-button">All</button>
                        </li>
                        <li
                          className="profile-dropdown-list-item"
                          onClick={this.showFilters}
                        >
                          <button className="button-dropdown-list-button">Ministry</button>
                        </li>
                        <li
                          className="profile-dropdown-list-item"
                          onClick={this.showFilters}
                        >
                          <button className="button-dropdown-list-button">Department</button>
                        </li>
                        <li
                          className="profile-dropdown-list-item"
                          onClick={this.showFilters}
                        >
                          <button className="button-dropdown-list-button">Agency</button>
                        </li>
                      </ul>
                    </div>
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                  </div>
                )}
              </Popper>
            </Manager> 
          </div>
        </div>
        <PostCreation updatePosts={this.updatePosts} show={this.state.showNewPost} />
      </div>
    );
  }
}

export default MakeExecutivePost;

class PostCreation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0,
      post: "",
      uploadImages: false,
      toProfile: false,
      disable: false,
      loading: false,
      class: '',
      department: ''

    };

    this.updateWordCount= this.updateWordCount.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  handleChange = (e) => {

    this.setState({

      [e.target.name]: e.target.value

    });
  
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
    if (this.state.wordCount === 0) {
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
          <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md">
                <label htmlFor="class">Pick a class</label>
                <select
                  name="class"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                >
                  <option value="Economy">Economy</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Education">Education</option>
                  <option value="Politics">Politics</option>
                  <option value="Security">Security</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Technology">Technology</option>
                  <option value="Economy">Economy</option>
                </select>
              </div>
              <div className="form-group col-md">
                <label htmlFor="department">State</label>
                 <select
                  name="department"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                >
                  <option value="ministry">Ministry</option>
                  <option value="department">Department</option>
                  <option value="agency">Agency</option>
                </select>
              </div>
            </div>
            <h6>Post</h6>
            <div className="form-group">
              <textarea
                className="form-control"
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
              {this.state.wordCount} {""} words
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
                <CameraAlt className="text-gclout-blue" />
                Photo & Video
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

