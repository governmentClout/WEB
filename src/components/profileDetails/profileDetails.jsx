import React, { Component } from "react";
import "./profileDetails.css";
import Modal from "../modal/modal";
import ProfileEdit from "../profileEdit/profileEdit";
import axios from "axios";
import { Manager, Reference, Popper } from "react-popper";
import { Link } from "react-router-dom";

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
      tosAgreement: false
    };
  }
  showMore = () => {
    let currentState =  this.state.showMore;
    this.setState({showMore: !currentState})
  }

  componentDidMount() {
    const id =  sessionStorage.getItem("uuid");
    const token  = sessionStorage.getItem("token");

    // if(this.props.match.params.id) {
    //   id = this.props.match.params.id
      console.log(this.props.userId)
    // } else {
      // id = sessionStorage.getItem("uuid");
    // }

    if(this.state.profile !== []) {

    //   id = sessionStorage.getItem("uuid"),
    //   token = sessionStorage.getItem("token");
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
        profile: res.data.profile[0]
      });
    });
  }
  }
  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  toggleUpgrade() {
    this.setState({ showUpgradeModal: !this.state.showUpgradeModal });
  }
  // handleChange(e) {

  //   this.setState({

  //     [e.target.name]: e.target.value

  //   });
  
  // }

  render() {
    const { showModal, showUpgradeModal } = this.state;
    return (
      <React.Fragment>
        <div className="profile-details-container">
          <div className="profile-cover-image-wrapper">
            <img
              className="profile-cover-image"
              src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540948129/background-pine-texture-82256_w2aimd.jpg"
              alt="cover"
            />
          </div>
          <div className="container real-details-container">

            <div className="main-details d-md-flex justify-content-btween">
              <div className="col-md-4 details-column">
                <div
                  className="lifted-profile-image-wrapper"
                  style={{ marginTop: "-80px" }}
                >
                  <img
                    className="lifted-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="profile7"
                  />
                </div>
              </div>
              {this.props.userId === '' || null ? <div className="top-details d-flex justify-content-end col-8">
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
                    phone={this.props.user.phone}
                  />
              </Modal>
            )}
            {showUpgradeModal && (
              <Modal className="rounded-small" onCloseRequest={() => this.toggleUpgrade()}>
                  <div className="upgrade-modal-wrapper d-flex justify-content-center p-4" style={{backgroundColor: 'transparent'}}>
                    <div className="text-center p-4 mx-auto  col-md-7">
                      <h5><strong>Request Upgrade</strong></h5>
                      <br />
                      <form>
                        <div className="form-group">
                          <label>Select political office</label>
                          <select
                            name="office"
                            className="form-control"
                            onChange={this.handleChange}
                            required
                          >
                            <option value="president">President</option>
                            <option value="governor">Governor</option>
                            <option value="senator">Senator</option>
                            <option value="council_chairman">Council Chairman</option>
                            <option value="federal_rep">Federal Rep.</option>
                            <option value="state_rep">State Rep</option>
                            <option value="councilor">Councilor</option>
                          </select>
                        </div>
                          <div className="form-group">
                            <div className="form-check d-flex">
                              <input
                                className="mr-2"
                                type="checkbox"
                                ref="check_me"
                                value={this.state.tosAgreement}
                                onChange={e => {
                                  this.setState({ tosAgreement: e.target.checked });
                                }}
                                required
                              />
                              <label
                                htmlFor="agreement"
                                className="form-check-label"
                                name="tosAgreement"
                              >
                                By clicking submit, I agree with terms and conditions
                              </label>
                            </div>
                          </div>
                          <button className="btn btn-block btn-gclout-blue">SUBMIT</button>
                      </form>
                    </div>
                  </div>
              </Modal>
            )}

            
              <div className="main-details d-md-flex justify-content-btween">
                <div className="col-md-4 dashed-border-right details-column">
                  <h5 className="text-center">
                    {this.state.profile.firstName} {this.state.profile.lastName}
                  </h5>
                  {this.props.userId !== 'executive' ? 
                    <div className="d-flex justify-content-between friend-actions">
                      <a href="#" className="btn btn-gclout-blue">Message</a>
                      { this.props.userId !== 'friend' ? 
                      <button className="btn btn-gclout-blue-outline">Add Friend</button> :
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
                      </Manager> }
                    </div> : 
                    <p className="text-muted text-center">President</p> }
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
                      <h5 className="text-gclout-blue">300</h5>
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 dashed-border-right details-column mx-auto">
                  <p className="text-gclout-blue">Contact Information</p>
                  <p className="slightly-bold">Email Address</p>
                  <p>{this.props.user.email}</p>
                  <br />
                  <p className="slightly-bold">Phone Number</p>
                  <p>{this.props.user.phone}</p>
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
                      <p>{moment(this.props.user.dob).format("l")}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="officer-details">
            <p className="text-gclout-blue">Political Ofice Holders</p>
            <div
              className="d-flex officers justify-content-between"
              style={{ overflow: "auto" }}
            >
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile"
                  />
                </div>
                <p>Marks Webber</p>
                <small>President</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile1"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Governor</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile2"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Senator</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile3"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Council chairman</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile4"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Federal rep.</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile5"
                  />
                </div>
                <p>Marks Webber</p>
                <small>State rep.</small>
              </a>
              <a href="/profile" className="officer">
                <div className="officer-profile-image-wrapper">
                  <img
                    className="officer-profile-image"
                    src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                    alt="friend profile6"
                  />
                </div>
                <p>Marks Webber</p>
                <small>Councilor</small>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ProfileDetails;
