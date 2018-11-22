import React, { Component } from "react";
import "./post.css";
import axios from 'axios';

export default class SinglePost extends Component {

    constructor(){
        super();

        this.state = {
            like: "",
            likes: [],
            comments: []
        };

    }


    componentDidMount() {

        this.showLikesCount();
        this.showCommentsCount();

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

    showCommentsCount(){
        const id = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        const url = "http://api.gclout.com:3000/comments/" + this.props.postID;
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
            console.log(res.data.comment.length);

            this.setState ({

                comments: res.data.comment.length

            })
        });
    }

    showComment = () => {
        this.props.showComment();
    }


    likePost = () => {
        const uuid = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");
        console.log(token, uuid);

        const id = this.props.postID;
        //console.log(id);

        const data = {

            post: this.props.postID

        };
        //console.log(data);
        const url = 'http://api.gclout.com:3000/reactions/' +id;
        //console.log(url);
        axios({

            method: 'post',
            url: url,
            data: data,
            mode: 'no-cors',
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

      const { likes, comments } = this.state;
      console.log(comments);

    return (
      <div className="post-actions-container">
        {/*<button className="post-action"
        onClick={this.likePost.bind(this)}>
                onClick={() => console.log(this.props.postID)}>
          <i className="far fa-thumbs-up" onLoad={this.showLikesCount.bind(this, this.props.postID)}/> {likes}
        </button>*/}
        <button className="post-action"
                onClick={() => this.likePost(this.props.postID)}
        >
            <i className="far fa-thumbs-up" onLoad={this.showLikesCount.bind(this, this.props.postID)}/> {likes}
        </button>
        <button className="post-action" onLoad={this.showCommentsCount.bind(this, this.props.postID)} onClick={this.showComment}>
          {" "}
          <i className="far fa-comment"/> {comments} comment
        </button>
        <button className="post-action">
          {" "}
          <i className="fas fa-share" /> Share
        </button>
      </div>
    );
  }
}
