import React, { Component } from "react";
import "./makePost.css";
import PostMedia from "./postMedia";
import axios from "axios";

class MakePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewPost: false,
      showNewArticle: false,
      showNewPoll: false
    };
    this.newPostToggle = this.newPostToggle.bind(this);
    this.newArticleToggle = this.newArticleToggle.bind(this);
    this.newPollToggle = this.newPollToggle.bind(this);
    this.closeAll = this.closeAll.bind(this);
  }
  newPostToggle() {
    if (this.state.showNewArticle || this.state.showNewPoll) {
      this.setState({ showNewArticle: false, showNewPoll: false });
    }
    let currentState = this.state.showNewPost;
    this.setState({ showNewPost: !currentState });
  }
  newPollToggle() {
    if (this.state.showNewPost || this.state.showNewArticle) {
      this.setState({ showNewArticle: false, showNewPost: false });
    }
    let currentState = this.state.showNewPoll;
    this.setState({ showNewPoll: !currentState });
  }
  newArticleToggle() {
    if (this.state.showNewPost || this.state.showNewPoll) {
      this.setState({ showNewPost: false, showNewPoll: false });
    }
    let currentState = this.state.showNewArticle;
    this.setState({ showNewArticle: !currentState });
  }
  closeAll() {
    this.setState({
      showNewPost: false,
      showNewArticle: false,
      showNewPoll: false
    });
  }
  render() {
    return (
      <div
        className={
          this.props.type !== "poll" ? "make-post" : "make-post not-rounded"
        }
      >
        <div className="make-post-header d-flex">
          {this.props.type !== "poll" ? (
            <>
              <button className="btn btn-tab" onClick={this.newPostToggle}>
                <i
                  className="fas fa-file text-gclout-blue"
                  style={{ marginRight: "10px" }}
                />
                Post
              </button>
              <button className="btn btn-tab" onClick={this.newArticleToggle}>
                <i
                  className="fas fa-clipboard-list text-gclout-blue"
                  style={{ marginRight: "10px" }}
                />
                Article
              </button>
            </>
          ) : (
            <button className="btn btn-tab" onClick={this.newPollToggle}>
              <i
                className="fas fa-poll text-gclout-blue"
                style={{ marginRight: "10px" }}
              />
              Poll
            </button>
          )}
          {this.state.showNewPost ||
          this.state.showNewArticle ||
          this.state.showNewPoll ? (
            <p
              className="text-right close-btn ml-auto align-self-center"
              onClick={this.closeAll}
            >
              <i className="fas fa-times" />
            </p>
          ) : (
            ""
          )}
        </div>
        {this.props.type !== "poll" ? (
          <>
            <PostCreation show={this.state.showNewPost} />
            <ArticleCreation show={this.state.showNewArticle} />
          </>
        ) : (
          <PollCreation show={this.state.showNewPoll} />
        )}
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
      uploadImages: false
    };
  }

  dataChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  postData(ev) {
    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    console.log(id);
    console.log(token);

    ev.preventDefault();

    const post = this.state.post;

    const data = {
      post
    };

    console.log(data);
    console.log("lmao");

    /*     const url = "http://api.gclout.com:3000/posts"; */

    /* if(this.state.post){ */

    // fetch('http://api.gclout.com:3000/posts', {
    // method: "post",
    // body: JSON.stringify({
    //   post: this.state.post
    //   }),
    // headers: {
    //   "Content-Type": "application/json",
    //   "token": token,
    //   "uuid": id
    // }
    // }).then(function(response){
    //   console.log(response);
    // }).then(function(body){
    //   console.log(body);
    // });

    axios({
      method: "post",
      url: "http://api.gclout.com/posts",
      data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        token: token,
        mode: "no-cors",
        uuid: id
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));

    /*       console.log(axios)
 */
    /* } */
  }

  updateWordCount = event => {
    this.setState({ post: event.target.value });
    if (this.state.post === "") {
      this.setState({ wordCount: 0 });
    } else {
      let wordCount = this.state.post.split(" ").length;
      this.setState({ wordCount: wordCount });
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
          <form onSubmit={this.postData.bind(this)}>
            <div className="form-group">
              <textarea
                className={
                  this.state.wordCount < 100
                    ? "form-control"
                    : "form-control border-red"
                }
                rows="4"
                name="new_post"
                onChange={this.updateWordCount}
                value={this.state.post}
                onFormChange={this.dataChange.bind(this)}
                placeholder="Type post here..."
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
              >
                Share post
              </button>
              <button
                className="btn btn-gclout-blue-outline"
                style={{ marginBottom: "0" }}
                onClick={this.showImageUploader}
                type="button"
                role="button"
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

class ArticleCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { wordCount: 0, article: "", uploadImages: false };
    this.updateWordCount = this.updateWordCount.bind(this);
  }
  updateWordCount(event) {
    this.setState({ article: event.target.value });
    if (this.state.article === "") {
      this.setState({ wordCount: 0 });
    } else {
      let wordCount = this.state.article.split(" ").length;
      this.setState({ wordCount: wordCount });
    }
  }
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
          <h5>Article</h5>
          <form>
            <div className="form-group">
              <label htmlFor="article-title">Title</label>
              <input
                type="text"
                className="form-control"
                name="article-title"
                placeholder="Title of article ..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="new_article">Article</label>
              <textarea
                className="form-control"
                rows="4"
                name="new_article"
                onChange={this.updateWordCount}
                value={this.state.article}
                placeholder="Type article here..."
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
              >
                Share article
              </button>
              <button
                className="btn btn-gclout-blue-outline"
                style={{ marginBottom: "0" }}
                onClick={this.showImageUploader}
                type="button"
                role="button"
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

class PollCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { wordCount: 0, poll: "", sector: "" };
  }
  render() {
    return (
      <div
        className={
          this.props.show ? "new-post-container show" : "new-post-container"
        }
      >
        <div className="pt-4 px-4 pb-5">
          <form>
            <div className="form-group">
              <label>Sector</label>
              <select
                name="poll_sector"
                className="form-control"
                value={this.state.sector}
                onChange={this.handleChange}
                required
              >
                <option value="economy">Economy</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="education">Education</option>
                <option value="politics">Politics</option>
                <option value="security">Security</option>
                <option value="agriculture">Agriculture</option>
                <option value="technology">Technology</option>
              </select>
            </div>
            <div className="form-group">
              <label>Opininion</label>
              <textarea
                className="form-control"
                rows="4"
                name="new_poll"
                value={this.state.poll}
                placeholder="Type opinion here..."
              />
            </div>
            <div className="d-flex">
              <button
                className="btn btn-gclout-blue mr-2"
                style={{ marginBottom: "0" }}
              >
                Share poll
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
