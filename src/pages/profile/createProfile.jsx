import NavBarAuthenticated from "../../components/navbar/navBarAuthenticated";
import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import UploadModal from "../../components/uploadModal/uploadModal";
import "../../assets/css/profile.css";
import axios from "axios";

class createProfile extends Component {

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
      photo: ""
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
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

  dataChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  createProfile(e) {

    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    console.log(id);
    console.log(token);

    e.preventDefault();

    /*     const url = "http://localhost:3000/profiles"; */

    const url = "http://api.gclout.com:3000/profiles";

    const data = {
      uuid: sessionStorage.getItem("uuid"),
      nationality: this.state.nationality,
      state: this.state.state,
      lga: this.state.lga,
      photo: "https://picsum.photos/200/300",
      firstName: this.state.fname,
      lastName: this.state.lname,
      token: sessionStorage.getItem("token")
    };

    console.log(data);

    /* const headerConfig = {

      headers: {

        "token": tk,
        "uuid": id,
        "Accept": "application/json",
        "Content-Type": "application/json"

      }
    }; */

    /*     axios.post(url, data, headerConfig).then(res => {
            console.log(res);
          })
          .catch(err => console.log(err)); */
    axios({
        method: "post",
        url: "http://api.gclout.com:3000/profiles",
        data: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          token: token,
          uuid: id
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));

    console.log(data);

    console.log(data);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(this.state);
  }

  render() {
    return ( <
      div className = "app-wrapper" >
      <
      NavBarAuthenticated / >
      <
      div className = "container app-container d-md-flex col-md-8 nx-auto" >
      <
      div className = "app-content" >
      <
      h4 className = "page-title" > Create your profile < /h4> <
      div className = "profile-cover-image-wrapper" >
      <
      img className = "profile-cover-image"
      src = "https://res.cloudinary.com/plushdeveloper/image/upload/v1539363181/gclout/Rectangle_2.1.png"
      alt = "cover" /
      >
      <
      button className = "floating-edit-button-wrapper"
      onClick = {
        () => this.shouldShowModal("Cover Photo")
      } >
      <
      svg width = "22"
      height = "22"
      viewBox = "0 0 22 22"
      fill = "none"
      xmlns = "http://www.w3.org/2000/svg" >
      <
      path d = "M0.875 16.9032V21.122H5.09375L17.5362 8.67945L13.3175 4.4607L0.875 16.9032ZM20.7987 5.41695C21.2375 4.9782 21.2375 4.26945 20.7987 3.8307L18.1663 1.1982C17.7275 0.759453 17.0187 0.759453 16.58 1.1982L14.5212 3.25695L18.74 7.4757L20.7987 5.41695Z"
      fill = "white" /
      >
      <
      /svg> < /
      button > <
      /div> <
      div className = "lifted-profile-image-wrapper" >
      <
      img className = "lifted-profile-image"
      src = "https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
      alt = "profile image" /
      >
      <
      button className = "floating-edit-button-wrapper --profile-picture"
      onClick = {
        () => this.shouldShowModal("Profile Photo")
      }
      onChange = {
        this.handleChange
      }
      name = "photo"
      value = {
        this.state.photo
      } >
      <
      svg width = "22"
      height = "22"
      viewBox = "0 0 22 22"
      fill = "none"
      xmlns = "http://www.w3.org/2000/svg" >
      <
      path d = "M0.875 16.9032V21.122H5.09375L17.5362 8.67945L13.3175 4.4607L0.875 16.9032ZM20.7987 5.41695C21.2375 4.9782 21.2375 4.26945 20.7987 3.8307L18.1663 1.1982C17.7275 0.759453 17.0187 0.759453 16.58 1.1982L14.5212 3.25695L18.74 7.4757L20.7987 5.41695Z"
      fill = "white" /
      >
      <
      /svg> < /
      button > <
      /div> <
      div className = "col-md-9 mx-auto" >
      <
      form >
      <
      div className = "form-row" >
      <
      div className = "form-group col-md" >
      <
      label htmlFor = "Fname" > First Name < /label> <
      input name = "fname"
      className = "form-control"
      type = "text"
      value = {
        this.state.fname
      }
      onChange = {
        this.onChange
      }
      placeholder = "John"
      required /
      >
      <
      /div> <
      div className = "form-group col-md" >
      <
      label htmlFor = "lname" > Last Name < /label> <
      input name = "lname"
      className = "form-control"
      type = "text"
      placeholder = "Doe"
      value = {
        this.state.lname
      }
      onChange = {
        this.onChange
      }
      required /
      >
      <
      /div> < /
      div >


      <
      div className = "form-row" >
      <
      div className = "form-group col-md" >

      <
      /div>  <
      div className = "form-group col-md" >
      <
      label htmlFor = "nationality" > Nationality < /label> <
      input name = "nationality"
      className = "form-control"
      type = "text"
      value = {
        this.state.nationality
      }
      onChange = {
        this.onChange
      }
      placeholder = "Nigerian"
      required /
      >
      <
      /div> < /
      div > <
      div className = "form-row" >
      <
      div className = "form-group col-md" >
      <
      label htmlFor = "state" > State < /label>  <
      select name = "state"
      className = "form-control"
      defaultValue = "lag"
      value = {
        this.state.state
      }
      onChange = {
        this.onChange
      }
      required >
      <
      option value = "lag" > Lagos < /option> <
      option value = "ogun" > Ogun < /option> <
      option value = "osun" > Osun < /option> < /
      select > <
      /div> <
      div className = "form-group col-md" >
      <
      label htmlFor = "lga" > L.G.A < /label> <
      input name = "lga"
      className = "form-control"
      type = "text"
      value = {
        this.state.lga
      }
      onChange = {
        this.onChange
      }
      placeholder = "Kosofe"
      required /
      >
      <
      /div> < /
      div > <
      div className = "d-flex" >
      <
      button className = "btn btn-gclout-blue"
      onClick = {
        this.createProfile
      }
      type = "submit" >
      Create Profile <
      /button> < /
      div > <
      /form> < /
      div > <
      /div> < /
      div > <
      Footer / >
      <
      UploadModal show = {
        this.state.showModal
      }
      handleClose = {
        this.shouldHideModal
      }
      uploadType = {
        this.state.uploadType
      }
      /> > <
      /div>
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

export default createProfile;
