import React, { Component } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

export default class NavBarMobile extends Component {
  render() {
    return (
      <div className="navigation mobile">
        <div className="mobile-navigation-top">
          <a href="/" style={{ maxHeight: "60px" }}>
            <img
              src="../logo.png"
              alt="gclout logo"
              className="navigation-logo"
            />
          </a>
          <ul className="mobile-navigation-top__right">
            <li className="navigation-menu-item centered">
              <button className="navigation-menu-item navigation-menu-icon">
                <i className="fas fa-search searchIconNav" />
              </button>
            </li>
            <li className="navigation-menu-item">
              <a href="/profile">
                <button className=" image-wrapper">
                  <img
                    className="navbar-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                    alt="profile"
                  />
                </button>
              </a>
            </li>
          </ul>
        </div>
        <nav>
          <ul className="mobile-navigation-menu d-flex justify-content-around">
            <li className="mobile-navigation-menu-item">
              <Link to="/activity">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM6 14H4V12H6V14ZM6 10H4V8H6V10ZM6 6H4V4H6V6ZM14 14H7V12H14V14ZM14 10H7V8H14V10ZM14 6H7V4H14V6Z"
                    fill="#333333"
                  />
                </svg>
              </Link>
            </li>
            <li className="mobile-navigation-menu-item">
              <Link to="polls">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 7.2L10 14L6 10L2 14V11L6 7L10 11L16 4.2V7.2Z"
                    fill="#333333"
                  />
                </svg>
              </Link>
            </li>
            <li className="mobile-navigation-menu-item">
              <a href="/notifications">
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
              </a>
            </li>
            <li className="mobile-navigation-menu-item">
              <a href="/messages">
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
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
