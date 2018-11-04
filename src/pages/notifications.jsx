import React, { Component } from "react";
import "../assets/css/pages.css";
import Suggestions from "../components/suggestions/suggestions";
import Trending from "../components/trending/trending";

class NotificationsPage extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="container app-container mx-auto d-flex">
          <div className="col-md-9">
            <div className="d-flex">
              <div className="sidebar" style={{ width: "250px" }} />
              <div className="flex-1">
                <div className="notifications-container">
                  <div className="notifications-page-header">
                    <h5 className="text-bold">Notifications</h5>
                  </div>
                  <Notification type="comment" />
                  <Notification type="share" />
                  <Notification type="comment" />
                  <Notification type="share" />
                  <Notification type="comment" />
                  <Notification type="share" />
                  <Notification type="comment" />
                  <Notification type="share" />
                  <Notification type="comment" />
                  <Notification type="share" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 d-none d-md-block"
            style={{ padding: "0px" }}
          >
            <Suggestions />
            <Trending />
          </div>
        </div>
      </div>
    );
  }
}

const Notification = props => (
 <div className="single-notification">
  <a className="single-notification-link" href="#">
    <div className="d-flex align-content-center">
      <div className="notification-owner-wrapper mr-3">
        <img className="notification-owner" src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="notifiction-owner" />
      </div>
      <p className="flex-1 mr-3">
        <strong>Michelle Heston</strong> {props.type === "comment" ? "commented on  your recent post" : "reshared a post:Vous êtes une société  Vous cherchez des jeunes passionnés par le domaine de la technologie? Rejoignez nous à DevFest " }  
      </p>
    </div>
    <span className="text-muted">12h</span>
  </a>
 </div>
)
export default NotificationsPage;
