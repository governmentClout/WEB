import React, { Component } from "react";
import NavBarAuthenticated from "../../components/navbar/navBarAuthenticated";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";

class EditProfile extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <NavBarAuthenticated />
        <div className="container app-container">
          <h4>My Profile</h4>
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default EditProfile;
