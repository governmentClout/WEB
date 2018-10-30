import React, { Component } from "react";
import "./sidebar.css";
import SidebarFooter from "./sidebarFooter";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar  d-none d-md-block">
        <div className="sidebar-top">
          <div className="sidebar-cover-image-wrapper">
            <img
              className="sidebar-cover-image"
              src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363181/gclout/Rectangle_2.1.png"
              alt="cover"
            />
          </div>
          <div className="sidebar-section --lift-up">
            <div className="sidebar-profile-image-wrapper">
              <img
                className="sidebar-profile-image"
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                alt="profile"
              />
            </div>
            <h5 className="text-center">James Adewale</h5>
            <div className="d-flex justify-content-between friends-details">
              <div className="text-center col-6">
                <p>Following</p>
                <h5 className="text-gclout-blue">300</h5>
              </div>
              <div className="text-center col-6">
                <p>Friends</p>
                <h5 className="text-gclout-blue">300</h5>
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
                      alt="friend profile"
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
                      alt="friend profile2"
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
                      alt="friend profile3"
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
                      alt="friend profile4"
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
                      alt="friend profile5"
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
                      alt="friend profile6"
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
                      alt="friend profile7"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>State rep</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SidebarFooter />
      </div>
    );
  }
}

export default Sidebar;
