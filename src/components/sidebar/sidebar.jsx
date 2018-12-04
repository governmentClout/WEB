import React, { Component } from "react";
import "./sidebar.css";
import SidebarFooter from "./sidebarFooter";
import { Link } from"react-router-dom";
import axios from 'axios';

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profile: []
        }
    }

    componentWillMount() {

        const id =  sessionStorage.getItem("uuid");
        const token  = sessionStorage.getItem("token");

        if(this.state.profile !== []) {

            //   id = sessionStorage.getItem("uuid"),
            //   token = sessionStorage.getItem("token");
            const url = `http://api.gclout.com:3000/profiles/${id}`;

            axios({
                method: "GET",
                url: url,
                headers: {
                    uuid: id,
                    token: token
                }
            }).then(res => {

                this.setState({
                    profile: res.data.profile[0],
                    loading: false
                });
            });
        }

    }


    render() {

      const { profile } = this.state;
      console.log(profile);
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
              <h5 className="text-center">{profile.firstName} {profile.lastName}</h5>
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
