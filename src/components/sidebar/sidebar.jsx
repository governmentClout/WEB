import React, { Component } from "react";
import "./sidebar.css";
import SidebarFooter from "./sidebarFooter";
import { Link } from"react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar  d-none d-md-block">
        <div className="sidebar-top">
          <div className="sidebar-cover-image-wrapper">
            <img
              className="sidebar-cover-image"
              src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540948129/background-pine-texture-82256_w2aimd.jpg"
              alt="cover"
            />
          </div>
          <div className="sidebar-section --lift-up">
            <div className="sidebar-profile-image-wrapper">
              <img
                className="sidebar-profile-image"
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                alt="profile"
              />
            </div>
            <Link to="/profile">
              <h5 className="text-center">James Adewale</h5>
            </Link>
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
                  <Link to="/profile/executive">
                    <div className="politician-profile-image-wrapper">
                      <img
                        className="politician-profile-image"
                        src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                        alt="friend profile"
                      />
                    </div>
                    <p>Marks Webber</p>
                    <small>President</small>
                  </Link>
                </div>
                <div className="text-center sidebar-politician">
                  <Link to="/profile/executive">
                    <div className="politician-profile-image-wrapper">
                      <img
                        className="politician-profile-image"
                        src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                        alt="friend profile"
                      />
                    </div>
                    <p>Marks Webber</p>
                    <small>Council Chairman</small>
                  </Link>
                </div>
                <div className="text-center sidebar-politician">
                  <Link to="/profile/executive">
                    <div className="politician-profile-image-wrapper">
                      <img
                        className="politician-profile-image"
                        src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                        alt="friend profile"
                      />
                    </div>
                    <p>Marks Webber</p>
                    <small>Federal Rep</small>
                  </Link>
                </div>
                <div className="text-center sidebar-politician">
                  <Link to="/profile/executive">
                    <div className="politician-profile-image-wrapper">
                      <img
                        className="politician-profile-image"
                        src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                        alt="friend profile"
                      />
                    </div>
                    <p>Marks Webber</p>
                    <small>Councilor</small>
                  </Link>
                </div>
              </div>
              <div className="section-half">
                <div className="text-center sidebar-politician">
                  <Link to="/profile/executive">
                    <div className="politician-profile-image-wrapper">
                      <img
                        className="politician-profile-image"
                        src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                        alt="friend profile"
                      />
                    </div>
                    <p>Marks Webber</p>
                    <small>Governor</small>
                  </Link>
                </div>
                <div className="text-center sidebar-politician">
                  <Link to="/profile/executive">
                    <div className="politician-profile-image-wrapper">
                      <img
                        className="politician-profile-image"
                        src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                        alt="friend profile"
                      />
                    </div>
                    <p>Marks Webber</p>
                    <small>Senator</small>
                  </Link>
                </div>
                <div className="text-center sidebar-politician">
                  <Link to="/profile/executive">
                    <div className="politician-profile-image-wrapper">
                      <img
                        className="politician-profile-image"
                        src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                        alt="friend profile"
                      />
                    </div>
                    <p>Marks Webber</p>
                    <small>State Rep</small>
                  </Link>
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
