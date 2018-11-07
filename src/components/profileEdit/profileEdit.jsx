import React, { Component } from "react";
import UploadModal from "../uploadModal/uploadModal";
import "../../assets/css/pages.css";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      uploadType: "",
      fname: this.props.userFirstName,
      lname: this.props.userLastName,
      nationality_origin: this.props.nationalityOrigin,
      nationality_residence: this.props.nationalityResidence,
      state: this.props.state,
      lga: this.props.lga,
      photo: "",
      phone: this.props.phone
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    this.setState({

      [e.target.name]: e.target.value

    });
  }

  shouldShowModal = type => {
    this.setState({
      showModal: true,
      uploadType: type
    });
  };

  shouldHideModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <>
        <div className="profile-cover-image-wrapper">
          <img
            className="profile-cover-image"
            src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540948129/background-pine-texture-82256_w2aimd.jpg"
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
        <div className="col-md-9 offset-md-1">
        <div>
          <div className="lifted-profile-image-wrapper">
            <img
              className="lifted-profile-image"
              src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
              alt="profile"
            />
            </div>
            <button
              className="floating-edit-button-wrapper --profile-picture"
              onClick={() => this.shouldShowModal("Profile Photo")}
              onChange={this.handleChange}
              name="photo"
              value={this.state.photo}
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
        </div>
        <div className="col-md-9 mx-auto">
          <form onSubmit={this.submit}>
            <div className="form-row">
              <div className="form-group col-md">
                <label htmlFor="Fname">First Name</label>
                <input
                  name="fname"
                  className="form-control"
                  type="text"
                  value={this.state.fname}
                  onChange={this.handleChange}
                  placeholder={this.props.userFirstName}
                  required
                />
              </div>
              <div className="form-group col-md">
                <label htmlFor="lname">Last Name</label>
                <input
                  name="lname"
                  className="form-control"
                  type="text"
                  placeholder={this.props.userLastName}
                  value={this.state.lname}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md">
                <label htmlFor="phone">Phone Number</label>
                <input
                  name="phone"
                  className="form-control"
                  type="phone"
                  onChange={this.handleChange}
                  value={this.state.phone}
                  placeholder="+234 [0] 802 345 6789"
                  required
                />
              </div>
              <div className="form-group col-md">
                <label htmlFor="nationality">Country of Residence</label>
                <input
                  name="nationality"
                  className="form-control"
                  type="text"
                  value={this.state.nationality_residence}
                  onChange={this.handleChange}
                  placeholder={this.props.nationalityResidence}
                  required
                />
              </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md">
                <label htmlFor="nationality">Country of Origin</label>
                <input
                  name="nationality"
                  className="form-control"
                  type="text"
                  value={this.state.nationality_origin}
                  onChange={this.handleChange}
                  placeholder={this.props.nationalityOrigin}
                  required
                />
              </div>
              <div className="form-group col-md">
                <label htmlFor="state">State</label>
                <select
                  name="state"
                  className="form-control"
                  defaultValue="lag"
                  value={this.state.state}
                  onChange={this.handleChange}
                  required
                >
                  <option value="lag">Lagos</option>
                  <option value="ogun">Ogun</option>
                  <option value="osun">Osun</option>
                </select>
              </div>
              </div>
              <div className="form-group col-md">
                <label htmlFor="lga">L.G.A</label>
                <input
                  name="lga"
                  className="form-control"
                  type="text"
                  value={this.state.lga}
                  onChange={this.handleChange}
                  placeholder={this.props.lga}
                  required
                />
            </div>
            <div className="d-flex">
              <button className="btn btn-gclout-blue" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
        <UploadModal
          show={this.state.showModal}
          handleClose={this.shouldHideModal}
          uploadType={this.state.uploadType}
        />
      </>
    );
  }
}

export default EditProfile;
