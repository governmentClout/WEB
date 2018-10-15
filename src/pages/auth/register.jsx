import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import NavBar from "../../components/navbar/navBar";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";
import { PostData } from "../../services/PostData";
import axios from "axios";

class Register extends Component {

  constructor(props) {

    super(props);

    this.state = {

      redirectToReferrer: false,
      password: "",
      email: "",
      phone: "",
      date_of_birth: new Date(1980, 1, 1),
      tosAgreement: "",
      provider: "email"
    };
    this.register = this.register.bind(this);
    /*     this.signup = this.signup.bind(this); */

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      phone: this.state.phone,
      email: this.state.email,
      dob: this.state.date_of_birth,
      password: this.state.password,
      tosAgreement: this.state.tosAgreement,
      provider: "email",
      redirectToReferrer: false
    };

    const url = "http://api.staybusy.ng:3000/users";
    console.log(data);

    /* console.log(this.state); */
  axios({
    
    method: 'post',
    url: url,
    data: data,
    /* mode: 'no-cors', */
    headers: {

      'Content-Type': 'text/plain;charset=utf-8',

    }

  }).then(response => {

    console.log(response);

    let responseJson = response;

    if(responseJson.data) {
    
      sessionStorage.setItem('data', responseJson);

      this.setState({

        redirectToReferrer: true 

      })

    }

  
  }).catch(error => {

    console.log(error);
  
  })

}

  onChange(key, event){

    this.setState({

      [key] : event.target.value

    });

  }

  // toggleBox(){
  //   this.setState({tosAgreement : !this.state.tosAgreement});
  //   console.log(this.state.tosAgreement);
  // }

  

  register(res, type) {
    let postData;

    if (type === "facebook" && res.email) {
      
      postData = {
      
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken
      
      };
    
    }

    if (type === "google" && res.w3.U3) {
    
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token
    
      };
    
    }
  }

  onDateChange = date_of_birth => this.setState({ date_of_birth });

  render() {
        
    if (this.state.redirectToReferrer || sessionStorage.getItem('data')) {
      
      return ( <Redirect to = {'/'}/>)
    
    }

    const responseFacebook = response => {
      console.log(response);
      this.signup(response, "facebook");
    };

    const responseGoogle = response => {
      console.log(response);
      this.signup(response, "google");
    };

    const { password, email, phone, tosAgreement, data_of_birth } = this.state;
    return (
      <div>
        <NavBar />
        <div className="auth-page d-flex">
          <AuthBackground />
          <div className="m-auto col-md-8 bg-white auth-page-card">
            <h2 className="auth-card-title text-center mb-3">
              Create An Account
            </h2>
            <div className="row --with-divider">
              <div className="col-md-6">
                <form className="auth-form mb-4" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={ev => this.onChange("email", ev)}
                      value={email}
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={ev => this.onChange("password", ev)}
                      value={password}
                      required
                    />
                  </div>
                  <div className="form-row flex-nowrap">
                    <div className="col" style={{ marginRight: "5px" }}>
                      <label htmlFor="phone">Phone number</label>
                      <input
                        type="phone"
                        className="form-control"
                        name="phone"
                        placeholder="Phone number"
                        onChange={ev => this.onChange("phone", ev)}
                        value={phone}
                        required
                      />
                    </div>
                    <div className="col ml-2" style={{ marginLeft: "5px" }}>
                      <label htmlFor="date-of-birth">Date of birth</label>
                      <DatePicker
                        className="form-control form-date"
                        onChange={this.onDateChange}
                        name={data_of_birth}
                        value={this.state.date_of_birth}
                        Calendar={null}
                      />
                    </div>
                  </div>
                </div>
                <input 
                type="submit" 
                value="Login" 
                className="btn btn-block btn-gclout-blue" 
                onClick={this.handleSubmit}
                />
              </form>
            </div>
            <div className="vertical-divider">OR</div>
            <div className="col-md-6">
              <div className="social-buttons">
                <FacebookLogin
                  appId="2171139129879186"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="social-button-facebook btn btn-block"
                  icon="fa-facebook"
                />
                <a href="#" className="social-button-twitter btn btn-block">
                  <i className="fab fa-twitter" />
                  Twitter
                </a>
                <GoogleLogin
                clientId = "721177315518-ebi0q400rdhuvphrkff962s5encqd3b4.apps.googleusercontent.com"
                buttonText = "Login with Google"
                onSuccess = {responseGoogle}
                onFailure = { responseGoogle}
                />
                {<a href="#" className="social-button-linkedin btn btn-block">
                  <i className="fab fa-linkedin-in" />
                  Linkedin
                </a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
