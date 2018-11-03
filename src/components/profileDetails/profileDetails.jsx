import React, { Component } from "react";
import "./profileDetails.css";
import Modal from "../modal/modal";
import ProfileEdit from "../profileEdit/profileEdit";
import axios from 'axios';

class ProfileDetails extends Component {
  constructor(props) {
    
    super(props);
    
    this.state = {
    
      showModal: false,
      profile: []
    
    };
  
  }

  componentDidMount() {


    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

      const url = "http://api.gclout.com:3000/profiles/" + id

//    console.log(id, token, url);

    console.log(url);
    console.log(id);
    console.log(token);


    axios({

      method: 'GET',
      url: url,
      headers: {
        uuid: id,
        token: token

      }

    }).then(res => {

      console.log(res.data.profile);
      this.setState({

        profile: res.data.profile

      })

    })
  
  }
  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <div className="profile-details-container">
          <div className="profile-cover-image-wrapper">
            <img
              className="profile-cover-image"
              src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363181/gclout/Rectangle_2.1.png"
              alt="cover"
            />
          </div>
          <div className="container real-details-container">
            <div className="top-details d-flex justify-content-end">
              <button
                className="btn btn-gclout-blue-outline align-self-center"
                onClick={() => this.handleToggleModal()}
              >
                Edit Profile
              </button>
              <button className="btn btn-gclout-blue mr-2">Message</button>
              <button className="btn btn-gclout-blue-outline">
                Add friend
              </button>
            </div>
            {showModal && (
              <Modal onCloseRequest={() => this.handleToggleModal()}>
              { this.state.profile.map(
                (user) => (
                  <ProfileEdit 
                  userFirstName={user.firstName} 
                  userLastName={user.lastName}
                  nationality={user.nationality}
                  state={user.state}
                  lga={user.lga}
                  />
                )
              )}
              </Modal>
            )}

            {
              this.state.profile.map(
                (user) => (

            <div className="main-details d-md-flex justify-content-btween">
              <div className="col-md-4 dashed-border-right details-column">
                <div
                  className="lifted-profile-image-wrapper mx-auto"
                  style={{ marginTop: "-160px" }}
                >
                  <img
                    className="lifted-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                    alt="profile image"
                  />
                </div>
                <h5 className="text-center">{user.firstName} {user.lastName}</h5>
                <div className="d-flex justify-content-between friends-details">
                  <div className="text-center col-6">
                    <p>Following</p>
                    <h5 className="text-gclout-blue">300</h5>
                  </div>
                  <div className="text-center col-6">
                    <p>Friends</p>
                    <h5 className="text-gclout-blue">300</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 dashed-border-right details-column mx-auto">
                <p className="text-gclout-blue">Contact Information</p>
                <p className="slightly-bold">Email Address</p>
                <p>jamesadewale@gmail.com</p>
                <br />
                <p className="slightly-bold">Phone Number</p>
                <p>+234 [0] 802 345 6789</p>
              </div>
              <div className="col-md-4 details-column">
                <p className="text-gclout-blue">Other Information</p>
                <div className="d-flex justify-content-between">
                  <div className="col-6">
                    <p className="slightly-bold">Nationality</p>
                    <p>{user.nationality}</p>
                    <br />
                    <p className="slightly-bold">L.G.A</p>
                    <p>{user.lga}</p>
                  </div>
                  <div className="col-6">
                    <p className="slightly-bold">State</p>
                    <p>{user.state} State</p>
                    <br />
                    <p className="slightly-bold">Date of birth</p>
                    <p>23/07/1990</p>
                  </div>
                </div>
              </div>
            </div>
            ))
            }


          </div>
          <div className="officer-details">
            <p className="text-gclout-blue">Political Ofice Holders</p>
            <div
              className="d-flex officers justify-content-between"
              style={{ overflow: "auto" }}
            >
              <div className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                    alt="friend profile image"
                  />
                </div>
                <p>Marks Webber</p>
                <small>President</small>
              </div>
              <div className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                    alt="friend profile image"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Governor</small>
              </div>
              <div className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                    alt="friend profile image"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Senator</small>
              </div>
              <div className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                    alt="friend profile image"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Council chairman</small>
              </div>
              <div className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                    alt="friend profile image"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Federal rep.</small>
              </div>
              <div className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                    alt="friend profile image"
                  />
                </div>
                <p>Marks Webber</p>
                <small>State rep.</small>
              </div>
              <div className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                    alt="friend profile image"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Councilor</small>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ProfileDetails;
