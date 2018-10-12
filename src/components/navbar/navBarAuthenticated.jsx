import React, { Component } from "react";
import "./navBar.css";

class NavBarAuthenticated extends Component {
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
      <div className="navigation --with-shadow">
        <nav className="container d-flex justify-content-between">
          <div className="d-flex">
            <a href="/" style={{ maxHeight: "70px" }}>
              <img
                src="../logo.png"
                alt="gclout logo"
                className="navigation-logo"
              />
            </a>
            <form className="searchContainer no-mobile" onSubmit={this.searchHandler}>
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
            <li className="navigation-menu-item no-mobile">
              <a href="/">Petition</a>
            </li>
            <li className="navigation-menu-item no-mobile">
              <a href="/">Opinion poll</a>
            </li>
            <li className="navigation-menu-item only-mobile">
              <button className="navigation-menu-item navigation-menu-icon">
                  <i className="fas fa-search searchIconNav" />
              </button>
            </li>
            <li className="navigation-menu-item">
              <button className="navigation-menu-item navigation-menu-icon" data-badge="2">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#333333"/>
                </svg>
              </button>
            </li>
            <li className="navigation-menu-item">
              <button className="navigation-menu-item navigation-menu-icon" data-badge="9+">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.89 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z" fill="#333333"/>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBarAuthenticated;
