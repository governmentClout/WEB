import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    return !this.props.isLoggedIn ? (
      <Redirect to="/login" />
    ) : (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Click on get started to start</p>
        </header>
      </div>
    );
  }
}

export default Home;
