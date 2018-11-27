import React, { Component } from "react";
import PropTypes from "prop-types";
import "./post.css";
import PetitionActions from "./petitionActions";
import CommentInput from "./../comments/commentInput";
import { Link } from "react-router-dom";

export default class SinglePetition extends Component {
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
        <div className="petition-header">
          <p>Petition to president Theresa May</p>
          <Link to="/polls">Economy</Link>
        </div>
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
              <p>Ogbeni Ore</p>
              <span>Whatever works</span>
            </div>
          </div>
          <div className="post-content">
            <p>This is a petition, I really should just copy and paste, but i'm just typing, Est velit deserunt elit velit sed elit fugiat excepteur aliqua esse aute ut ut eu.S</p>
          </div>
        </div>
        {this.props.postType !== "sponsored" ? (
          <>
            {" "}
            <PetitionActions showComment={this.showComment} postID='209-283-23' />

              <CommentInput postID='209-283-23' show={this.state.showComment}/>
            {" "}
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}


// class PostMedia extends Component {
//   render() {
//     return (
//       <div className="post-media-container">
//         <img
//           className="post-image img-fluid"
//           alt="post"
//           src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540948129/background-pine-texture-82256_w2aimd.jpg"
//         />
//       </div>
//     );
//   }
// }
