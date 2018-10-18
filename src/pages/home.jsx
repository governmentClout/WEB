import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to={"/login"} />;
    } else {
      return (
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Click on get started to start</p>
            </header>
          </div>
        </div>
      );
    }
  }
}

export default Home;
