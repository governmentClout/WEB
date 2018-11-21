import React, { Component } from "react";
import "./post.css";
import axios from 'axios';

export default class SinglePost extends Component {

    constructor(){
        super();

        this.state = {
            like: "",
            likes: []
        };

    }


    componentDidMount() {
        this.showLikesCount();
    }

    showLikesCount(){
        const id = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        const url = "http://api.gclout.com:3000/reactions/" + this.props.postID;
        console.log(url);

        axios({

            method: 'get',
            url: url,
            headers: {

                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: id

            }

        }).then(res => {

            console.log(res.data[0].reactions);

            this.setState ({

                likes: res.data[0].reactions

            })
        });
    }

    showComment = () => {
        this.props.showComment();
    }


    likePost = () => {
        console.log('clicked');
        const uuid = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        const data = {

            post: this.props.postID

        };
        const url = 'http://api.gclout.com:3000/reactions/' +this.props.postID;
        console.log(url);
        axios({

            method: 'post',
            url: url,
            data: data,
            headers: {

                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: uuid

            }

        }).then(res => {
            this.showLikesCount();
        })

        /*const likes = this.state;

        const newLikes = res.data[0].reactions*/

    };

  render() {

      const { likes } = this.state;

    return (
      <div className="post-actions-container">
        <button className="post-action"
        onClick={this.likePost.bind(this)}>
                {/*onClick={() => console.log(this.props.postID)}>*/}
          <i className="far fa-thumbs-up" onLoad={this.showLikesCount.bind(this, this.props.postID)}/> {likes}
        </button>
        <button className="post-action" onClick={this.showComment}>
          {" "}
          <i className="far fa-comment"/> comments
        </button>
        <button className="post-action">
          {" "}
          <i className="fas fa-share" /> Share
        </button>
      </div>
    );
  }
}
