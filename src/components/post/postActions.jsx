import React, { Component } from "react";
import "./post.css";
import axios from 'axios';
import {API_URL} from "../config";
import { Link } from 'react-router-dom';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    EmailShareButton,

    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    TumblrIcon,
    MailruIcon,
    EmailIcon,
    LivejournalIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
} from 'react-share';

export default class SinglePost extends Component {

    constructor(){
        super();

        this.state = {
            like: "",
            likes: [],
            comments: 0,
            comment: []
        };

    }


    componentWillMount() {

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

        const url = `${API_URL}/comments/` + this.props.postID;
        axios({
            method: 'get',
            url: url,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: id
            }
        }).then(res => {
            console.log(res.data[0].length);
            console.log(res.data)
            console.log(res.data[0].comment)
            console.log(res.data[0].comment.length);
            this.setState ({
                comment: res.data[0].comment.length
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

      const { likes, comment } = this.state;

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
          <i className="far fa-comment"/> {comment} comment{comment === 1 ? '' : 's'}
       </button>
        <button className="post-action">
          {" "}
            <i className="fas fa-share" /><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.dev.gclout.com/activity">Share</a>
        </button>
          <FacebookShareButton
              url="dev.gclout.com"
              quote="d"
              className="Demo__some-network__share-button">
              <FacebookIcon
                  size={32}
                  round />
          </FacebookShareButton>
          <LinkedinShareButton
              url="dev.gclout.com"
              title="dk"
              windowWidth={750}
              windowHeight={600}
              className="Demo__some-network__share-button">
              <LinkedinIcon
                  size={32}
                  round />
          </LinkedinShareButton>
      </div>
    );
  }
}
