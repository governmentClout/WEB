import React, { Component } from "react";
import "./profileDetails.css";
import ProfileEdit from "../profileEdit/profileEdit";
import axios from "axios";
import { Manager, Reference, Popper } from "react-popper";
import { Link } from "react-router-dom";
import ProfileDetailsLoader from "../loaders/profileDeails"
import {API_URL} from "../config";
import Modal from "../modal/modal";
import UpgradeModal from "../upgrade/upgrade";

const moment = require("moment");

class ProfileDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {

      showModal: false,
      showUpgradeModal: false,
      profile: [],
      showMore: false,
      office: '',
      party: '',
      loading: true,
      friends: [],
      email: '',
      phone: '',
      dob: ''

    };

      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

  }

  handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  onSubmit(e){
      e.preventDefault();
      const data = {

            party: this.state.party,
            about_you: this.state.about,
            about_party: this.state.party,
            office: this.state.office

        };

      const id = sessionStorage.getItem("uuid"),
          token = sessionStorage.getItem("token");

  /*    console.log(id, token);*/

      const header = {

          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          token: token,
          uuid: id

      };
/*      console.log(header);*/

      axios({

          method: 'post',
          url: `${API_URL}/executives`,
          data: data,
          headers: header

        }).then(res => {
            if(res.data.Success){
                this.setState({

                    office: '',
                    party: '',
                    about: '',
                    position: '',
                    showUpgradeModal: false

                });
            }
        }).catch(err => {
            console.log(err);
        })
  }

  showMore = () => {
    let currentState =  this.state.showMore;
    this.setState({showMore: !currentState})

  };

  componentDidMount() {

    this.getFriends();

    let id =  sessionStorage.getItem("uuid");
    const token  = sessionStorage.getItem("token"),
    data = JSON.parse(sessionStorage.getItem('data')),
      email = data.data.user.email,
      phone = data.data.user.phone,
      dob = data.data.user.dob

      this.setState({
        email,
        phone,
        dob
      })

    if(this.props.userId) {
      id = this.props.userId;
    } else {
      id = sessionStorage.getItem("uuid");
    }

    if(this.state.profile !== []) {
    const url = `http://api.gclout.com:3000/profiles/${id}`;
    
    axios({
      method: "GET",
      url: url,
      headers: {
        uuid: id,
        token: token
      }
    }).then(res => {

      this.setState({
        profile: res.data.profile[0],
        loading: false
      }, () => console.log(this.state.profile));
    });
  }
  }
  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  toggleUpgrade() {
    this.setState({ showUpgradeModal: !this.state.showUpgradeModal });
  }

  getFriends() {

    axios({

      method: 'get',
      url: `${API_URL}/friends`,
      headers: {

        token: sessionStorage.getItem('token'),
        uuid: sessionStorage.getItem('uuid')

      }

    }).then(res => {

      this.setState({

        friends: res.data.friends.length

      })

    })

  }

  render() {
    const { showModal, showUpgradeModal, loading, friends } = this.state;
   console.log(this.state.profile.photo);
    return (
        <React.Fragment>
        { loading ? <ProfileDetailsLoader /> :
          <div className="profile-details-container">
            <div className="profile-cover-image-wrapper">
              <img
                className="profile-cover-image"
                src={this.state.profile.photo}
                alt="cover"
              />
            </div>
            <div className="container real-details-container">
              <div className="main-details d-md-flex justify-content-btween">
                <div className="col-md-4 justify-cintent-center details-column">
                  <div
                    className="lifted-profile-image-wrapper mx-auto"
                    style={{ marginTop: "-80px" }}
                  >
                    <img
                        src={this.state.profile.photo}
                        className="lifted-profile-image"
                      alt="profile7"
                    />
                  </div>
                </div>
                {!this.props.userId ? <div className="top-details d-flex justify-content-center offset-md-2 col-md-8">
                  <button className="btn btn-gclout-blue align-self-center" onClick={() => this.toggleUpgrade()}> 
                    Upgrade
                  </button>
                  <button
                    className="ml-4 btn btn-gclout-blue-outline align-self-center"
                    onClick={() => this.handleToggleModal()}
                  >
                    Edit Profile
                  </button>
                </div>
                : <div /> }
              </div>

              {showModal && (
                <Modal onCloseRequest={() => this.handleToggleModal()}>
                    <ProfileEdit  
                      userFirstName={this.state.profile.firstName}
                      userLastName={this.state.profile.lastName}
                      nationalityOrigin={this.state.profile.nationality_origin}
                      nationalityResidence={this.state.profile.nationality_residence}
                      state={this.state.profile.state}
                      lga={this.state.profile.lga}
                      phone={this.state.phone}
                      email={this.state.email}
                    />
                </Modal>
              )}
              {showUpgradeModal && (
                <Modal onCloseRequest={() => this.toggleUpgrade()}>
                  <UpgradeModal />
                </Modal>
              )}

              
                <div className="main-details d-md-flex justify-content-btween">
                  <div className="col-md-4 dashed-border-right details-column">
                    <h5 className="text-center">
                      {this.state.profile.firstName} {this.state.profile.lastName}
                    </h5>
                    {this.props.userId ? 
                      (this.props.userId === 'executive' ?
                      <p className="text-muted text-center">President</p> :
                      <div className="d-flex justify-content-between friend-actions">
                        <Link to="/" className="btn btn-gclout-blue">Message</Link>
                        {this.props.userId === 'friend' ? 
                        <Manager>
                          <Reference>
                            {({ ref }) => (
                              <button
                                type="button"
                                ref={ref}
                                onClick={this.showMore}
                                className="btn btn-gclout-blue-outline px-4"
                              >
                                More... {"  "}
                                <i className="fa fa-caret-down"></i>
                              </button>
                            )}
                          </Reference>
                          <Popper placement="bottom">
                            {({ ref, style, placement, arrowProps }) => (
                              <div ref={ref} style={style} data-placement={placement}>
                                <div
                                  className={
                                    this.state.showMore
                                      ? "button-dropdown show"
                                      : "button-dropdown"
                                  }
                                >
                                  <ul className="button-dropdown-list">
                                    <li
                                      className="profile-dropdown-list-item"
                                      onClick={this.showMore}
                                    >
                                      <button className="button-dropdown-list-button">Remove</button>
                                    </li>
                                    <li
                                      className="profile-dropdown-list-item"
                                      onClick={this.showMore}
                                    >
                                      <button className="button-dropdown-list-button">Block</button>
                                    </li>
                                  </ul>
                                </div>
                                <div ref={arrowProps.ref} style={arrowProps.style} />
                              </div>
                            )}
                          </Popper>
                        </Manager> 
                        : <button className="btn btn-gclout-blue-outline">Add Friend</button>
                      }
                      </div> ) : " "}
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
                        <h5 className="text-gclout-blue">{friends}</h5>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3 dashed-border-right details-column mx-auto">
                    <p className="text-gclout-blue">Contact Information</p>
                    <p className="slightly-bold">Email Address</p>
                    <p>{this.state.email}</p>
                    <br />
                    <p className="slightly-bold">Phone Number</p>
                    <p>{this.state.phone}</p>
                  </div>
                  <div className="col-md-5 details-column">
                    <p className="text-gclout-blue">Other Information</p>
                    <div className="d-flex justify-content-between">
                      <div className="col-6">
                        <p className="slightly-bold">Nationality</p>
                        <p>{this.state.profile.nationality_origin}</p>
                        <br />
                        <p className="slightly-bold">L.G.A</p>
                        <p>{this.state.profile.lga}</p>
                      </div>
                      <div className="col-6">
                        <p className="slightly-bold">State</p>
                        <p>{this.state.profile.state} State</p>
                        <br />
                        <p className="slightly-bold">Date of birth</p>
                        <p>{moment(this.state.dob).format("l")}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="officer-details">
              <p className="text-gclout-blue">Political Ofice Holders</p>
              <div
                className="d-flex officers justify-content-between flex-wrap"
              >
                <Link to="/profile/executive" className="officer">
                  <div className="officer-profile-image-wrapper">
                    <img
                      className="officer-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                      alt="friend profile"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>President</small>
                </Link>
                <Link to="/profile/executive" className="officer">
                  <div className="officer-profile-image-wrapper">
                    <img
                      className="officer-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                      alt="friend profile1"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Governor</small>
                </Link>
                <Link to="/profile/executive" className="officer">
                  <div className="officer-profile-image-wrapper">
                    <img
                      className="officer-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                      alt="friend profile2"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Senator</small>
                </Link>
                <Link to="/profile/executive" className="officer">
                  <div className="officer-profile-image-wrapper">
                    <img
                      className="officer-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                      alt="friend profile3"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Council chairman</small>
                </Link>
                <Link to="/profile/executive" className="officer">
                  <div className="officer-profile-image-wrapper">
                    <img
                      className="officer-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                      alt="friend profile4"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Federal rep.</small>
                </Link>
                <Link to="/profile/executive" className="officer">
                  <div className="officer-profile-image-wrapper">
                    <img
                      className="officer-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                      alt="friend profile5"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>State rep.</small>
                </Link>
                <Link to="/profile/executive" className="officer">
                  <div className="officer-profile-image-wrapper">
                    <img
                      className="officer-profile-image"
                      src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                      alt="friend profile6"
                    />
                  </div>
                  <p>Marks Webber</p>
                  <small>Councilor</small>
                </Link>
              </div>
            </div>
          </div>
      }
        </React.Fragment>
      );
    }
  }
export default ProfileDetails;
