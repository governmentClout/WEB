import React, { Component } from "react";
import UploadModal from "../../components/uploadModal/uploadModal";
import "../../assets/css/pages.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {API_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL} from "../../components/config";

class CreateProfile extends Component {
  constructor(props) {
    super(props);

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
        loading: false,
        redirect: false,
        allStates: [],
        toProfile: false,
        countries: [],
        selectedProfile: null,
        loaded: 0,
        selectedFile: null

    };

    this.onChange = this.onChange.bind(this);
    // this.submit = this.submit.bind(this);
    this.createProfile = this.createProfile.bind(this);
  }

  componentDidMount(){
        axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
            .then(res => {
                const states = res.data.map(state => state);
                //console.log(states);
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

      this.getCountries();
      this.getStates();

  }
  errorToast = null;
  notify = error => {
    if (this.errorToast) {
      toast.dismiss(this.errorToast);
    }
    this.errorToast = toast.error(
      "Profile Creation Failed: " + error.response.data.Error,
      {
        position: toast.POSITION.TOP_LEFT,
        autoClose: false
      }
    );
  };
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
    //  console.log(res.data);
      this.setState({
          countries: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  fileSelected = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        }, () => console.log(this.state.selectedFile))
    };

  createProfile(e) {
      e.preventDefault();
      this.setState({
        loading: true
    });
    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");
    console.log(id);
    console.log(token);
    e.preventDefault();
    if(this.state.lga === ""){
      this.state.lga = "N/A";
    }
    if(this.state.state === ""){
      this.state.state = "N/A";
    }

    if(this.state.selectedFile !== null){

        const file = this.state.selectedFile;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', `${CLOUDINARY_UPLOAD_PRESET}`);
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
                    loaded: (ProgressEvent.loaded/ ProgressEvent.total*1)
                })
            }

        }).then(res => {
            console.log(res.data.url);

            const data = {

                uuid: sessionStorage.getItem("uuid"),
                nationality_residence: this.state.nationality_residence,
                nationality_origin: this.state.nationality_origin,
                state: this.state.state,
                lga: this.state.lga,
                photo: res.data.url,
                firstName: this.state.fname,
                lastName: this.state.lname,
                token: sessionStorage.getItem("token")

            };
            console.log(data);

            axios({

                method: 'post',
                url: `${API_URL}/profiles`,
                data: data,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    token: token,
                    uuid: id
                }

            }).then(response => {
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
                    this.notify(err);
                    this.setState({

                        loading: false

                    });
                });
            console.log(data);

        })
    } else {
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
                this.setState({loading: false});
                if (response.data.Success) {
                    this.setState({
                        toProfile: true
                    });
                }
                console.log(response);
            })
            .catch(err => {
                this.setState({loading: false});

                console.log(err);
                this.notify(err);
                this.setState({

                    loading: false

                });
            });
        console.log(data);
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  displayLga() {
    if(this.state.nationality_residence === "Nigeria"){
      const state = this.state.state;
    //  console.log(state);
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
          <div className="form-group col-md">
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

}

  displayState(){
    if(this.state.nationality_residence === "Nigeria"){
    //  console.log(this.state.nationality_residence);
        return(
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
        )
    }
}

  render() {

    console.log(sessionStorage.getItem("token"));
    console.log(sessionStorage.getItem("uuid"));


    if (this.state.toProfile === true) {
      return <Redirect to="/profile" />;
    }
    const { lgas } = this.state;

    return !this.props.isLoggedIn ? (
            <Redirect to="/login" />
        ) : (
      <div className="app-wrapper">
        <div className="container app-container d-md-flex col-md-8 nx-auto">
          <div className="app-content">
            <h4>Create your profile</h4>
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
            <div className="col-md-9 mx-auto">
              <form>
                <div className="form-row">
                    
                    {/*<div style={{ width: "160px", height: "160px" }}>
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
                            onChange={this.fileSelected}
                            name="photo"
                            type="file"
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
                    </div>*/}
                    <div className="form-group">
                        <input type="file" ref={fileInput => this.fileInput = fileInput} onChange={this.fileSelected} style={{ display: 'none'}}/>
                        <button onClick={() => this.fileInput.click() }>Select Photo</button>
                        {/*{this.state.loaded === 0 ? <button onClick={() => this.fileInput.click() }>Select Photo</button> : <div>{Math.round(this.state.loaded,2) } %</div> }*/}
                        {/*<input type="file" onChange={this.fileSelected}/>*/}

                    </div>
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
                    <label htmlFor="nationality_residence">Country of Origin</label>
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

                  <div className="form-group col-md">
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

                </div>
                <div className="form-row">
                    {this.displayState()}

                  <div className="form-group col-md">
                      {this.displayLga()}

                    {/* {this.displayLga()}*/}
                {/*<select
                    onChange={this.onChange}
                    name="state"
                    className="form-control"
                >
                    {lgas.map(lga => {
                        return (
                            <option value={lga} key={lga}>
                                {lga}
                            </option>
                        );
                    })}
                </select>*/}

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
        <ToastContainer />
      </div>
    );
  }
}

export default CreateProfile;
