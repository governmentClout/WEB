import React, { Component } from "react";
import UploadModal from "../../components/uploadModal/uploadModal";
import "../../assets/css/profile.css";
import axios from "axios";
import { Redirect } from "react-router-dom"

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // user: [],
      showModal: false,
      uploadType: "",
      fname: "",
      lname: "",
      nationality: "",
      state: "",
      lga: "",
      photo: "",
      loading: false,
      redirect: false
    };

    this.onChange = this.onChange.bind(this);
    // this.submit = this.submit.bind(this);
    this.createProfile = this.createProfile.bind(this);
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

  createProfile(e) {
    this.setState({ loading: true });
    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    console.log(id);
    console.log(token);

    e.preventDefault();

    const data = {
      uuid: sessionStorage.getItem("uuid"),
      nationality: this.state.nationality,
      state: this.state.state,
      lga: this.state.lga,
      photo: "https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",
      firstName: this.state.fname,
      lastName: this.state.lname,
      token: sessionStorage.getItem("token")
    };

    console.log(data);

    axios({
      method: "post",
      url: "http://api.gclout.com:3000/profiles",
      data: data,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        token: token,
        uuid: id
      }
    })
      .then(response => {
        this.setState({ loading: false });

        console.log(response);
      })
      .catch(err => {
        this.setState({ loading: true });

        console.log(err);
      });

    console.log(data);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  componentDidMount() {
    if(this.state.myProfile === "") {
    const uuid = sessionStorage.getItem("uuid");
    axios({
      method: "get",
      url: `http://api.gclout.com:3000/profiles/${uuid}`,
      headers: {
        uuid: sessionStorage.getItem("uuid"),
        token: sessionStorage.getItem("token")
      }
    })
      .then(response => this.setstate({ myProfile: response.profile }))
      .catch(err => this.setState({ redirect: true }));
  }
  }
  render() {
    return !this.props.isLoggedIn ? (
      <Redirect to="/login" />
    ) : !this.state.redirect ? (
      <Redirect to="/profile" />
    ) : (
      <div className="app-wrapper">
        <div className="container app-container d-md-flex col-md-8 nx-auto">
          <div className="app-content">
            <h4 className="page-title">Create your profile</h4>
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
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                alt="profile"
              />
              <button
                className="floating-edit-button-wrapper --profile-picture"
                onClick={() => this.shouldShowModal("Profile Photo")}
                onChange={this.onChange}
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
            <div className="col-md-9 mx-auto">
              <form onSubmit={this.createProfile}>
                <div className="form-row">
                  <div className="form-group col-md">
                    <label htmlFor="fname">First Name</label>
                    <input
                      name="fname"
                      className="form-control"
                      type="text"
                      value={this.state.fname}
                      onChange={this.onChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group col-md">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      name="lname"
                      className="form-control"
                      type="text"
                      placeholder="Doe"
                      value={this.state.lname}
                      onChange={this.onChange}
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
                      onChange={this.onChange}
                      value={this.state.phone}
                      placeholder="+234 [0] 802 345 6789"
                      required
                    />
                  </div>
                  <div className="form-group col-md">
                    <label htmlFor="nationality">Nationality</label>
                    <input
                      name="nationality"
                      className="form-control"
                      type="text"
                      value={this.state.nationality}
                      onChange={this.onChange}
                      placeholder="Nigerian"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md">
                    <label htmlFor="state">State</label>
                    <select
                      name="state"
                      className="form-control"
                      defaultValue="lag"
                      value={this.state.state}
                      onChange={this.onChange}
                      required
                    >
                      <option value="lag">Lagos</option>
                      <option value="ogun">Ogun</option>
                      <option value="osun">Osun</option>
                    </select>
                  </div>
                  <div className="form-group col-md">
                    <label htmlFor="lga">L.G.A</label>
                    <input
                      name="lga"
                      className="form-control"
                      type="text"
                      value={this.state.lga}
                      onChange={this.onChange}
                      placeholder="Kosofe"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-gclout-blue" type="submit">
                    {this.state.loading ? (
                      <i className="fas fa-circle-notch fa-spin" />
                    ) : (
                      "Create Profile"
                    )}{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <UploadModal
          show={this.state.showModal}
          handleClose={this.shouldHideModal}
          uploadType={this.state.uploadType}
        />
      </div>
    );
  }
}

export default CreateProfile;
