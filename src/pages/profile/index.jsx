import React, { Component } from "react";
import "../../assets/css/pages.css";
import ProfileDetails from "../../components/profileDetails/profileDetails";
import Suggestions from "../../components/suggestions/suggestions";
import Trending from "../../components/trending/trending";
import SidebarFooter from "../../components/sidebar/sidebarFooter";
import MakePost from "../../components/makePost/makePost";
import SinglePost from "../../components/post/post";
import axios from "axios";

class ProfilePage extends Component {
  state = { posts: [] };
  componentDidUpdate() {
    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    console.log(id, token);
    const url = "http://api.gclout.com:3000/posts?user=" + id;

    console.log(url);

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
        const posts = res.data.posts.map(post => post).reverse();
        console.log(posts);

        this.setState({
          posts
        });

        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="app-wrapper">
        <div className="container app-container mx-auto d-flex">
          <div className="col-md-9">
            <ProfileDetails user={this.props.user} />
            <div className="d-flex">
              <SidebarFooter />
              <div className="flex-1">
                <MakePost />
                {this.state.posts.map(post => (
                  <SinglePost post={post} />
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
