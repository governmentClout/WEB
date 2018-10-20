import React, { Component } from "react";
import "./sidebar.css";

class SidebarFooter extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-footer">
          <p>
            &copy; {new Date().getFullYear()} GClout | All copyrights rights
            reserved
          </p>
          <p>
            <a href="#">Help &FAQ</a> | <a href="#">Terms Of Use</a> |{" "}
            <a href="#">Privacy Policy</a>
          </p>
          <p className="smaller-margin">
            <strong>Contact Us</strong>
          </p>
          <p className="smaller-margin">Email: gclout@gmail.com</p>
          <p className="smaller-margin">Phone: 080 3333 3333</p>
          <div className="advert-section">
            <p className="smaller-margin">
              <a href="#" className="advert-link">
                <span className="text-gclout-blue">
                  <i className="fas fa-external-link-alt" />
                </span>{" "}
                Advertise with GClout
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarFooter;
