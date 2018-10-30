import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Link, Redirect } from "react-router-dom";
import DatePicker from "react-date-picker";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
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
      provider: "email",
      loading: false
    };
    this.register = this.register.bind(this);
    /*     this.signup = this.signup.bind(this); */

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.setState({ loading: true})
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

    const url = "http://api.gclout.com:3000/users";
    console.log(data);

    /* console.log(this.state); */
    axios({

      method: "post",
      url: url,
      data: data,
      /* mode: 'no-cors', */
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      }
    })
      .then(response => {
        console.log(response);

        let responseJson = response;

        if (responseJson.data) {
          localStorage.setItem("data", JSON.stringify(responseJson));

          this.props.login(responseJson.data.user);
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false})
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

  register(res, type) {
    if (type === "facebook" && res.email) {
      let postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken
      };
    }

    if (type === "google" && res.w3.U3) {
      let postData = {
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
    const responseFacebook = response => {
      console.log(response);
      this.signup(response, "facebook");
    };

    const responseGoogle = response => {
      console.log(response);
      this.signup(response, "google");
    };

    const { password, email, phone, date_of_birth } = this.state;
    return (
      this.props.isLoggedIn ? <Redirect to="/" /> :
      <div>
        <div className="auth-page d-flex">
          <AuthBackground />
          <div className="m-auto col-lg-8 col-md-10 bg-white auth-page-card">
            <h2 className="auth-card-title text-center mb-3">
              Create An Account
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
                  <div className="form-row">
                    <div className="col-md" style={{ marginRight: "5px" }}>
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
                    <div className="col-md ml-2" style={{ marginLeft: "5px" }}>
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
                        I agree with terms and conditions
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block btn-gclout-blue"
                    onClick={this.handleSubmit}
                  >{this.state.loading ? <i class="fas fa-circle-notch fa-spin" /> : "Register"} </button>
                </form>
              </div>
              <div className="vertical-divider">OR</div>
              <div className="col-md-12 col-lg-6 mx-auto">
                <div className="social-buttons">
                  <FacebookLogin
                    appId="2171139129879186"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="social-button-facebook btn btn-block"
                    icon="fa-facebook"
                    textButton="Facebook"
                  />
                  <a href="#" className="social-button-twitter btn btn-block">
                    <i className="fab fa-twitter" />
                    Twitter
                  </a>
                  <GoogleLogin
                    className="social-button-google btn btn-block"
                    clientId="721177315518-ebi0q400rdhuvphrkff962s5encqd3b4.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  >
                    <i className="fab fa-google" /> Google
                  </GoogleLogin>
                  <a href="#" className="social-button-linkedin btn btn-block">
                    <i className="fab fa-linkedin-in" />
                    Linkedin
                  </a>
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
    );
  }
}

export default Register;
