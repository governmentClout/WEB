import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }

  dataChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  postData(ev) {
    ev.preventDefault();
    this.setState({ loading: true });

    const email = this.state.email;
    const password = this.state.password;

    const data = {
      email,
      password
    };

    const url = "http://api.gclout.com:3000/login";

    if (this.state.email && this.state.password) {
      /* axios sraers here */
      console.log("e dey");

      axios({
        method: "post",
        url: url,
        data: data,
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        }
      })
        .then(response => {
          let responseJSON = response;

          if (responseJSON.data) {
            sessionStorage.setItem("uuid", responseJSON.data.user.uuid);
            sessionStorage.setItem("token", responseJSON.data.user.token);
            sessionStorage.setItem("data", JSON.stringify(responseJSON));
            this.props.login(responseJSON.data.user);
          } else {
            console.log("login error");
          }
        })
        .catch(error => {
          console.log(error);
          this.setState({ loading: false });
        });

      /* axios ends here */
    } else {
      console.log("noting here");
    }
  }

  render() {
    return this.props.isLoggedIn ? (
      <Redirect to="/" />
    ) : (
      <div className="auth-page d-flex">
        <AuthBackground />
        <div className="m-auto col-md-8 bg-white auth-page-card">
          <h2 className="auth-card-title text-center mb-3">
            Sign Into Your Account
          </h2>
          <div className="row --with-divider">
            <div className="col-md-6">
              <form
                className="auth-form mb-4"
                onSubmit={this.postData.bind(this)}
              >
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email address"
                    onChange={this.dataChange.bind(this)}
                    value={this.state.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.dataChange.bind(this)}
                    value={this.state.password}
                    placeholder="Password"
                    required
                  />
                </div>
                <button className="btn btn-block btn-gclout-blue">
                  {this.state.loading ? (
                    <i className="fas fa-circle-notch fa-spin" />
                  ) : (
                    "Sign in"
                  )}
                </button>
                <div className="form-group mt-2 d-flex">
                  <div className="form-check">
                    <input className="mr-2" type="checkbox" />
                    <label htmlFor="remember" className="form-check-label">
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="auth-page-link text-right"
                    style={{ width: "55%" }}
                  >
                    Forgot password
                  </Link>
                </div>
              </form>
            </div>
            <div className="vertical-divider">OR</div>
            <div className="col-md-6">
              <div className="social-buttons">
                <button className="social-button-facebook btn btn-block">
                  <i className="fab fa-facebook-f" />
                  Facebook
                </button>
                <button className="social-button-twitter btn btn-block">
                  <i className="fab fa-twitter" />
                  Twitter
                </button>
                <button className="social-button-google btn btn-block">
                  <i className="fab fa-google-plus-g" />
                  Google
                </button>
                <button className="social-button-linkedin btn btn-block">
                  <i className="fab fa-linkedin-in" />
                  Linkedin
                </button>
              </div>
              <p className="text-center">
                Dont have an account?{" "}
                <Link className="auth-page-link" to="/register">
                  Sign up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
