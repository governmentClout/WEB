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
  render() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <div className="post-container">
          <div className="post-owner">
            <div className="post-owner-image-wrapper">
              <img
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                alt="lol"
                className="post-owner-image"
              />
            </div>
            <div className="post-owner-details">
              <p>Oreoluwa Ojo</p>
              {this.props.postType === "sponsored" ? (
                <p className="post-type">Sponsored</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="post-content">
            <p>
              At Google, to encourage teamwork, we emphasize the product triad.
              This triad consists of UX, PM and eng, and the reason why we
              emphasize this triad is because it is essentially what leads to
              the development of a product (done well when everyone works
              together).
            </p>
            {this.props.media ? <PostMedia /> : ""}
          </div>
        </div>
        {this.props.postType !== "sponsored" ? (
          <>
            {" "}
            <PostActions /> <CommentInput />{" "}
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
