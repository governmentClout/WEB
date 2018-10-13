import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openNav = this.openNav.bind(this);
  }

  searchHandler(e) {
    e.preventDefault();
  }
  openNav() {
    const currentState = this.state.isOpen;
    this.setState({ isOpen: !currentState });
  }

  render() {
    return (
      <div className="navigation">
        <nav className="container d-flex justify-content-between">
          <div className="d-flex">
            <a href="/" style={{ maxHeight: "70px" }}>
              <img
                src="../logo.png"
                alt="gclout logo"
                className="navigation-logo"
              />
            </a>
            <form className="searchContainer" onSubmit={this.searchHandler}>
              <input
                className="searchBox"
                type="search"
                placeholder="Type in to search..."
              />
              <span className="searchIconContainer">
                <i className="fas fa-search searchIcon" />
              </span>
            </form>
          </div>
          <div
            className={
              this.state.isOpen ? "navigation-toggle open" : "navigation-toggle"
            }
            onClick={this.openNav}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
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
        </nav>
        <nav
          className={
            this.state.isOpen
              ? "navigation-menu-mobile open"
              : "navigation-menu-mobile"
          }
        >
          <ul>
            <li onClick={this.openNav} className="navigation-menu-item">
              <a href="/">About us</a>
            </li>
            <li onClick={this.openNav} className="navigation-menu-item">
              <a href="/">Petition</a>
            </li>
            <li onClick={this.openNav} className="navigation-menu-item">
              <a href="/">Opinion poll</a>
            </li>
            <li onClick={this.openNav} className="navigation-menu-item">
              <a href="/register" className="btn navigation-menu-button">
                GET STARTED
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
