import React, { Component } from "react";
import PropTypes from "prop-types";
import "./post.css";
import PostActions from "./postActions";
import CommentInput from "./../comments/commentInput";
import {Link} from 'react-router-dom';
import OnePost from "./OnePost";

export default class SinglePost extends Component {
  static propTypes = {
    postType: PropTypes.string,
    media: PropTypes.bool
  };
  static defaultProps = {
    postType: "simple-post",
    media: false
  };
  state = { showComment: false };
  showComment = () => {
    const currentState = this.state.showComment
    this.setState({
      showComment: !currentState
    })
  }
  render() {
    const { uuid } = this.props.post.post;
    console.log(uuid);

    return (
      <div style={{ marginBottom: "1em" }}>
        <div className="post-container">
          <div className="post-owner">
            <div className="post-owner-image-wrapper">
              <img
                src={this.props.post.user[0].photo}
                alt="lol"
                className="post-owner-image"
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
              <Link to={`/activity/${uuid}`}><p>{this.props.post.post.post}</p></Link>
          </div>
        </div>
        {this.props.postType !== "sponsored" ? (
          <>
            {" "}
            <PostActions showComment={this.showComment} post={this.props.post.post.post} postID={this.props.post.post.uuid} />


              <CommentInput postID={this.props.post.post.uuid} show={this.state.showComment}/>
            {" "}
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

