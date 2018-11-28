import React, { Component } from "react";
import "./post.css";
import axios from 'axios';

export default class SinglePost extends Component {

    constructor(){
        super();

        this.state = {
            like: "",
            likes: [],
            comments: 0
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

        axios({

            method: 'get',
            url: url,
            headers: {

                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: id

            }

        }).then(res => {


            this.setState ({

                likes: res.data[0].reactions

            })
        });
    }

    showCommentsCount(){
        const id = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        const url = "http://api.gclout.com:3000/comments/" + this.props.postID;

        axios({

            method: 'get',
            url: url,
            headers: {

                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: id

            }

        }).then(res => {

            //console.log(res.data);

            this.setState ({


                comments: res.data[0].comment.length

            });
        });
    }

    showComment = () => {
        this.props.showComment();
    }


    likePost = () => {
        const uuid = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        const id = this.props.postID;

        const data = {

            post: this.props.postID

        };
        const url = 'http://api.gclout.com:3000/reactions/' +id;
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

    return (
      <div className="post-actions-container">
        {/*<button className="post-action"
        onClick={this.likePost.bind(this)}>
                onClick={() => console.log(this.props.postID)}>
          <i className="far fa-thumbs-up" onLoad={this.showLikesCount.bind(this, this.props.postID)}/> {likes}
        </button>*/}
        <button className="post-action"
                onClick={() => this.likePost(this.props.postID)}
                //onClick={() => console.log(this.props.postID)}
        >
            <i className="far fa-thumbs-up" onLoad={this.showLikesCount.bind(this, this.props.postID)}/> {likes}  like{likes === 1 ? '' : 's'}
        </button>
        <button className="post-action" onLoad={this.showCommentsCount.bind(this, this.props.postID)} onClick={this.showComment}>
          {" "}
          <i className="far fa-comment"/> {comments} comment{comments === 1 ? '' : 's'}
       </button>
        <button className="post-action">
          {" "}
          <i className="fas fa-share" /> Share
        </button>
      </div>
    );
  }
}
