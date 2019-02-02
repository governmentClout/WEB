import React, { Component } from "react";
import "./comments.css";
import axios from "axios";

class CommentInput extends Component {

  constructor(props){

    super(props);

    this.state ={

      comment: "",
      ref: "",
      comments: "",
      disable: false,
    
    }

    /* this.onSubmit = this.onSubmit.bind(this); */
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

  }
  componentDidMount() {
    this.loadComments()
  }
  loadComments() {
    const uuid = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token"),
      id = this.props.postID;

    axios({

      method: "get",
      url: "http://api.gclout.com:3000/comments/" + id,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        token: token,
        uuid: uuid
      }

    }).then(res => {

      this.setState({

        comments: res.data.reverse(),

      });


    })
  }

  onChange(ev){

    this.setState({

      [ev.target.name]: ev.target.value

    })

  }
onKeyPress = (e) => {

    if(e.which === 13) {
      this.setState({ disable: true })
      const uuid = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

      const data = {
      
        comment: this.state.comment,
        ref: this.props.postID
      
      };

      console.log(data);

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
        console.log(res.data);

          this.loadComments()
          this.setState({

              comment: '',
              disable: false,

          });


      }).catch( err => {
        this.setState({
          disable: false

        });

      })
    }
  };

  render() {
    return (
      <div className={this.props.show ? "comment-wrapper" : "comment-wrapper hidden"} >
        <div className="comment-input-wrapper">
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
            disabled={this.state.disable}
            onClick={() => this.props.postID}
          />
        </div>
        <div className="previous-comments">
          { this.state.comments ? this.state.comments.map(comment => (
          <div className="single-comment">
            <div className="comment-owner-wrapper">
                {comment.user[0] !== undefined? (
                  <img
                    className="comment-owner"
                    src={comment.user[0].photo}
                    alt="comment-owner"
                  />) : (
                    <p>lol</p>
                  )}
              
            </div>
            <div>
                {comment.user[0] !== undefined ? ( <strong>{comment.user[0].firstName + " " + comment.user[0].lastName}</strong>) : 'lol'}
              <p>{comment.comment.comment}</p>
            </div>

          </div>
        ) 
          ) : ""}
        </div>
      </div>
    );
  }
}

export default CommentInput;
