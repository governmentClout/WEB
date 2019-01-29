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
            reactions: [],
            comments: [],
            shares: [],
            comment: [],
            liked: false,
            showDropup: false,
        };

    }
    componentDidMount() {
        this.setState({
            reactions: this.props.reactions.length,
            comments: this.props.comments,
            shares: this.props.shares,
        })
        let id = sessionStorage.getItem('uuid');
        let reactionsArray = [];
        this.props.reactions.forEach(reaction => {
            reactionsArray.push(reaction.user)
            return reactionsArray;
        });
        reactionsArray.indexOf(id) > -1 ? this.setState({ liked: true }) : this.setState({ liked: false });
        
    }
    openDropup = () => {
        const currentState = this.state.showDropup
        this.setState({
            showDropup: !currentState,
        })
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
            let reaction = {
                created_at: Date.now(),
                id: XPathExpression,
                post: this.props.postID,
                status: 1,
                user: sessionStorage.getItem('uuid'),
            }
            let oldState =  this.state.reactions
            let newState = oldState.push(reaction)
            this.setState({ shares: newState});
        })

    }

    likePost = () => {
        const uuid = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");
        let newLikes = this.state.reactions;
        if(!this.state.liked) {
            newLikes = newLikes + 1
            this.setState({ reactions: newLikes, liked: true });

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
                
            }).catch(console.log('an error occured'))
        }
        else {
            

            const id = this.props.postID;

            const data = {

                post: this.props.postID

            };
            const url = 'http://api.gclout.com:3000/reactions/' + id;
            axios({

                method: 'delete',
                url: url,
                data: data,
                mode: 'no-cors',
                headers: {

                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    token: token,
                    uuid: uuid

                }

            }).then(res => {
                newLikes = newLikes - 1
                this.setState({ reactions: newLikes, liked: false });
            })
        }
        const id = this.props.postID;

        const data = {

            post: this.props.postID

        };
        const url = 'http://api.gclout.com:3000/reactions/' + id;
        axios({

            method: 'get',
            url: url,
            data: data,
            mode: 'no-cors',
            headers: {

                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: uuid

            }

        }).then(res => {

        })
    };

  render() {

      const { reactions, comments, shares, liked } = this.state;

    return (
        <>
      <div className="post-actions-container">
        <button
            className= {liked ? "post-action active" : "post-action"}
            onClick={() => this.likePost(this.props.postID)}
        >
            <ThumbUp />
            {reactions > 0 && reactions} {"  "}  like{reactions <= 1 ? '' : 's'}
        </button>
        <button
            className="post-action"
            onClick={this.showComment}>
            <ChatBubbleOutline />
            {comments.length !== 0 && comments.length} {" "} comment{comments.length <= 1 ? '' : 's'}
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
                            {shares.length !== 0 && shares.length} {" "} share{shares.length <= 1 ? '' : 's'}
                    </button>
                )}
            </Reference>
            <Popper placement="bootom-end">
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
                                        <i className="fab fa-facebook-f"/>
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
      </>
    );
  }
}
