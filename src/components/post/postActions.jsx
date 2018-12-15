import React, { Component } from "react";
import "./post.css";
import axios from 'axios';
import {API_URL} from "../config";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import Reply from "@material-ui/icons/Reply";
import { Manager, Reference, Popper } from "react-popper";

export default class SinglePost extends Component {

    constructor(){
        super();

        this.state = {
            like: "",
            likes: [],
            comments: 0,
            comment: [],
            liked: false,
            showDropup: false,
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
    openDropup = () => {
        const currentState = this.state.showDropup
        this.setState({
            showDropup: !currentState,
        })
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
    };

    registerShare(){

        const pid = this.props.postID;
        const url = `${API_URL}/shares/${pid}`;
        const data = {

            post: pid

        };

        const uuid = sessionStorage.getItem('uuid');
        const token = sessionStorage.getItem('token');

        const header = {

            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            token: token,
            uuid: uuid

        };

        axios({

            method: 'post',
            url: url,
            data: data,
            mode: "no-cors",
            headers: header

        }).then(res => {

            console.log(res.data);

        })

    }

    likePost = () => {
        const uuid = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");
            this.setState({
                liked: true,
            })

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
    };

  render() {

      const { likes, comment, liked } = this.state;

    return (
      <div className="post-actions-container">
        <button
            className= {liked ? "post-action active" : "post-action avtive"}
            onClick={() => this.likePost(this.props.postID)}
            onLoad={this.showLikesCount.bind(this, this.props.postID)}
        >
            <ThumbUp />
            {likes} {"  "}  like{likes <= 1 ? '' : 's'}
        </button>
        <button
            className="post-action"
            onLoad={this.showCommentsCount.bind(this, this.props.postID)}
            onClick={this.showComment}>
            <ChatBubbleOutline />
            {comment} {" "} comment{comment <= 1 ? '' : 's'}
        </button>
        <Manager>
            <Reference>
                {({ ref }) => (
                    <button
                        type="button"
                        ref={ref}
                        className="post-action"
                        onClick={this.openDropup}>

                        <Reply className="flipped-reply" />
                        {" "} Share
                    </button>
                )}
            </Reference>
            <Popper placement="bootom">
                {({ ref, style, placement, arrowProps }) => (
                <div ref={ref} style={style} data-placement={placement}>
                    <div
                        className={
                            this.state.showDropup
                            ? "dropup show"
                            : "dropup"
                        }>
                        <ul className="dropup-list">
                            <li
                                className="dropup-list-item"
                                onClick={this.openDropup}>
                                <button
                                    onClick={() => this.registerShare(this.props.postID)}>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`https://www.facebook.com/sharer/sharer.php?u=https://dev.gclout.com/activity/${this.props.postID}`}>
                                        <i class="fab fa-facebook-f"/>
                                    </a>
                                </button>
                            </li>
                            <li
                                className="dropup-list-item"
                                onClick={this.openDropup}>
                                <button
                                    onClick={() => this.registerShare(this.props.postID)}>
                                    <a
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.dev.gclout.com/activity/${this.props.postID}&title=${this.props.post}`}>
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </button>
                            </li>
                            <li
                                className="dropup-list-item"
                                onClick={this.openDropup}>
                                <button
                                    onClick={() => this.registerShare(this.props.postID)}>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`https://twitter.com/intent/tweet?text=${this.props.post}&url=https://www.dev.gclout.com/activity/${this.props.postID}`}>
                                        <i className="fab fa-twitter" />
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
                )}
            </Popper>
            </Manager>
      </div>
    );
  }
}
