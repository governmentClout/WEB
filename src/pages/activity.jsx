import React, { Component } from "react";
import "../assets/css/pages.css";
import Suggestions from "../components/suggestions/suggestions";
import Trending from "../components/trending/trending";
import Sidebar from "../components/sidebar/sidebar";
import MakePost from "../components/makePost/makePost";
// import SinglePost from "../components/post/post";
import { Redirect } from "react-router-dom"

class ActivityPage extends Component {
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
                <MakePost />
                <strong>this does not work yet</strong>
                {/* <SinglePost />
                <SinglePost postType="sponsored" />
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

export default ActivityPage;
