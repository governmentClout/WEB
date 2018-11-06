import React, { Component } from "react";
import "./comments.css";

class CommentInput extends Component {

  constructor(){

    super();

    this.state ={

      comment: ""
    
    }

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    
    e.preventDefault();
  }
  render() {
    return (
      <div className="comment-input-wrapper">
        <div className="comment-owner-wrapper">
          <img
            className="comment-owner"
            src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
            alt="comment-owner"
          />
        </div>
        <input
          type="text"
          name="comment"
          className="form-control"
          placeholder="write a comment here..."
        />
      </div>
    );
  }
}

export default CommentInput;
