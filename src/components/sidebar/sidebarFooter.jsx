import React, { Component } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

class SidebarFooter extends Component {
  render() {
    return (
      <div className="sidebar  d-none d-md-block">
        <div className="sidebar-footer">
          <p>
            &copy; {new Date().getFullYear()} GClout | All copyrights rights
            reserved
          </p>
          <p>
            <Link to="/faq">Help &FAQ</Link> | <Link to="/terms">Terms Of Use</Link> |{" "}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
          <p className="smaller-margin">
            <strong>Contact Us</strong>
          </p>
          <p className="smaller-margin">Email: gclout@gmail.com</p>
          <p className="smaller-margin">Phone: 080 3333 3333</p>
          <div className="advert-section">
            <p className="smaller-margin">
              <Link to="/advert" className="advert-link">
                <span className="text-gclout-blue">
                  <i className="fas fa-external-link-alt" />
                </span>{" "}
                Advertise with GClout
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarFooter;
