import React, { Component } from "react";
import "../assets/css/pages.css";
import Suggestions from "../components/suggestions/suggestions";
import Trending from "../components/trending/trending";
import Sidebar from "../components/sidebar/sidebar";
import MakePost from "../components/makePost/makePost";
import { Redirect } from "react-router-dom"
import SinglePost from "../components/post/post";
import axios from "axios";
import LoadingPost from "../components/loaders/posts";
import MakeExecutivePost from "../components/makePost/makeExecutivePost";
import Countdown from "../components/countdown";

class ActivityPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          posts: [],
            userId: '',
            loading: true,
            days: 0
        }
    }

    componentDidMount() {
        let userId = this.props.match.params;
        this.setState({
            userId,
        })
    }

    componentWillMount() {
        this.loadPosts();

    }


    loadNow = () => {

        this.loadPosts()

    };

    loadPosts() {

        const id = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        const url = "http://api.gclout.com:3000/posts";
        const header = {

            token: token,
            uuid: id

        };
        console.log(header);

        axios({

            method: "get",
            url: url,
            headers: header
        })
            .then(res => {

                // for(let i = 0; i < res.data.length ; i++){

//               //console.log(res.data[i].post);  //for the post object
//              // console.log(res.data[i].post.post);  //for the post content
//               //console.log(res.data[i].comments);  //for the comments object
//
// /*}

console.log(res.data);
                const posts = res.data.reverse();

                this.setState({

                    posts,
                    loading: false

                });

//        console.log(res.data.reverse());

            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
    return!this.props.isLoggedIn ? (
            <Redirect to="/login" />
        ) : (
      <div className="app-wrapper">
        <div className="container app-container mx-auto d-flex">
          <div className="col-md-9">
            <div className="d-flex">
              <Sidebar />
              <div className="flex-1">
                  {this.state.userId.id === 'executive' ? <MakeExecutivePost updatePosts={this.loadNow} /> : <MakePost updatePosts={this.loadNow} />}
                {this.state.loading ?  <>
                    <LoadingPost />
                    <LoadingPost />
                    <LoadingPost />
                    </> : 
                    (this.state.posts.map(post => <SinglePost key={post.post.id.toString()} post={post} />))
                }
                  {/*<SinglePost postType="sponsored" />
                <SinglePost media /> */}
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
    );
  }
}

export default ActivityPage;
