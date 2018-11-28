import React, { Component } from "react";
import "../../assets/css/pages.css";
import ProfileDetails from "../../components/profileDetails/profileDetails";
import Suggestions from "../../components/suggestions/suggestions";
import Trending from "../../components/trending/trending";
import SidebarFooter from "../../components/sidebar/sidebarFooter";
import MakePost from "../../components/makePost/makePost";
import MakeExecutivePost from "../../components/makePost/makeExecutivePost";
import SinglePost from "../../components/post/post";
import { Redirect } from "react-router-dom"
import axios from "axios";

class ProfilePage extends Component {

  state = { posts: [], userId: '' };
  componentDidMount() {
    let userId = this.props.match.params
    this.setState({
      userId
    })
    this.loadPosts();

    }

  loadNow = () => {

    this.loadPosts()

  };

  loadPosts() {

    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    const url = "http://api.gclout.com:3000/posts?user=" + id;
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


        const posts = res.data.reverse();

        this.setState({
          
          posts
        
        });

//        console.log(res.data.reverse());

      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return !this.props.isLoggedIn ? (
            <Redirect to="/login" />
        ) : (
      <div className="app-wrapper">
        <div className="container app-container mx-auto d-flex">
          <div className="col-md-9">
            <ProfileDetails userId={this.state.userId.id} user={this.props.user} />
            <div className="d-flex">
              <SidebarFooter />
              <div className="flex-1">
                {this.state.userId.id === 'executive' ? <MakeExecutivePost updatePosts={this.loadNow} /> : <MakePost updatePosts={this.loadNow} />}
                {this.state.posts.map(post => (
                  <SinglePost key={post.post.id.toString()} post={post} />
                ))}
                {/* <SinglePost postType="sponsored" />
                <SinglePost media /> */}
              </div>
            </div>
          </div>
          <div
            className="col-md-3 d-none d-md-block"
            style={{ padding: "0px" }}
          >
            <Suggestions />
            <Trending />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
