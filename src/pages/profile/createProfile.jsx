import React, { Component } from "react";
import NavBarAuthenticated from "../../components/navbar/navBarAuthenticated";
import Footer from "../../components/footer/footer";
import UploadModal from "../../components/uploadModal/uploadModal";
import "../../assets/css/profile.css";
import axios from "axios";

class EditProfile extends Component {
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
      phone: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
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

  /* postData(ev){

    ev.preventDefault();

    const id = sessionStorage.getItem('uuid');
  
    const uuid = id;
    const nationality = this.state.nationality;
      const state = this.state.state;
      const lga = this.state.lga;
    const photo = this.state.photo;
      const firstName = this.state.fname;
      const lastName = this.state.lname;

    const data = {

      uuid,
      nationality,
      state,
      lga,
      photo,
      firstName,
      lastName
    
    }

    const url = "http://api.staybusy.ng:3000/profiles";

    axios({

      method: 'post',
      url: url,
      data: data,
      headers: {

        'Content-Type': 'text/plain;charset=utf-8',

      }
    }).then(response => {

      console.log(response);

    })
  
  } */

  handleChange(event) {
    event.preventDefault();

    // console.log(event.target.value);
    console.log(event);
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);

    let data = {};
    data[name] = value;

    this.setState(data);
  }

  /* dataChange(ev) {

    this.setState({

      [ev.targer.name]: ev.target.value

    })

  }

  postData(ev) {

    ev.preventDefault();

    const fname = this.state.fname, 
          lname = this.state.lname, 
          email = this.state.email, 
          phone = this.state.phone, 
          nationality = this.state.nationality, 
          state = this.state.state, 
          lga = this.state.lga, 
          password = this.state.password, 
          cPassword = this.state.cPassword

  } */

  /*componentDidMount() {

      const uuid = sessionStorage.getItem('uuid'),
            token = sessionStorage.getItem('token');

    axios.get('http://api.staybusy.ng:3000/users')
    .then(res => console.log(res));

      /* axios({

        method: 'get',
        url: 'http://api.staybusy.ng:3000/users',
        headers: {

          uuid: '46b5a59b-b9bc-4df2-b49f-12786374bd71',
          token: 'sdwus6Z2isARGUw6WFf8ZEijXsFyrlj5too0fj5qNITTp2Ts6STSk7mVoKQCTV1OuedmnGgoLV0cYreFDOWcmM3mmt1SwvGMYrtE'
        
          }

      }).then(response => {

              console.log(response);

      }).then(error => {

        console.log(error);

      }) */

  /* this.findUserById(this.props.params.uuid) 




    this.findUserById(this.props.params.id) 

  } */

  /* editProfile(id){

    this.setState({

      editMode: true

    })

    const uuid = sessionStorage.getItem('uuid'),
      token = sessionStorage.getItem('token');

    let contactId = uuid;
    alert(contactId);

  } */

  render() {
    return (
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
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                alt="profile image"
              />
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
                    <label htmlFor="nationality">Nationality</label>
                    <input
                      name="nationality"
                      className="form-control"
                      type="text"
                      value={this.state.nationality}
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
                      placeholder="Kosofe"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-gclout-blue" type="submit">
                    Create Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
        <UploadModal
          show={this.state.showModal}
          handleClose={this.shouldHideModal}
          uploadType={this.state.uploadType}
        />
        >
      </div>
    );
  }

  submit(e) {
    e.preventDefault();

    const uuid = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    //    console.log(uuid);

    /*  axios.put('http://api.staybusy.ng:3000/profiles', {

    "uuid": uuid,
    "nationality": this.state.nationality,
    "state": this.state.state,
    "lga": this.state.lga,
    "photo": this.state.photo,
    "firstName": this.state.fname,
    "lastName": this.state.lname
    
  }).then(response => {

    console.log(response);

  }) */
    const url = "http://api.staybusy.ng:3000/profiles/";

    const data = {
      uuid: uuid,
      nationality: this.state.nationality,
      state: this.state.state,
      lga: this.state.lga,
      photo: "http://simpleicon.com/wp-content/uploads/user1.png",
      firstName: this.state.fname,
      lastName: this.state.lname
    };

    const userToken = {
      token: token
    };

    console.log(userToken);

    console.log(data);

    /* axios({

    method: 'put',
    url: url,
    data: data,
    mode: 'no-cors', 
    headers: {
      
      'token': token,
      'uuid': uuid,
      'Content-Type': 'text/plain;charset=utf-8;application/json',
      'Accept': 'application/json; charset=utf-8'
      
    }

  }).then(response => {

    console.log(response);
  
  }).catch(error => {

    console.log(error);

  }) */
  }
}

export default EditProfile;
