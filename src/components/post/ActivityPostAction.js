import React, { Component } from "react";
import "./post.css";
import axios from 'axios';
import {API_URL} from "../config";
import ThumbUp from "@material-ui/icons/ThumbUp";

export default class ActivitySinglePost extends Component {

    constructor(){
        super();

        this.state = {
            like: "",
            likes: [],
            liked: false,
            comments: 0
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

        /*const likes = this.state;

        const newLikes = res.data[0].reactions*/

    };

    render() {

        const { likes, comments, liked } = this.state;

        return (
            <div className="post-actions-container">
                <button
                    className= {liked ? "post-action avtive" : "post-action avtive"}
                    onClick={() => this.likePost(this.props.postID)}
                    onLoad={this.showLikesCount.bind(this, this.props.postID)}
                >
                <ThumbUp /> {likes}  like{likes === 1 ? '' : 's'}
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
