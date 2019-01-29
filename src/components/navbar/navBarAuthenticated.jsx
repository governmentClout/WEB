import React, { Component } from "react";
import { Manager, Reference, Popper } from "react-popper";
import NotificationsBar from "../notifications/notifications";
import NavMessages from "../navMessages/navMessages";
import "./navBar.css";
import { Link, withRouter } from "react-router-dom";
import Mail from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";

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
    f().then(this.props.history.push('/'));
  }

  render() {
    return (
      <div className="navigation --with-shadow  no-mobile">
        <nav className="container d-flex justify-content-between">
          <div className="d-flex">
            <Link to="/" style={{ maxHeight: "30px" }}>
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
                placeholder="Search"
              />
              <span className="searchIconContainer">
                <i className="fas fa-search searchIcon" />
              </span>
            </form>
          </div>
          <ul className="navigation-menu">
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
                    <Mail />
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
                      <Notifications />
                    </button>
                  )}
                </Reference>
                <Popper placement="bottom">
                  {({ ref, style, placement, arrowProps }) => (
                    <div ref={ref} style={style} data-placement={placement}>
                      <NotificationsBar close={this.closeAll} show={this.state.showNotifications} />
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
