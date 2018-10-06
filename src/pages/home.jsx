import React, { Component } from "react";
import logo from "../logo.png";

class Home extends Component {
  render() {
    return (
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
