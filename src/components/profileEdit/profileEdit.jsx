import React, { Component } from "react";
import UploadModal from "../uploadModal/uploadModal";
import "../../assets/css/pages.css";
import "./profileEdit.css"
import axios from 'axios';

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
      phone: this.props.phone,
      allStates: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  handleChange(e) {

    this.setState({

      [e.target.name]: e.target.value

    });
  
  }

  editProfile(e){

    e.preventDefault();

    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    const newProfile = {
      nationality_residence: this.state.nationality_residence,
      nationality_origin: this.state.nationality_origin,
      state: this.state.state,
      lga: this.state.lga,
      photo: "https://picsum.photos/200/300",
      firstName: this.state.fname,
      lastName: this.state.lname

    }

    console.log(newProfile);

    const url = "http://api.gclout.com:3000/profiles";
    console.log(url);

    axios({
    
      method: 'put',
      url: url,
      headers: {

        token: token,
        uuid: id,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"

      }
    
    }).then(response => {

      console.log(response);

    })


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

  render() {
    return (
      <>
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
        <div className="col-md-9 offset-md-1" >
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
          <form onSubmit={this.editProfile}>
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
                <label htmlFor="nationality">Country of Residence</label>
                <input
                  name="nationality_residence"
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
                  name="nationality_origin"
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
                  defaultValue={this.props.state}
                  onChange={this.handleChange}
                  required
                >
                  {
                    this.state.allStates.map(state => {
                      
                      return <option value={state.name}>{state.name}</option>
                    
                    })

                  }
                </select>
              </div>
              </div>
              <div className="form-group">
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
