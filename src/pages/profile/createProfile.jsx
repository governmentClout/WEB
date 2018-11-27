import React, { Component } from "react";
import UploadModal from "../../components/uploadModal/uploadModal";
import "../../assets/css/pages.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // user: [],
      showModal: false,
      uploadType: "",
      fname: "",
      lname: "",
      nationality_origin: "",
      nationality_residence: "",
      state: "",
      lga: "",
      photo: "",
      loading: false,
      redirect: false,
      allStates: [],
      toProfile: false
    };

    this.onChange = this.onChange.bind(this);
    // this.submit = this.submit.bind(this);
    this.createProfile = this.createProfile.bind(this);
  }

  componentDidMount(){

        axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
            .then(res => {

                const states = res.data.map(state => state);

                console.log(states);

                this.setState({

                    allStates: states

                })

            }).catch(err => {

            console.log(err);

        })
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

  dataChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }
  componentWillMount() {
    console.log('mounted')
    axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
      .then(response => {
        this.setState({
          allStates: response.data
        })
      })
      .catch(err => console.log(err))
  }

  createProfile(e) {
    this.setState({ loading: true });
    e.preventDefault();
    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");
    console.log(id);
    console.log(token);
    e.preventDefault();

    const data = {
      uuid: sessionStorage.getItem("uuid"),
      nationality_residence: this.state.nationality_residence,
      nationality_origin: this.state.nationality_origin,
      state: this.state.state,
      lga: this.state.lga,
      photo:
        "https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",
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
        if (response.data.Success) {
          this.setState({
            toProfile: true
          });
        }
        console.log(response);
      })
      .catch(err => {
        this.setState({ loading: false });

        console.log(err);
      });
    console.log(data);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.state.toProfile === true) {
      return <Redirect to="/profile" />;
    }
    return !this.props.isLoggedIn ? (
            <Redirect to="/login" />
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
            <div style={{ width: "160px", height: "160px" }}>
              <div className="lifted-profile-image-wrapper" style={{ marginTop: "-80px" }}>
                <img
                  className="lifted-profile-image"
                  src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                  alt="profile"
                />
              </div>
              <button
                className="floating-edit-button-wrapper --profile-picture"
                style={{ top: "28%", left: "26%" }}
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
            <div className="col-md-9 mx-auto">
              <form>
                <div className="form-row">
                  <div className="form-group col-md">
                    <label htmlFor="Fname">First Name</label>
                    <input
                      name="fname"
                      className="form-control"
                      type="text"
                      value={this.state.fname}
                      onChange={this.onChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group col-md">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      name="lname"
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      value={this.state.lname}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md">
                    <label htmlFor="nationality_residence">Country of Residence</label>
                    <input
                      name="nationality_residence"
                      className="form-control"
                      type="text"
                      value={this.state.nationality_residence}
                      onChange={this.onChange}
                      placeholder="Country of Residence"
                      required
                    />
                  </div>
                  <div className="form-group col-md">
                    <label htmlFor="nationality_residence">Country of Origin</label>
                    <input
                      name="nationality_origin"
                      className="form-control"
                      type="text"
                      value={this.state.nationality_origin}
                      onChange={this.onChange}
                      placeholder="Country of Origin"
                      required
                    />
                  </div>

                </div>
                <div className="form-row">
                  <div className="form-group col-md">
                    <label htmlFor="state">State</label>
                    <select
                      onChange={this.onChange}
                      name="state"
                      className="form-control"
                    >
                      {this.state.allStates.map(state => {
                        return (
                          <option value={state.name} key={state.name}>
                            {state.name}
                          </option>
                        );
                      })}
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
                      placeholder="Local Government Area"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <button
                    className="btn btn-gclout-blue"
                    onClick={this.createProfile}
                    type="submit"
                  >
                    {this.state.loading ? (
                      <i className="fas fa-circle-notch fa-spin" />
                    ) : (
                        "Create Profile"
                      )}
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
