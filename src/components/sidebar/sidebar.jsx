import React, { Component } from "react";
import "./sidebar.css";
import SidebarFooter from "./sidebarFooter";
import { Link } from"react-router-dom";
import axios from 'axios';

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {

            profile: [],
            friends: []

        };
    }

    componentDidMount() {

      this.getFriends();

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

    getFriends() {

      axios({

        method: 'get',
        url: `http://api.gclout.com:3000/friends`,
        headers: {

          token: sessionStorage.getItem('token'),
          uuid: sessionStorage.getItem('uuid')

        }

      }).then(res => {

        this.setState({

          friends: res.data.friends.length

        })

      })

    }


    render() {

      const { friends } = this.state;

      const { profile } = this.state;

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
                src={profile.photo}
                alt="profile"
              />
            </div>
              <Link to="/profile">
                <h5 className="text-center"><strong>{profile.firstName} </strong> <strong> {profile.lastName}</strong></h5>
              </Link>
              <div className="row d-flex justify-content-between friends-details text-gclout-blue">
                <div className="text-center col-4 px-0">
                  <p><strong>Clouts</strong></p>
                  <h5><strong>300</strong></h5>
                </div>
                <div className="text-center col-4  px-0">
                  <p><strong>Leaders</strong></p>
                  <h5><strong>37</strong></h5>
                </div>
                <div className="text-center col-4  px-0">
                  <Link to="/friends">
                    <p className="text-gclout-blue"><strong>Friends</strong></p>
                  </Link>
                  <h5><strong>{friends}</strong></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-section mb-3">
            <h5><strong>Political Office Holders</strong></h5>
            <div className="sidebar-politician">
              <Link to="profile/executive">
                <div className="sidebar-politician-wrapper">
                  <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="Sidebar politician" className="sidebar-politician-image"/>
                </div>
                <div className="politician-details">
                  <p>Marks Weber</p>
                  <p className="text-muted">President</p>
                </div>
              </Link>
              <Link to="profile/executive">
                <div className="sidebar-politician-wrapper">
                  <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="Sidebar politician" className="sidebar-politician-image" />
                </div>
                <div className="politician-details">
                  <p>Marks Weber</p>
                  <p className="text-muted">Governor</p>
                </div>
              </Link>
              <Link to="profile/executive">
                <div className="sidebar-politician-wrapper">
                  <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="Sidebar politician" className="sidebar-politician-image"/>
                </div>
                <div className="politician-details">
                  <p>Marks Weber</p>
                  <p className="text-muted">Senator</p>
                </div>
              </Link>
              <Link to="profile/executive">
                <div className="sidebar-politician-wrapper">
                  <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="Sidebar politician" className="sidebar-politician-image" />
                </div>
                <div className="politician-details">
                  <p>Marks Weber</p>
                  <p className="text-muted">Federal Rep</p>
                </div>
              </Link>
              <Link to="profile/executive">
                <div className="sidebar-politician-wrapper">
                  <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="Sidebar politician" className="sidebar-politician-image" />
                </div>
                <div className="politician-details">
                  <p>Marks Weber</p>
                  <p className="text-muted">State Rep</p>
                </div>
              </Link>
              <Link to="profile/executive">
                <div className="sidebar-politician-wrapper">
                  <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="Sidebar politician" className="sidebar-politician-image"/>
                </div>
                <div className="politician-details">
                  <p>Marks Weber</p>
                  <p className="text-muted">Council Chairman</p>
                </div>
              </Link>
              <Link to="profile/executive">
                <div className="sidebar-politician-wrapper">
                  <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="Sidebar politician" className="sidebar-politician-image" />
                </div>
                <div className="politician-details">
                  <p>Marks Weber</p>
                  <p className="text-muted">Counsil</p>
                </div>
              </Link>
            </div>
          </div>
        <SidebarFooter />
      </div>
    );
  }
}

export default Sidebar;
