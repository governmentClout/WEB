import React, { Component } from "react";
import "../../assets/css/profile.css";
import { Redirect } from "react-router-dom";
import ProfileDetails from "../../components/profileDetails/profileDetails";
import Suggestions from "../../components/suggestions/suggestions";
import Trending from "../../components/trending/trending";

class ProfilePage extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return () => <Redirect to={"/login"} />;
    } else {
      return (
        <div className="app-wrapper">
          <div className="container app-container mx-auto d-flex">
            <div className="col-md-9">
              <ProfileDetails />
            </div>
            <div className="col-md-3" style={{ padding: "0px" }}>
              <Suggestions />
              <Trending />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProfilePage;
