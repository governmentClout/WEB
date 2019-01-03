import React, { Component } from "react";
import PropTypes from "prop-types";
import "./post.css";
import PostActions from "./postActions";
import CommentInput from "./../comments/commentInput";
import {Link} from 'react-router-dom';

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

    return (
      <div style={{ marginBottom: "1em" }}>
        <Link to={`/post/${this.props.post.post.uuid}`} className="post-link">
          <div className  ="post-container">
            <div className="post-owner">
              <div className="post-owner-image-wrapper">
                {this.props.post.user[0] ? (
                  <img
                  src={this.props.post.user[0].photo}
                  alt="lol"
                  className="post-owner-image"
                /> ) : (
                  <p>lol</p>
                )}
              </div>

              <div className="post-owner-details">
                <p>{this.props.post.user[0] ? this.props.post.user[0].firstName + " " + this.props.post.user[0].lastName : 'undefined'}</p>
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
        </Link>
        {/* {this.props.postType !== "sponsored" ? (
          <>
            {" "} */}
            <PostActions
              showComment={this.showComment}
              comments={this.props.post.comments}
              post={this.props.post.post.post}
              postID={this.props.post.post.uuid}
              reactions={this.props.post.reactions}
              shares={this.props.post.shares}
            />


        <CommentInput
          postID={this.props.post.post.uuid}
          comments={this.props.post.comments}
          show={this.state.showComment}/>
            {" "}
          {/* </>
        ) : (
          ""
        )} */}
      </div>
    );
  }
}
