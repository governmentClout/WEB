import React, { Component } from "react";
import PropTypes from "prop-types";
import "./post.css";
import PostActions from "./postActions";
import axios from 'axios';


export default class SinglePost extends Component {

  constructor(props){
    super();
    this.state = {
      posts: []
    }  
  }
  
  static propTypes = {
    postType: PropTypes.string,
    media: PropTypes.bool
  };
  static defaultProps = {
    postType: "simple-post",
    media: false
  };

  componentDidMount() {
        
        const id = sessionStorage.getItem("uuid"),
        token = sessionStorage.getItem("token");

      console.log(id, token);
      const url = "http://api.gclout.com:3000/posts?user="+id;
      
      console.log(url);

      const header = {
          token: token,
          uuid: id
        }

      console.log(header);

      axios({
        
        method: 'get',
        url: url,
        headers: header
      
      }).then(res => {

        const posts = res.data.posts.map(post => post);
        console.log(posts);

        this.setState({

          posts
        
        });
        
        console.log(res.data);
      
      }).catch(err => {

        console.log(err);

      })
  }
  render() {
    return (
      <div style={{ marginBottom: "1em" }}>
      {
        this.state.posts.map(post => {
          return         <div className="post-container">
          <div className="post-owner">
    
             <div className="post-owner-image-wrapper">
              <img
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                alt="lol"
                className="post-owner-image"
              />
            </div> 
  
            <div className="post-owner-details">
              <p>{post.user}</p>
            </div>
          </div>
          <div className="post-content">
            <p>
              {post.post}
            </p>
          </div>
        </div>
        })
      }
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
          src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363181/gclout/Rectangle_2.1.png"
        />
      </div>
    );
  }
}
