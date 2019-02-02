import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Link, Redirect } from "react-router-dom";
import DatePicker from "react-date-picker";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
/*
import LinkedIn from "linkedin-login-for-react";
*/
/*import LinkedIn from 'react-linkedin-login'*/
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
        redirect: false,
        password: "",
        email: "",
        phone: "",
        date_of_birth: new Date(1980, 1, 1),
        tosAgreement: "",
        provider: "email",
        user: null,
        token: '',
        loading: false,
        isAuthenticated: false,
    };
    //this.register = this.register.bind(this);
    this.signup = this.signup.bind(this);

    this.onChange = this.onChange.bind(this);
    // this.responseLinkedin = this.responseLinkedin.bind(this);
    // this.responseTwittrer = this.responseTwittrer.bind(this);
    // this.responseTwitter = this.responseTwitter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentDidMount(){
            const e = document.createElement("script");
            e.type = "text/javascript";
            e.authorize = true;
            e.src = "http://platform.linkedin.com/in.js?async=true";
            /*const t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)*/
            e.api_key = "77pb6qtint69q4";
            document.body.appendChild(e);
    }

    linkedInLogin = () => {
        setTimeout(function(){
            this.getUserDetails()
        }.bind(this),1000);
        console.log( "Loaded" )
    }


/*    linkedInLogin = () => {

    this.getUserDetails();
    console.log('clicked');

    }*/


    getUserDetails() {
        window.IN.User.authorize(function(){
            window.IN.API.Profile("me")
                .fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl"])
                .result(function(result) {
                    console.log(result);
                    alert("Successfull login from linkedin : "+ result.values[0].firstName + " " + result.values[0].lastName);
                })
                .error(function(err) {
                    console.log('Import error - Error occured while importing data')
                });
        });
    }


    handleSubmit(e) {
    this.setState({

        loading:

            true });

    const d = new Date();
    const newDate = d.getFullYear();

    if(newDate - this.state.date_of_birth < 12){

        toast.error("Too young to be on this platform");

        this.setState({

            loading: false

        })

    }

    e.preventDefault();

    const data = {

      phone: this.state.phone,
      email: this.state.email,
      dob: this.state.date_of_birth,
      password: this.state.password,
      tosAgreement: this.state.tosAgreement,
      provider: "email",
      redirect: false
      //redirectToReferrer: false
    };

    const url = "http://api.gclout.com:3000/users";
    console.log(data);

    /* console.log(this.state); */
    axios({
      method: "post",
      url: url,
      data: data,
      /* mode: 'no-cors', */
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    })
      .then(response => {

        let responseJson = response;
        console.log(responseJson);

        if (responseJson.data) {

          sessionStorage.setItem("data", JSON.stringify(responseJson));
          sessionStorage.setItem("token", responseJson.data.Token);
          sessionStorage.setItem("uuid", responseJson.data.uuid);

          this.props.login(responseJson.data.user);
          this.setState({
            redirect: true
          })
        }
      })
      .catch(error => {
        console.log(error);
        const myError = {
          response: {
            data: {
              "Error" : [
                'Please try again in a little while'
              ]
            }
          }
        }
        this.notify(error || myError)
        this.setState({ loading: false });
      });
  }

  onChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  // toggleBox(){
  //   this.setState({tosAgreement : !this.state.tosAgreement});
  //   console.log(this.state.tosAgreement);
  // }
/*callbackLinkedIn = (error, code, redirectUri) => {
      if(error){
console.log('something jus happen rai now')
      } else {
      }
};*/
  signup(res, type) {
    //let postData;

    if (type === "facebook" && res.email) {

      const data = {

        email: res.email,
        provider: type,
        tosAgreement: true

      }
      return data;
    }

    if (type === "google" && res.w3.U3) {

      const data = {

        provider: type,
        email: res.w3.U3,
        tosAgreement: true,
        password: "password"

      };

      console.log(data);
      const url = "http://api.gclout.com:3000/users";

      axios({

        method: "post",
        url: url,
        data: data,
        headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          }

      }).then(response => {

              console.log(response.data);
              sessionStorage.setItem('id', res.data.uuid);
              let responseJson = response.data;

              if (responseJson) {
//                console.log(responseJson.uuid);
                  sessionStorage.setItem("data", JSON.stringify(responseJson));
                  this.props.login(responseJson.data.user);
                /*this.setState({
                  redirect: true
                })*/
              }

      })
          .catch(error => {

              console.log(error)
              this.notify(error)
              this.setState({

                  loading: false

              });

          });

    }

    /*if(type = "linkedin") {
        const data = {
            provider: type,
            email: "t@u.co"
        };
        console.log(data);
    }*/

    if (type === "twitter" && res.email) {
      console.log('twitter');
     const data = {

        provider: type,
        email: res.email,
        tosAgreement: true

      };

      console.log(data);

    }

  }

  onDateChange = date_of_birth => this.setState({ date_of_birth });

  errorToast = null;
  notify = error => {
    // if (this.errorToast) {
    //   toast.dismiss(this.errorToast);
    // }
    let errorArray = error.response.data.Error
    if (errorArray.constructor === Array ) {
      
      errorArray.forEach(error => {
        if (error === 'tosAgreement cannot be false') {
          error = "you must agree to the terms and conditions"
        }
        this.errorToast = toast.error(
          "Registration Failed: " + error,
          {
            position: toast.POSITION.TOP_LEFT,
            autoClose: false
          }
        );
      });
    } else {
      this.errorToast = toast.error(
        "Registration Failed: " + errorArray,
        {
          position: toast.POSITION.TOP_LEFT,
          autoClose: false
        }
      );
    }
  };

  render() {
    const responseFacebook = response => {
      console.log(response);
      this.signup(response, "facebook");
    };
        const responseGoogle = response => {
            console.log(response);
            this.signup(response, "google");
        };

    // const { password, email, phone, tosAgreement, data_of_birth } = this.state;

    // function responseLinkedin(response) {
    //     console.log(response);
    //     this.signup(response, "linkedin");
    // }

    function responseTwitter(response) {
          console.log(response);
          this.signup(response, "twitter");
      };

    // function responseTwittrer(response) {
    //     const token = response.headers.get('x-auth-token');
    //     response.json().then(user => {
    //         if (token) {
    //             this.setState({isAuthenticated: true, user: user, token: token});
    //         }
    //     });
    // };


    const { password, email, phone, redirect, tosAgreement } = this.state;
    if(redirect){

        return (<Redirect to={"/profile/create"}/>)
    }

    return (
      <div>
        <div className="auth-page d-flex">
          <AuthBackground />
          <div className="authy">
            <div className="m-auto bg-white auth-page-card col-lg-7 col-md-8">
              <h2 className="auth-card-title text-center mb-3">
                Create A GClout Account
              </h2>
              <div className="row --with-divider">
                <div className="col-md-12 col-lg-6 mx-auto">
                  <form className="auth-form mb-4" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={ev => this.onChange("email", ev)}
                        value={email}
                        placeholder="user@gclout.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="********"
                        onChange={ev => this.onChange("password", ev)}
                        value={password}
                        required
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-md left">
                        <label htmlFor="phone">Phone number</label>
                        <input
                          type="phone"
                          className="form-control"
                          name="phone"
                          placeholder="0812345786"
                          onChange={ev => this.onChange("phone", ev)}
                          value={phone}
                          required
                        />
                      </div>
                      <div className="col-md right">
                        <label>Date of birth</label>
                        <DatePicker
                          className="form-date"
                          onChange={this.onDateChange}
                          value={this.state.date_of_birth}
                          Calendar={null}
                        />
                      </div>
                    </div>
                    <div className="form-group mt-2">
                      <div className="form-check">
                        <input
                          className="mr-2"
                          type="checkbox"
                          ref="check_me"
                          value={tosAgreement}
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
                          I agree with terms and conditions
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-block btn-gclout-blue"
                      onClick={this.handleSubmit}
                    >
                      {this.state.loading ? (
                        <i className="fas fa-circle-notch fa-spin" />
                      ) : (
                        "Register"
                      )}{" "}
                    </button>
                  </form>
                </div>
                <div className="vertical-divider">OR</div>
                <div className="col-md-12 col-lg-6 mx-auto">
                  <div className="social-buttons">

                      <GoogleLogin
                          className="social-button-google btn btn-block"
                          clientId="721177315518-ebi0q400rdhuvphrkff962s5encqd3b4.apps.googleusercontent.com"
                          buttonText="Google"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                      >
                          <i className="fab fa-google" /> Google
                      </GoogleLogin>

                      <TwitterLogin
                         // loginUrl="http://localhost:3000/login/auth/twitter"
                          /*onFailure={this.onFailed}*/
                          /*onSuccess={this.onSuccess}*/
                          loginUrl="http://api.gclout.com:3000/users"
                          onSuccess={responseTwitter}
                          onFailure={responseTwitter}
                          forceLogin={true}
                          className="social-button-twitter btn btn-block"
                          clientKey="JNjAaqePXPy5cXMjdlPYXuMWf"
                          requestTokenUrl="http://api.gclout.com:3000/users"
                          //requestTokenUrl="http://localhost:3000/login/auth/twitter/reverse"
                      >
                        <i className="fab fa-twitter" /> Twitter
                      </TwitterLogin>

                      <FacebookLogin
                      appId="2171139129879186"
                      autoLoad={true}
                      fields="name,email,picture"
                      callback={responseFacebook}
                      cssClass="social-button-facebook btn btn-block"
                      icon="fa-facebook"
                      textButton="Facebook"
                    />

                      {/* <LinkedIn
                          clientId="77pb6qtint69q4"
                          callback={this.callbackLinkedIn}
                          text="Login With LinkedIn"
                          onSuccess={responseLinkedin}
                          onFailure={responseLinkedin}
                          className="social-button-linkedin btn btn-block"
                      /> */}
                      <button
                        className="social-button-linkedin btn btn-block">
                        <i className="fab fa-linkedin-in" />
                        Linkedin
                      </button>

                  </div>
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link className="auth-page-link" to="/login">
                      Sign in
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default Register;
