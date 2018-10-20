import React, { Component } from "react";
import logo from "../assets/images/logo.png";

class Home extends Component {
  render() {
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

export default Home;
