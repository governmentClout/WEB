import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import Footer from "../../components/footer/footer"

class EditProfile extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit your famn profile</p>
        </header>
        <Footer />
      </div>
    );
  }
}

export default EditProfile;
