import React, { Component } from "react";
import { Manager, Reference, Popper } from "react-popper";
import Notifications from "../notifications/notifications";
import NavMessages from "../navMessages/navMessages";
import "./navBar.css";
import { Link, withRouter } from "react-router-dom";

class NavBarAuthenticated extends Component {
  constructor(props) {
    super(props);
    this.state = { showNotifications: false, showProfile: false, showMessages: false };
    this.showNotifications = this.showNotifications.bind(this);
    this.showMessages = this.showMessages.bind(this);
    this.showProfile = this.showProfile.bind(this);
  }

  searchHandler(e) {
    e.preventDefault();
  }
  showNotifications() {
    let currentState = this.state.showNotifications;
    this.setState({ showNotifications: !currentState, showProfile: false, showMessages: false });
  }
  showMessages() {
    let currentState = this.state.showMessages;
    this.setState({ showMessages: !currentState, showProfile: false, showNotifications: false });
  }
  showProfile() {
    let currentState = this.state.showProfile;
    this.setState({ showProfile: !currentState, showNotifications: false, showMessages: false });
  }
  closeAll = () => {
    this.setState({ showProfile: false, showNotifications: false, showMessages: false });
  }
  logout = () => {
    let that = this;
    async function f() {
      that.props.logout();
    }
    f().then(this.props.history.push('/activity'));
  }

  render() {
    return (
      <div className="navigation --with-shadow  no-mobile">
        <nav className="container d-flex justify-content-between">
          <div className="d-flex">
            <Link to="/activity" style={{ maxHeight: "70px" }}>
              <img
                src="../logo.png"
                alt="gclout logo"
                className="navigation-logo"
              />
            </Link>
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
            <li className="navigation-menu-item no-mobile" onClick={this.closeAll}>
              <Link to="/petition">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM6 14H4V12H6V14ZM6 10H4V8H6V10ZM6 6H4V4H6V6ZM14 14H7V12H14V14ZM14 10H7V8H14V10ZM14 6H7V4H14V6Z" fill="#4F4F4F"/>
                </svg>
                {"  "}Petition
              </Link>
            </li>
            <li className="navigation-menu-item no-mobile" onClick={this.closeAll}>
              <Link to="/polls">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 7.2L10 14L6 10L2 14V11L6 7L10 11L16 4.2V7.2Z" fill="#4F4F4F"/>
                </svg> {"  "}
                Polls
              </Link>
            </li>
            <li className="navigation-menu-item only-mobile">
              <button className="navigation-menu-item navigation-menu-icon">
                <i className="fas fa-search searchIconNav" />
              </button>
            </li>
            <li className="navigation-menu-item">
            <Manager>
                <Reference>
                  {({ ref }) => (
                    <button
                      className="navigation-menu-item navigation-menu-icon"
                      // data-badge="9+"
                      onClick={this.showMessages}
                      ref={ref}
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
                      {"  "}
                      Messages
                    </button>
                  )}
                </Reference>
                <Popper placement="bottom">
                  {({ ref, style, placement, arrowProps }) => (
                    <div ref={ref} style={style} data-placement={placement}>
                      <NavMessages close={this.closeAll} show={this.state.showMessages} />
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
                      className="navigation-menu-item navigation-menu-icon"
                      // data-badge="9+"
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
                      {"  "} Notifications
                    </button>
                  )}
                </Reference>
                <Popper placement="bottom">
                  {({ ref, style, placement, arrowProps }) => (
                    <div ref={ref} style={style} data-placement={placement}>
                      <Notifications close={this.closeAll} show={this.state.showNotifications} />
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
                          src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
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
                          <li
                            className="profile-dropdown-list-item"
                            onClick={this.showProfile}
                          >
                            <Link to="/profile">Profile</Link>
                          </li>
                          <li
                            className="profile-dropdown-list-item"
                            onClick={this.showProfile}
                          >
                            <button
                              className="profile-dropdown-button"
                              onClick={this.logout}
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
export default withRouter(NavBarAuthenticated);
