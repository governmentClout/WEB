import React, { Component } from "react";
import "../assets/css/pages.css";
import Suggestions from "../components/suggestions/suggestions";
import Trending from "../components/trending/trending";
import {  Link } from "react-router-dom"
import Footer from "../components/footer/footer";
import { AuthConsumer } from "../components/authcontext";
import NavBarMobile from "../components/navbar/navBarMobile";
import NavBarAuthenticated from "../components/navbar/navBarAuthenticated";

class NotificationsPage extends Component {
  render() {
    return (
      <>
        <AuthConsumer>
          {({ logout }) => (
            <>
              <NavBarAuthenticated logout={logout} />
              <NavBarMobile logout={logout} />
            </>
          )}
        </AuthConsumer>
        <div className="app-wrapper">
          <div className="container app-container mx-auto d-flex">
            <div className="page-70">
              <div className="d-flex">
                <div className="sidebar" style={{ width: "250px" }} />
                <div className="flex-1">
                  <div className="notifications-container">
                    <div className="notifications-page-header">
                      <h5 className="text-bold"><strong>Notifications</strong></h5>
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
              className="page-30 d-none d-md-block"
              style={{ padding: "0px" }}
            >
              <Suggestions />
              <Trending />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const Notification = props => (
 <div className="single-notification">
  <Link className="single-notification-link" to="#">
    <div className="d-flex align-content-center">
      <div className="notification-owner-wrapper mr-3">
        <img className="notification-owner" src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="notifiction-owner" />
      </div>
      <p className="flex-1 mr-3">
        <strong>Michelle Heston</strong> {props.type === "comment" ? "commented on  your recent post" : "reshared a post:Vous êtes une société  Vous cherchez des jeunes passionnés par le domaine de la technologie? Rejoignez nous à DevFest " }  
      </p>
    </div>
  </Link>
  <span className="text-muted">12h</span>
 </div>
)
export default NotificationsPage;
