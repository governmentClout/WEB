import React, { Component } from "react";
import "./notifications.css";

class Notifications extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.props.show
              ? "notifications-dropdown show"
              : "notifications-dropdown"
          }
        >
          <p className="notifications-dropdown-title">Notifications</p>
          <ul className="notifications">
            <li className="notification-item">
              <strong>Oreoluwa Ojo</strong> commented on your post.
            </li>
            <li className="notification-item">
              <strong>Oreoluwa Ojo</strong> commented on your post.
            </li>
            <li className="notification-item">
              <strong>Oreoluwa Ojo</strong> commented on your post.
            </li>
            <li className="notification-item">
              <strong>Oreoluwa Ojo</strong> commented on your post.
            </li>
          </ul>
          <div className="notification-dropdown-footer text-center">
            <a href="#">View more</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Notifications;
