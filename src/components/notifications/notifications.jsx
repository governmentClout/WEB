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
            <div className="notification-image-wrapper">
              <img className="notification-image" src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="lol" />
            </div>
             <p> <strong>Oreoluwa Ojo</strong> commented on your post. </p>
            </li>
            <li className="notification-item">
            <div className="notification-image-wrapper">
              <img className="notification-image" src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="lol" />
            </div>
             <p> <strong>Oreoluwa Ojo</strong> commented on your post. </p>
            </li>
            <li className="notification-item">
            <div className="notification-image-wrapper">
              <img className="notification-image" src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="lol" />
            </div>
             <p> <strong>Oreoluwa Ojo</strong> commented on your post. </p>
            </li>
            <li className="notification-item">
            <div className="notification-image-wrapper">
              <img className="notification-image" src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="lol" />
            </div>
             <p> <strong>Oreoluwa Ojo</strong> commented on your post. </p>
            </li>
          </ul>
          <div className="notification-dropdown-footer text-center">
            <a href="/notifications">View more</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Notifications;
