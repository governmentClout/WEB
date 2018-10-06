import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {
  state = {};

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;

    return (
      <div className="navigation">
        <div className="container d-flex justify-content-between">
          <div className="d-flex">
            <a href="/" style={{ maxHeight: "70px" }}>
              <img
                src="../logo.png"
                alt="gclout logo"
                className="navigation-logo"
              />
            </a>
            <div className="searchContainer">
              <i className="fas fa-search searchIcon" />
              <input
                className="searchBox"
                type="search"
                placeholder="Type in to search..."
              />
            </div>
          </div>
          <ul className="navigation-menu">
            <li className="navigation-menu-item">
              <a href="/">About us</a>
            </li>
            <li className="navigation-menu-item">
              <a href="/">Petition</a>
            </li>
            <li className="navigation-menu-item">
              <a href="/">Opinion poll</a>
            </li>
            <li className="navigation-menu-item">
              <a href="/register" className="btn navigation-menu-button">
                GET STARTED
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default NavBar;
