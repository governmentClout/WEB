import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-cover-image-wrapper">
            <img
              className="sidebar-cover-image"
              src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363181/gclout/Rectangle_2.1.png"
              alt="cover image"
            />
          </div>
          <div className="sidebar-section --lift-up">
            <div className="sidebar-profile-image-wrapper">
              <img
                className="sidebar-profile-image"
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                alt="profile image"
              />
            </div>
            <h5 className="text-center">James Adewale</h5>
            <div className="d-flex sidebar-buttons justify-content-between">
              <button className="btn btn-gclout-blue-outline">
                Send Message
              </button>
              <button className="btn btn-gclout-blue">Friends</button>
            </div>
          </div>
          <div className="sidebar-section">
            <p className="text-gclout-blue">Contact Information</p>
            <p>Email Address</p>
            <p>jamesadewale@gmail.com</p>
            <br />
            <p>Phone Number</p>
            <p>+234 [0] 802 345 6789</p>
          </div>
          <div className="sidebar-section">
            <p className="text-gclout-blue">Other Information</p>
            <div className="d-flex">
              <div className="section-half">
                <p>Nationality</p>
                <p>Nigeria</p>
                <br />
                <p>L.G.A</p>
                <p>Ikeja</p>
              </div>
              <div className="section-half">
                <p>State</p>
                <p>Lagos State</p>
                <br />
                <p>Date of birth</p>
                <p>23/07/1990</p>
              </div>
            </div>
          </div>
          <div className="sidebar-section --no-border">
            <p className="text-gclout-blue">Political Office Holders</p>
            <div className="d-flex">
              <div className="section-half">
                <div className="text-center sidebar-politician">
                  <div className="politician-profile-image-wrapper">
                    <img
                      className="politician-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                      alt="friend profile image"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>President</small>
                </div>
                <div className="text-center sidebar-politician">
                  <div className="politician-profile-image-wrapper">
                    <img
                      className="politician-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                      alt="friend profile image"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Council chairman</small>
                </div>
                <div className="text-center sidebar-politician">
                  <div className="politician-profile-image-wrapper">
                    <img
                      className="politician-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                      alt="friend profile image"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Federal Rep</small>
                </div>
                <div className="text-center sidebar-politician">
                  <div className="politician-profile-image-wrapper">
                    <img
                      className="politician-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                      alt="friend profile image"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Councilor</small>
                </div>
              </div>
              <div className="section-half">
                <div className="text-center sidebar-politician">
                  <div className="politician-profile-image-wrapper">
                    <img
                      className="politician-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                      alt="friend profile image"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Governor</small>
                </div>
                <div className="text-center sidebar-politician">
                  <div className="politician-profile-image-wrapper">
                    <img
                      className="politician-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                      alt="friend profile image"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Senator</small>
                </div>
                <div className="text-center sidebar-politician">
                  <div className="politician-profile-image-wrapper">
                    <img
                      className="politician-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                      alt="friend profile image"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>State rep</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-footer">
          <p>&copy; {(new Date()).getFullYear()} GClout | All copyrights rights reserved</p>
          <p>
            <a href="#">Help &FAQ</a> | <a href="#">Terms Of Use</a> |{" "}
            <a href="#">Privacy Policy</a>
          </p>
          <p className="smaller-margin">
            <strong>Contact Us</strong>
          </p>
          <p  className="smaller-margin">Email: gclout@gmail.com</p>
          <p  className="smaller-margin">Phone: 080 3333 3333</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
