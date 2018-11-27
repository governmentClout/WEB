import React, { Component } from "react";
import "./makePost.css";
import PostMedia from "./postMedia";
import axios from "axios";
import { Manager, Reference, Popper } from "react-popper";

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
            <i
              className="fas fa-file text-gclout-blue"
              style={{ marginRight: "10px" }}
            />
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
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12H8C7.45 12 7 11.55 7 11C7 10.45 7.45 10 8 10H10C10.55 10 11 10.45 11 11C11 11.55 10.55 12 10 12ZM18 1C18 1.55 17.55 2 17 2H1C0.450001 2 0 1.55 0 1C0 0.45 0.450001 0 1 0H17C17.55 0 18 0.45 18 1ZM14 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H14C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7Z" fill="#333333"/>
                  </svg> {" "}
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

