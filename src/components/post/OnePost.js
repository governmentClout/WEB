import React, {Component} from 'react';
import {API_URL} from "../config";
import axios from 'axios';
import CommentInput from "../comments/commentInput";
import "./post.css";
import PropTypes from "prop-types";

class OnePost extends Component {

    constructor(props) {
        super(props);

        this.state = {

            post: '',
            postId: '',
            photo: '',
            loading: false,
            firstName: '',
            lastName: '',
            showComment: false,
            likes: '',
            comments: '',
            uuid: '',
            icon: '',
            comment: "",
            ref: "",
            reactionid: ''

        };

        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);

    };

    likePost = (id) => {
        const uuid = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");
            
        const pid = id;

        const data = {

            post: pid

        };
        const url = `${API_URL}/reactions/` +id;
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

        })/*.then(res => {
            this.showLikesCount();
        })*/

        /*const likes = this.state;

        const newLikes = res.data[0].reactions*/

    };

    registerShare(){
        const pid = this.state.postId;
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

    displayLike(){

        const authid = sessionStorage.getItem('uuid');
        const token = sessionStorage.getItem('token');
        const user = this.state.uuid;
        const pid = this.state.postId;
        const url = `${API_URL}/reactions/${pid}`;
        const data = {
            post: this.state.postId
        };
        console.log(data);
        console.log(pid);
        console.log(url);
        /*const reactid = this.state.*/
        console.log(authid);
        console.log(user);
        console.log(token);
        if(authid !== user){
            console.log('you never like am')
            //like it here
            axios({
                method: 'post',
                url: url,
                data: data,
                mode: 'no-cors',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    token: token,
                    uuid: authid
                }
            }).then(res => {
                console.log(res.data);
            })
        } else {
        
            const headers =  {
                
                'crossDomain': true,
                token: token,
                uuid: user
    
            };

            axios.delete(`${API_URL}/reactions/${this.state.reactionid}`, {headers})
            .then(res => {
                console.log(res.data);
            })
        }

        /*if(this.state.uuid === ){
            axios.delete(`http://api.gclout.com:3000/reactions/${this.state.postId}`).then(res => {console.log(res.data)});
        }*/

    }

    static propTypes = {
        postType: PropTypes.string,
        media: PropTypes.bool
    };
    static defaultProps = {
        postType: "simple-post",
        media: false
    };
    showComment = () => {

        const currentState = this.state.showComment;

        this.setState({

            showComment: !currentState

        })

    };

    componentWillMount() {

        this.showLikesCount();
        /*this.showCommentsCount();*/

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
            this.setState({
                likes: res.data[0].reactions
            })
        })
    }



    componentDidMount() {

        this.fetchPost();
        this.registerView()
    
    }

    registerView(){

        const {id} = this.props.match.params;
        const url = `${API_URL}/views/${id}`;

        const data = {
            "post": id
        };


        axios({

            method: "post",
            url: url,
            data: data,
            headers: {

                token: sessionStorage.getItem('token'),
                uuid: sessionStorage.getItem('uuid')

            }

        }).then(res => {
            console.log(res.data);
        })

    }

    fetchPost(){
        const { id } = this.props.match.params;
        const pid = this.props.pid;
        console.log(pid);
        const url = `${API_URL}/posts/${id}`;
        //alert(url)
        this.setState({
            loading: true

        });

        axios({

            method: 'get',
            url: url,
            headers: {
                token: sessionStorage.getItem('token'),
                uuid: sessionStorage.getItem('uuid')
            }

        }).then(res => {
            console.log(res.data);
            console.log(res.data[0].user[0].uuid);
            console.log(res.data[0].reactions.length);
            console.log(res.data[0].reactions[0].uuid);
            this.setState({
                loading: false,
                post: res.data[0].post.post,
                photo: res.data[0].user[0].photo,
                firstName: res.data[0].user[0].firstName,
                lastName: res.data[0].user[0].lastName,
                postId: res.data[0].post.uuid,
                likes: res.data[0].reactions.length,
                comments: res.data[0].comments.length,
                uuid: res.data[0].post.user
                /*comments: res.data[0].co.uuid*/
            })
        })
    }

    onKeyPress = (e) => {

        if(e.which === 13) {

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

                this.setState({

                    comment: '',

                });


            })
        }
    };

    onChange(ev){
        this.setState({

            [ev.target.name]: ev.target.value

        })
    }

    render() {
        const { post, likes, photo, uuid, postId, loading, firstName, lastName, comments } = this.state;

        if(loading){
            return <i className="fas fa-spinner"></i>
        }
        /*const { post, user, reaction } = this.state;
        console.log(post);
        console.log(user);
        console.log(reaction);*/
        //console.log(post);

        return (
            <div style={{ marginBottom: "1em"}}>
                <div className="post-container">
                    <div className="post-owner">
                        <div className="post-owner-image-wrapper">
                            <img
                                src={photo}
                                alt="lol"
                                className="post-owner-image"
                            />
                        </div>

                        <div className="post-owner-details">
                            <p>{firstName + " " + lastName}</p>
                            {this.props.postType === "sponsored" ? (
                                <p className="post-type">Sponsored</p>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="post-content">
                        <p>{post}</p>
                    </div>
                </div>
                {this.props.postType !== "sponsored" ? (
                    <>
                        {" "}
                        {/*<PostActions showComment={this.showComment} postID={postId} />*/}
                        <div className="post-actions-container">
                            <button className="post-action"
                                    /*onClick={(id) => this.likePost(postId)}*/
                                    onClick={() => this.displayLike()}
                            >
                                {/*<i className="far fa-thumbs-up" onLoad={this.showLikesCount.bind(this, postId)}/>*/}
                                {/*<i className="far fa-thumbs-up"/>*/}

                                {likes}  like{likes === 1 ? '' : 's'}
                            </button>
                            <button className="post-action" onClick={() => this.registerShare(postId)}>
                                {" "}
                                <i className="far fa-comment"/> {comments} comment{comments === 1 ? '' : 's'}
                            </button>
                            <button className="post-action" onClick={() => this.registerShare(postId)}>
                                {" "}
                                <i className="fas fa-share" /><a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.dev.gclout.com/activity/${postId}`}>Fcaebook</a>
                            </button>
                                <button className="post-action" onClick={() => this.registerShare(postId)}>
                                <i className="fas fa-share"/><a target="_blank" className="twitter-share-button"
                                   href={`https://twitter.com/intent/tweet?text=${post}&url=https://www.dev.gclout.com/activity/${postId}`}>
                                    Tweet</a>
                                </button>
                                {/*<i className="fas fa-share" /><a href={`https://twitter.com/intent/tweet?text=${post}&url=http://www.dev.gclout.com/activity/${parameter?parameter:''}`}>Twitter</a>*/}
                                <button onClick={() => this.registerShare(postId)} className="post-action">
                                <i className="fas fa-share"/><a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.dev.gclout.com/activity/${postId}&title=${post}`}>Linkedin</a>
                                {/*<i className="fas fa-share" /><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.dev.gclout.com/activity">Share</a>*/}
                            </button>
                        </div>

                        <CommentInput onClick={() => console.log(postId)} postID={postId} show={this.state.showComment}/>
                        {" "}
                    </>
                ) : (
                    ""
                )}
            </div>

        );
    }
}

export default OnePost;
