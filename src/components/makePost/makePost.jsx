import React, { Component } from "react";
import "./makePost.css";

class MakePost extends Component {
  constructor(props) {
    super(props);
    this.state = { showNewPost: false, showNewArticle: false };
    this.newPostToggle = this.newPostToggle.bind(this);
    this.newArticleToggle = this.newArticleToggle.bind(this);
    this.closeAll = this.closeAll.bind(this);
  }
  newPostToggle() {
    if (this.state.showNewArticle) {
      this.setState({ showNewArticle: false });
    }
    let currentState = this.state.showNewPost;
    this.setState({ showNewPost: !currentState });
  }
  newArticleToggle() {
    if (this.state.showNewPost) {
      this.setState({ showNewPost: false });
    }
    let currentState = this.state.showNewArticle;
    this.setState({ showNewArticle: !currentState });
  }
  closeAll() {
    this.setState({ showNewPost: false, showNewArticle: false });
  }
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
          <button className="btn btn-tab" onClick={this.newArticleToggle}>
            <i
              className="fas fa-clipboard-list text-gclout-blue"
              style={{ marginRight: "10px" }}
            />
            Article
          </button>
          {this.state.showNewPost || this.state.showNewArticle ? (
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
        <PostCreation show={this.state.showNewPost} />
        <ArticleCreation show={this.state.showNewArticle} />
      </div>
    );
  }
}

export default MakePost;

class PostCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { wordCount: 0, post: "" };
    this.updateWordCount = this.updateWordCount.bind(this);
  }
  updateWordCount(event) {
    this.setState({ post: event.target.value });
    if (this.state.post === "") {
      this.setState({ wordCount: 0 });
    } else {
      let wordCount = this.state.post.split(" ").length;
      this.setState({ wordCount: wordCount });
    }
  }
  render() {
    return (
      <div
        className={
          this.props.show ? "new-post-container show" : "new-post-container"
        }
      >
        <div className="pt-4 px-4 pb-5">
          <h5>Post</h5>
          <form>
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
                placeholder="Type post here..."
              />
            </div>
            <p className="text-right mb-0">
              {100 - this.state.wordCount} {""} words left
            </p>
            <div className="d-flex">
              <button
                className="btn btn-gclout-blue mr-2"
                style={{ marginTop: "0", marginBottom: "0" }}
              >
                Share post
              </button>
              <button
                className="btn btn-gclout-blue-outline"
                style={{ marginTop: "0", marginBottom: "0" }}
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
    this.state = { wordCount: 0, article: "" };
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
            <div className="d-flex">
              <button
                className="btn btn-gclout-blue mr-2"
                style={{ marginTop: "0", marginBottom: "0" }}
              >
                Share article
              </button>
              <button
                className="btn btn-gclout-blue-outline"
                style={{ marginTop: "0", marginBottom: "0" }}
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
