import React, { Component } from "react";
import UploadModal from "../uploadModal/uploadModal";
import "../../assets/css/pages.css";
import "./profileEdit.css"
import axios from 'axios';
import { stat } from "fs";
import {API_URL} from "../config";

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
      lgas: [],
      lga: this.props.lga,
      photo: "",
      phone: this.props.phone,
      allStates: [],
      loading: false,
      countries: [],
      email: this.props.email,
      isNigerian: false
    };

    this.onChange = this.onChange.bind(this);
    this.editProfile = this.editProfile.bind(this);
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
        if(this.state.nationality_origin === 'Nigeria') {

          this.setState({
            isNigerian: true
          });
        } else {
          this.setState({
            isNigerian: false
          });
        }
    }

    onChange(e) {
      if(this.state.nationality_origin === 'Nigeria') {

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

  handleChange(e) {
    if(this.state.nationality_origin === 'Nigeria') {

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

    getStates(){

        axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
            .then(response => {
                this.setState({
                    allStates: response.data
                })
            })
            .catch(err => console.log(err))

    }

    getCountries(){

        axios({

            method: 'get',
            url: "https://restcountries.eu/rest/v2/all"

        }).then(res => {
            console.log(res.data);
            this.setState({

                countries: res.data

            })

        }).catch(err => {

            console.log(err);

        })
    }

  editProfile(e){

    e.preventDefault();
    this.setState({
      loading: true
    })

    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

      console.log(id);
      console.log(token);

    const data = {

      nationality_residence: this.state.nationality_residence,
      nationality_origin: this.state.nationality_origin,
      state: this.state.state,

    };

    console.log(data);

    axios({

      method: "put",
      url: `${API_URL}/profiles`,
      data: data,
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        token: token,
        uuid: id,

      }

    }).then(response => {

      console.log(response);
      this.setState({
        loading: false
      })

    }).catch(err => {

      console.log(err);
      this.setState({
        loading: false
      })

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

    displayLga() {
        const state = this.state.state;
        axios({
            method: 'get',
            url: `http://locationsng-api.herokuapp.com/api/v1/states/${state}/lgas`
        }).then(res => {
//        console.log(res.data);
            this.setState({
                lgas: res.data
            })
        }).catch(err => console.log(err));
        return(
            <div className="form-group col-md right">
                <label htmlFor="state">LGA</label>
                <select
                    onChange={this.onChange}
                    name="lga"
                    className="form-control"
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
        )

    }

  render() {

    return (
      <div className="bg-white">
      <div className="modal-header">
        <h4 className="mb-0 pl-3">Edit Profile</h4>
      </div>
        <div className="profile-cover-image-wrapper edit">
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
        <div className="col-md-3 offset-md-1" >
        <div>
          <div className="lifted-profile-image-wrapper edit">
            <img
              className="lifted-profile-image"
              src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
              alt="profile"
            />
            </div>
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
        </div>
        <div className="col-md-9 mx-auto">
          <form onSubmit={this.editProfile}>
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
              {this.state.isNigerian ? (  <div className="form-row">
                <div className="form-group col-md left">
                  <label htmlFor="state">State</label>
                  <select
                      onChange={this.onChange}
                      name="state"
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
                {this.displayLga()}
              </div> ) : ""
              }

            <div className="d-flex mb-4">
              <button className="btn btn-gclout-blue mb-4" type="submit">
                {this.state.loading ? (
                      <i className="fas fa-circle-notch fa-spin" />
                    ) : (
                      "Update Profile"
                    )}
              </button>
            </div>
          </form>
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

export default EditProfile;
