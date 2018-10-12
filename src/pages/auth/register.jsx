import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import NavBar from "../../components/navbar/navBar"
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";
import { PostData } from "../../services/PostData";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.register = this.register.bind(this);
  }

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

    PostData("register", postData).then(result => {
      let responseJson = result;
      if (responseJson.userData) {
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({
          redirectToReferrer: true
        });
      }
    });
  }

  state = {
    date_of_birth: new Date(1980, 1, 1)
  };
  onDateChange = date_of_birth => this.setState({ date_of_birth });

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/"} />;
    }

    const responseFacebook = response => {
      console.log(response);
      this.signup(response, "facebook");
    };

    const responseGoogle = response => {
      console.log(response);
      this.signup(response, "google");
    };
    const googleId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
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
              <form className="auth-form mb-4">
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
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
                    required
                  />
                </div>
                <div className="form-row flex-nowrap">
                  <div clssName="col" style={{ marginRight: "5px" }}>
                    <label htmlFor="phone-number">Phone number</label>
                    <input
                      type="phone"
                      className="form-control"
                      name="phone-number"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div clssName="col ml-2" style={{ marginLeft: "5px" }}>
                    <label htmlFor="date-of-birth">Date of birth</label>
                    <DatePicker
                      className="form-control form-date"
                      onChange={this.onDateChange}
                      value={this.state.date_of_birth}
                      Calendar={null}
                    />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <div className="form-check">
                    <input className="mr-2" type="checkbox" required />
                    <label htmlFor="agreement" className="form-check-label">
                      I agree with terms and conditions
                    </label>
                  </div>
                </div>
                <button className="btn btn-block btn-gclout-blue">
                  CREATE ACCOUNT
                </button>
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
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  className="btn btn-block social-button-google"
                />
                {/*<a href="#" className="social-button-linkedin btn btn-block">
                  <i className="fab fa-linkedin-in" />
                  Linkedin
                </a>*/}
              </div>
              <p class="text-center">
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
    );
  }
}

export default Register;
