import React, { Component } from "react";
import "./profileDetails.css";
import Modal from "../modal/modal";
import ProfileEdit from "../profileEdit/profileEdit";
import axios from "axios";
import { Link } from "react-router-dom";

const moment = require("moment");

class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      myProfile: {},
      myDetails: {}
    };
  }
  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  componentDidMount() {
    const uuid = sessionStorage.getItem("uuid");
    axios({
      method: "get",
      url: `http://api.gclout.com:3000/profiles/${uuid}`,
      headers: {
        uuid: sessionStorage.getItem("uuid"),
        token: sessionStorage.getItem("token")
      }
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          myProfile: response.data.profile[0]
          // myDetails: this.props.user
        });
      })
      .catch(err => this.setState({ redirect: true }));
  }
  render() {
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <div className="profile-details-container">
          <div className="profile-cover-image-wrapper">
            <img
              className="profile-cover-image"
              src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540948129/background-pine-texture-82256_w2aimd.jpg"
              alt="cover"
            />
          </div>
          <div className="container real-details-container">
            <div className="d-flex">
              <div className="col-6">
                <div
                  className="lifted-profile-image-wrapper"
                  style={{ marginTop: "-80px" }}
                >
                  <img
                    className="lifted-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="profile7"
                  />
                </div>
              </div>
              <div className="top-details d-flex justify-content-end col-6">
                <button
                  className="btn btn-gclout-blue-outline align-self-center"
                  onClick={() => this.handleToggleModal()}
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {showModal && (
              <Modal onCloseRequest={() => this.handleToggleModal()}>
                <ProfileEdit />
              </Modal>
            )}
            <div className="main-details d-md-flex justify-content-btween">
              <div className="col-md-4 dashed-border-right details-column">
                <h5 className="text-center">
                  {this.state.myProfile.firstName}{" "}
                  {this.state.myProfile.lastName}
                </h5>
                <div className="d-flex justify-content-between friends-details">
                  <div className="text-center col-6">
                    <p>Following</p>
                    <h5 className="text-gclout-blue">300</h5>
                  </div>
                  <Link
                    to="/friends"
                    className="profile-link text-center col-6"
                  >
                    <p>Friends</p>
                    <h5 className="text-gclout-blue">300</h5>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 dashed-border-right details-column mx-auto">
                <p className="text-gclout-blue">Contact Information</p>
                <p className="slightly-bold">Email Address</p>
                <p>{this.props.user.email}</p>
                <br />
                <p className="slightly-bold">Phone Number</p>
                <p>{this.props.user.phone}</p>
              </div>
              <div className="col-md-4 details-column">
                <p className="text-gclout-blue">Other Information</p>
                <div className="d-flex justify-content-between">
                  <div className="col-6">
                    <p className="slightly-bold">Nationality</p>
                    <p>{this.state.myProfile.nationality_origin}</p>
                    <br />
                    <p className="slightly-bold">L.G.A</p>
                    <p>{this.state.myProfile.lga}</p>
                  </div>
                  <div className="col-6">
                    <p className="slightly-bold">State</p>
                    <p>{this.state.myProfile.state} State</p>
                    <br />
                    <p className="slightly-bold">Date of birth</p>
                    <p>{moment(this.props.user.dob).format("l")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="officer-details">
            <p className="text-gclout-blue">Political Ofice Holders</p>
            <div
              className="d-flex officers justify-content-between"
              style={{ overflow: "auto" }}
            >
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile"
                  />
                </div>
                <p>Marks Webber</p>
                <small>President</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile1"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Governor</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile2"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Senator</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile3"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Council chairman</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile4"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Federal rep.</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile5"
                  />
                </div>
                <p>Marks Webber</p>
                <small>State rep.</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile6"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Councilor</small>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ProfileDetails;
