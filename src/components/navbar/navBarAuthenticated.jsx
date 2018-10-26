import React, { Component } from "react";
import { Manager, Reference, Popper } from "react-popper";
import Notifications from "../notifications/notifications";
import "./navBar.css";
import { Link } from "react-router-dom";

class NavBarAuthenticated extends Component {
  constructor(props) {
    super(props);
    this.state = { showNotifications: false, showProfile: false };
    this.showNotifications = this.showNotifications.bind(this);
    this.showProfile = this.showProfile.bind(this);
  }

  searchHandler(e) {
    e.preventDefault();
  }
  showNotifications() {
    let currentState = this.state.showNotifications;
    this.setState({ showNotifications: !currentState });
  }
  showProfile() {
    let currentState = this.state.showProfile;
    this.setState({ showProfile: !currentState })
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
            <form
              className="searchContainer no-mobile"
              onSubmit={this.searchHandler}
            >
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
              <button
                className="navigation-menu-item navigation-menu-icon"
                data-badge="2"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                    fill="#333333"
                  />
                </svg>
              </button>
            </li>
            <li className="navigation-menu-item">
              <Manager>
                <Reference>
                  {({ ref }) => (
                    <button
                      className="navigation-menu-item navigation-menu-icon"
                      data-badge="9+"
                      onClick={this.showNotifications}
                      ref={ref}
                    >
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.89 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z"
                          fill="#333333"
                        />
                      </svg>
                    </button>
                  )}
                </Reference>
                <Popper placement="bottom">
                  {({ ref, style, placement, arrowProps }) => (
                    <div ref={ref} style={style} data-placement={placement}>
                      <Notifications show={this.state.showNotifications} />
                      <div ref={arrowProps.ref} style={arrowProps.style} />
                    </div>
                  )}
                </Popper>
              </Manager>
            </li>
            <li className="navigation-menu-item">
              <Manager>
                <Reference>
                  {({ ref }) => (
                    <button
                      type="button"
                      ref={ref}
                      onClick={this.showProfile}
                      className="btn-profile-dropdown dropdown-toggle"
                    >
                      <div className="navigation-profile-wrapper">
                        <img
                          className="navbar-profile-image"
                          src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                          alt="profile"
                        />
                      </div>
                    </button>
                  )}
                </Reference>
                <Popper placement="bottom">
                  {({ ref, style, placement, arrowProps }) => (
                    <div ref={ref} style={style} data-placement={placement}>
                      <div
                        className={
                          this.state.showProfile
                            ? "profile-dropdown show"
                            : "profile-dropdown"
                          }
                        >
                        <ul className="profile-dropdown-list">
                          <li className="profile-dropdown-list-item">
                            <Link to="/profile">Profile</Link>
                          </li>
                          <li className="profile-dropdown-list-item">
                            <a href="#">Settings</a>
                          </li>
                          <li className="profile-dropdown-list-item">
                            <button
                              className="profile-dropdown-button"
                              onClick={this.props.logout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div ref={arrowProps.ref} style={arrowProps.style} />
                    </div>
                  )}
                </Popper>
              </Manager>
            </li>
          </ul>
        </nav>
        </div> 
    );
  }
}
export default NavBarAuthenticated;
