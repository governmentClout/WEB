import React, { Component } from "react";
import "./post.css";

export default class SinglePost extends Component {
  render() {
    return (
      <div className="post-actions-container">
        <button className="post-action">
          <i className="far fa-thumbs-up" /> 10 Likes
        </button>
        <button className="post-action">
          {" "}
          <i className="far fa-comment" /> 7 comments
        </button>
        <button className="post-action">
          {" "}
          <i className="fas fa-share" /> Share
        </button>
      </div>
    );
  }
}
