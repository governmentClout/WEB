import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import axios from 'axios';
import UploadModal from "../../components/uploadModal/uploadModal";
import "../../assets/css/pages.css";
import { API_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL } from "../../components/config";
import {Redirect} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

class CreateProfile extends Component {

  constructor(){
    super();

    this.state = {

      showModal: false,
      uploadType: "",
      fname: "",
      lname: "",
      nationality_origin: "",
      nationality_residence: "",
      state: "",
      lgas: [],
      lga: "",
      photo: "",
      phone: "",
      allStates: [],
      loading: false,
      countries: [],
      email: "",
      isNigerian: false,
      selectedFile: null,
      loaded: 0,
      redirect: false,

    };

      this.onChange = this.onChange.bind(this);
      this.createProfile = this.createProfile.bind(this);

  }
  componentDidMount() {
//    console.log(JSON.parse(sessionStorage.getItem("data")));
    const url = `${API_URL}/users/${sessionStorage.getItem('uuid')}`;

    axios({

      method: 'get',
      url: url,
      headers: {

        token: sessionStorage.getItem('token'),
        uuid: sessionStorage.getItem('uuid')

      }

    }).then(res => {

      this.setState({
        phone: res.data[0].phone,
        email: res.data[0].email

      });

    });
  /*  const userData  = JSON.parse(sessionStorage.getItem("data")),
      email = userData.user.email,
      phone = userData.user.phone;*/

    /*this.setState({
      phone,
      email
    });*/
    

    axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
      .then(res => {

        const states = res.data.map(state => state);

        this.setState({

          allStates: states

        })

      }).catch(err => {

        console.log(err);
      })
    }
    
    onChange(e) {
      if(e.target.name == 'state') {
        this.displayLga(e.target.value);
      }
      if (this.state.nationality_origin === 'Nigeria') {

      this.setState({
        [e.target.name]: e.target.value,
        isNigerian: true
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        isNigerian: false
      });
    }

  }

  componentWillMount() {

    this.getCountries();
    this.getStates();

  }

  getStates() {

    axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
      .then(response => {
        this.setState({
          allStates: response.data
        })
      })
      .catch(err => console.log(err))

  }

  getCountries() {

    axios({

      method: 'get',
      url: "https://restcountries.eu/rest/v2/all"

    }).then(res => {

      this.setState({

        countries: res.data

      })

    }).catch(err => {

      console.log(err);

    })
  }

  createProfile(e) {

    this.setState({

      loading: true

    });

    e.preventDefault();

    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    if (this.state.selectedFile !== null) {

      const file = this.state.selectedFile;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', `${CLOUDINARY_UPLOAD_PRESET}`);
      // console.log(`${CLOUDINARY_UPLOAD_PRESET}`);

      axios({

        url: `${CLOUDINARY_URL}`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData,
        onUploadProgress: progressEvent => {
          console.log(progressEvent.loaded / progressEvent.total)
          this.setState({
            // loaded: (ProgressEvent.loaded/ ProgressEvent.total*100)
            loaded: (ProgressEvent.loaded / ProgressEvent.total * 1)
          })
        }
      })
      .then(res => {

        console.log(res.data);

        this.setState({

          preview: res.data.secure_url

        });

        const data = {

          firstName: this.state.fname,
          lastName: this.state.lname,
          nationality_residence: this.state.nationality_residence,
          nationality_origin: this.state.nationality_origin,
          state: this.state.state,
          lga: this.state.lga,
          photo: res.data.secure_url

        };

        console.log(data);

        axios({

          method: "post",
          url: `${API_URL}/profiles`,
          data: data,
          mode: 'no-cors',
          headers: {

            "Content-Type": "application/json;charset=utf-8",
            token: token,
            uuid: id,

          }

        }).then(res => {

          console.log(res.data);

          this.setState({

            loading: false,
            redirect: true

          })

        }).catch(err => {

          console.log(err);
          this.notify(err);
          this.setState({
            loading: false
          })

        })

      });

    } else {

      this.noPhoto()
      this.setState({
        loading: false
      })
    }

  }
  errorToast = null;
  notify = error => {
    if (this.errorToast) {
      toast.dismiss(this.errorToast);
    }
    this.errorToast = toast.error(
      "Profile Not created ",
      {
        position: toast.POSITION.TOP_LEFT,
        autoClose: false
      }
    );
  };
  noPhoto = () => {
    if (this.errorToast) {
      toast.dismiss(this.errorToast);
    }
    this.errorToast = toast.error(
      "Please select a picture ",
      {
        position: toast.POSITION.TOP_LEFT,
        autoClose: false
      }
    );
  };
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

  displayLga(state) {
    // let state = this.state.state;
    axios({
      method: 'get',
      url: `http://locationsng-api.herokuapp.com/api/v1/states/${state}/lgas`
    }).then(res => {
      this.setState({
        lgas: res.data
      })
    }).catch(err => console.log(err));

  }

  fileSelected = event => {

    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    })

  };

  render() {
    if(this.state.redirect == true) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <div className="auth-page d-flex">
          <AuthBackground />
          <div className="authy">
            <div className="m-auto col-lg-7 col-md-8  bg-white px-0">
              <div className="profile-cover-image-wrapper edit">
                <img
                  className="profile-cover-image"
                  src="../cover.svg"
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
              <div className="col-md-10 mx-auto">
                <form onSubmit={this.createProfile}>
                  <div className="col-md-4" >
                    <div>
                      <div className="lifted-profile-image-wrapper edit">
                        <img
                          className="lifted-profile-image"
                          src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                          alt="profile"
                        />
                        <img
                          className="lifted-profile-image"
                          alt="profile"
                          src={this.state.preview} />
                      </div>
                      <input type="file" ref={fileInput => this.fileInput = fileInput} onChange={this.fileSelected} style={{ display: 'none' }} />
                      <button
                        className="floating-edit-button-wrapper --profile-picture"
                        onClick={() => this.fileInput.click()}
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
                  <div className="form-row">
                    <div className="form-group col-md left">
                      <label htmlFor="Fname">First Name</label>
                      <input
                        name="fname"
                        className="form-control"
                        type="text"
                        value={this.state.fname}
                        onChange={this.onChange}
                        placeholder={this.props.userFirstName}
                        required
                      />
                    </div>
                    <div className="form-group col-md right">
                      <label htmlFor="lname">Last Name</label>
                      <input
                        name="lname"
                        className="form-control"
                        type="text"
                        placeholder={this.props.userLastName}
                        value={this.state.lname}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md left">
                      <label htmlFor="email">Email address</label>
                      <input
                        name="email"
                        className="form-control"
                        type="email"
                        placeholder={this.props.email}
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md right">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        name="phone"
                        className="form-control"
                        type="tel"
                        placeholder={this.props.phone}
                        value={this.state.phone}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md left">
                      <label htmlFor="nationality_residence">Country of Residence</label>
                      <select
                        name="nationality_residence"
                        className="form-control"
                        value={this.state.nationality_residence}
                        onChange={this.onChange}
                        required
                      >
                        {this.state.countries.map(country => {
                          return (
                            <option value={country.name} key={country.name}>{country.name}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="form-group col-md right">
                      <label htmlFor="nationality_origin">Country of Origin</label>
                      <select
                        name="nationality_origin"
                        className="form-control"
                        value={this.state.nationality_origin}
                        onChange={this.onChange}
                        required
                      >
                        {this.state.countries.map(country => {
                          return (
                            <option value={country.name} key={country.name}>{country.name}</option>
                          )
                        })}
                      </select>
                    </div>

                  </div>
                  {this.state.nationality_origin === 'Nigeria' ? (<div className="form-row">
                    <div className="form-group col-md left">
                      <label htmlFor="state">State</label>
                      <select
                        onChange={this.onChange}
                        name="state"
                        valu={this.state.state}
                        className="form-control">
                        {this.state.allStates.map(state => {
                          return (
                            <option value={state.name} key={state.name}>
                              {state.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group col-md right">
                      <label htmlFor="state">LGA</label>
                      <select
                        onChange={this.onChange}
                        name="lga"
                        className="form-control"
                        value={this.state.lga}
                      >
                        {this.state.lgas.map(lga => {
                          return (
                            <option value={lga} key={lga}>
                              {lga}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>) : ""
                  }

                  <div className="d-flex mb-4">
                    <button className="btn btn-gclout-blue mb-4" type="submit">
                      {this.state.loading ? (
                        <i className="fas fa-circle-notch fa-spin" />
                      ) : (
                          "Save"
                        )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
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
