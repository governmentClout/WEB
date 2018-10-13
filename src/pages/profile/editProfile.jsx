import React, { Component } from "react";
import NavBarAuthenticated from "../../components/navbar/navBarAuthenticated";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import UploadModal from "../../components/uploadModal/uploadModal";
import "../../assets/css/profile.css";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, uploadType: "" };
  }
  shouldShowModal = type => {
    this.setState({ showModal: true, uploadType: type });
  };
  shouldHideModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div className="app-wrapper">
        <NavBarAuthenticated />
        <div className="container app-container d-md-flex">
          <Sidebar />
          <div className="app-content">
            <h4 className="page-title">Edit your profile</h4>
            <div className="profile-cover-image-wrapper">
              <img
                className="profile-cover-image"
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363181/gclout/Rectangle_2.1.png"
                alt="cover"
              />
              <button
                className="floating-edit-button-wrapper"
                onClick={() => this.shouldShowModal("Cover Photo")}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.875 16.9032V21.122H5.09375L17.5362 8.67945L13.3175 4.4607L0.875 16.9032ZM20.7987 5.41695C21.2375 4.9782 21.2375 4.26945 20.7987 3.8307L18.1663 1.1982C17.7275 0.759453 17.0187 0.759453 16.58 1.1982L14.5212 3.25695L18.74 7.4757L20.7987 5.41695Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="lifted-profile-image-wrapper">
              <img
                className="lifted-profile-image"
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                alt="profile image"
              />
              <button
                className="floating-edit-button-wrapper --profile-picture"
                onClick={() => this.shouldShowModal("Profile Photo")}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.875 16.9032V21.122H5.09375L17.5362 8.67945L13.3175 4.4607L0.875 16.9032ZM20.7987 5.41695C21.2375 4.9782 21.2375 4.26945 20.7987 3.8307L18.1663 1.1982C17.7275 0.759453 17.0187 0.759453 16.58 1.1982L14.5212 3.25695L18.74 7.4757L20.7987 5.41695Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="col-md-9 mx-auto">
              <form>
                <div className="form-row">
                  <div
                    className="form-group col"
                    style={{ paddingLeft: "0", paddingRight: "10px" }}
                  >
                    <label htmlFor="Fname">First Name</label>
                    <input
                      name="Fname"
                      className="form-control"
                      type="text"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div
                    className="form-group col"
                    style={{ paddingRight: "0", paddingLeft: "10px" }}
                  >
                    <label htmlFor="Lname">Last Name</label>
                    <input
                      name="Lname"
                      className="form-control"
                      type="text"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="johndoe@gclout.com"
                    required
                  />
                </div>
                <div className="form-row">
                  <div
                    className="form-group col"
                    style={{ paddingLeft: "0", paddingRight: "10px" }}
                  >
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      name="phone"
                      className="form-control"
                      type="phone"
                      placeholder="+234 [0] 802 345 6789"
                      required
                    />
                  </div>
                  <div
                    className="form-group col"
                    style={{ paddingRight: "0", paddingLeft: "10px" }}
                  >
                    <label htmlFor="nationality">Nationality</label>
                    <input
                      name="nationality"
                      className="form-control"
                      type="text"
                      placeholder="Nigerian"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div
                    className="form-group col"
                    style={{ paddingLeft: "0", paddingRight: "10px" }}
                  >
                    <label htmlFor="state">State</label>
                    <select
                      name="state"
                      className="form-control"
                      defaultValue="lag"
                      required
                    >
                      <option value="lag">Lagos</option>
                      <option value="ogun">Ogun</option>
                      <option value="osun">Osun</option>
                    </select>
                  </div>
                  <div
                    className="form-group col"
                    style={{ paddingRight: "0", paddingLeft: "10px" }}
                  >
                    <label htmlFor="lga">L.G.A</label>
                    <input
                      name="lga"
                      className="form-control"
                      type="text"
                      placeholder="Kosofe"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div
                    className="form-group col"
                    style={{ paddingLeft: "0", paddingRight: "10px" }}
                  >
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      className="form-control"
                      type="password"
                      required
                    />
                  </div>
                  <div
                    className="form-group col"
                    style={{ paddingRight: "0", paddingLeft: "10px" }}
                  >
                    <label htmlFor="cPassword">Confirm Password</label>
                    <input
                      name="cPassword"
                      className="form-control"
                      type="password"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <button
                    className="btn btn-gclout-dark"
                    type="button"
                    style={{ marginRight: "10px" }}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-gclout-blue"
                    type="submit"
                    style={{ marginLeft: "10px" }}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
        <UploadModal
          show={this.state.showModal}
          handleClose={this.shouldHideModal}
          uploadType={this.state.uploadType}
        />
        >
      </div>
    );
  }
}

export default EditProfile;
