import React, { Component } from "react";
import "../assets/css/pages.css";
import Suggestions from "../components/suggestions/suggestions";
import Trending from "../components/trending/trending";
import Countdown from "../components/countdown";
import Footer from "../components/footer/footer";
import { AuthConsumer } from "../components/authcontext";
import NavBarMobile from "../components/navbar/navBarMobile";
import NavBarAuthenticated from "../components/navbar/navBarAuthenticated";
import axios from "axios";
import LoadingPost from "../components/loaders/posts";
import PostActions from "../components/post/postActions";
import CommentInput from "../components/comments/commentInput";

class SinglePostPage extends Component {
  state = {
    post: '',
    error: null,
    loading: true
  }
  componentDidMount() {
    let postId = this.props.match.params.id;

    let id = sessionStorage.getItem("uuid");
    const token = sessionStorage.getItem("token");
    const url = `http://api.gclout.com:3000/posts/${postId}`;

    axios({
      method: "GET",
      url: url,
      headers: {
        uuid: id,
        token: token
      }
    }).then(res => {
      this.setState({
        post: res.data.posts[0].post,
        loading: false,
        comments: res.data.posts[0].comments,
        shares: res.data.posts[0].shares,
        reactions: res.data.posts[0].reactions,
        user: res.data.posts[0].user[0]
      })
    }).catch(err => this.setState({
      error: 'lol'
    }));
  }
  render() {
    return (
      <>
        <AuthConsumer>
          {({ logout }) => (
            <>
              <NavBarAuthenticated logout={logout} />
              <NavBarMobile logout={logout} />
            </>
          )}
        </AuthConsumer>
        <div className="app-wrapper">
          <div className="container app-container mx-auto d-flex">
            <div className="col-md-9">
              <div className="d-flex">
                <div className="sidebar" style={{ width: "250px" }} />
                <div className="flex-1">
                {this.state.loading ? <LoadingPost /> : (
                  <>
                  <div className="post-container">
                    <div className="post-owner">
                      <div className="post-owner-image-wrapper">
                        {this.state.user ? (
                          <img
                            src={this.state.user.photo}
                            alt="lol"
                            className="post-owner-image"
                          />) : (
                            <p>lol</p>
                          )}
                      </div>

                      <div className="post-owner-details">
                        <p>{this.state.user ? this.state.user.firstName + " " + this.state.user.lastName : 'undefined'}</p>
                        {this.state.postType === "sponsored" ? (
                          <p className="post-type">Sponsored</p>
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                    <div className="post-content">
                      <p>{this.state.post.post}</p>
                    </div>
                  </div>
                    <PostActions
                      showComment={this.showComment}
                      comments={this.state.comments}
                      postID={this.state.post.uuid}
                      reactions={this.state.reactions}
                      shares={this.state.shares}
                    />

                <CommentInput
                  postID={this.state.post.uuid}
                  comments={this.state.comments}
                  show={true} />
                  </>

                )}
                </div>
              </div>
            </div>
            <div
              className="col-md-3 d-none d-md-block"
              style={{ padding: "0px" }}
            >
              <Countdown />
              <Suggestions />
              <Trending />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SinglePostPage;
