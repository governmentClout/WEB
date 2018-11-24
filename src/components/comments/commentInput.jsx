import React, { Component } from "react";
import "./comments.css";
import axios from "axios";

class CommentInput extends Component {

  constructor(){

    super();

    this.state ={

      comment: "",
      ref: ""
    
    }

    /* this.onSubmit = this.onSubmit.bind(this); */
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

  }

  onChange(ev){

    this.setState({

      [ev.target.name]: ev.target.value

    })

  }

/*   onSubmit() {
    
    const data = {
      
      comment: this.state.comment

    }

    console.log(data);

  } */
onKeyPress = (e) => {

    if(e.which === 13) {

      const uuid = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

      const data = {
      
        comment: this.state.comment,
        ref: this.props.postID
      
      };

      //console.log(data);

      axios({

        method: "POST",
        url: "http://api.gclout.com:3000/comments",
        data: data,
        headers: {

          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          token: token,
          uuid: uuid
        
        }
      
      }).then(res => {
        //console.log(res.data);

          this.setState({

              comment: '',

          });

      })
    }
  };

  render() {
    return (
      <div className={ this.props.show ? "comment-input-wrapper" : "comment-input-wrapper hidden" } >
        <div className="comment-owner-wrapper">
          <img
            className="comment-owner"
            src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
            alt="comment-owner"
          />
        </div>
        <input
          onKeyPress={this.onKeyPress}
          type="text"
          onSubmit={this.onSubmit}
          name="comment"
          className="form-control"
          placeholder="write a comment here..."
          value={this.state.comment}
          onChange={this.onChange}
          onClick={this.props.postID}
          ref={console.log(this.props.postID)}
        />
{/*         <input value={this.props.postID} name="ref" onKeyPress={this.onKeyPress} onSubmit={this.onSubmit}/> */}
      </div>
    );
  }
}

export default CommentInput;
