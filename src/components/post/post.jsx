import React, { Component } from "react";
import PropTypes from "prop-types";
import "./post.css";
import PostActions from "./postActions";
import CommentInput from "./../comments/commentInput";

export default class SinglePost extends Component {
  static propTypes = {
    postType: PropTypes.string,
    media: PropTypes.bool
  };
  static defaultProps = {
    postType: "simple-post",
    media: false
  };
  state = { showComment: false }
  showComment = () => {
    const currentState = this.state.showComment
    this.setState({
      showComment: !currentState
    })
  }
  render() {

    return (
      <div style={{ marginBottom: "1em" }}>
        <div className="post-container">
          <div className="post-owner">
            <div className="post-owner-image-wrapper">
              <img
                src={this.props.post.user[0].photo}
                alt="lol"
                className={this.props.post.user[0].firstName + ' display'}
              />
            </div>

            <div className="post-owner-details">
              <p>{this.props.post.user[0].firstName + " " + this.props.post.user[0].lastName}</p>
              {this.props.postType === "sponsored" ? (
                <p className="post-type">Sponsored</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="post-content">
            <p>{this.props.post.post.post}</p>
          </div>
        </div>
        {this.props.postType !== "sponsored" ? (
          <>
            {" "}
            <PostActions showComment={this.showComment} postID={this.props.post.post.id} />

              <CommentInput postID={this.props.post.uuid} show={this.state.showComment}/>
            {" "}
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

class PostMedia extends Component {
  render() {
    return (
      <div className="post-media-container">
        <img
          className="post-image img-fluid"
          alt="post"
          src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540948129/background-pine-texture-82256_w2aimd.jpg"
        />
      </div>
    );
  }
}
