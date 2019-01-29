import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import GoogleLogin from "react-google-login";
import { API_URL } from "../../components/config";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
      redirectToReferrer: false
    };
    this.signin = this.signin.bind(this);
  }

  dataChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  postData(ev) {
    ev.preventDefault();
    this.setState({ loading: true });
    const email = this.state.email,
      password = this.state.password,
      provider = "email",
      data = {
        email,
        password,
        provider
      },
      url = `${API_URL}/login`;

    axios({
      method: "post",
      url: url,
      data: data,
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      }
    })
      .then(response => {
        let responseJSON = response
        if (responseJSON.data) {
          sessionStorage.setItem("uuid", responseJSON.data.user.uuid);
          sessionStorage.setItem("token", responseJSON.data.user.token);
          sessionStorage.setItem("data", JSON.stringify(responseJSON));
          let that = this;
          async function f() {
            that.props.login(responseJSON.data.user)
          }
          f().then(that.setState(() => ({
            redirectToReferrer: true
          })))
        }
      })
      .catch(error => {
        this.notify(error);
        this.setState({ loading: false });
      });
  }

  signin(res, type) {
    if (type === "google" && res.w3.U3) {
      const data = {
        provider: type,
        email: res.w3.U3
      };
      const url = "http://api.gclout.com:3000/login";
      axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
      })
        .then(response => {
          if (response.data) {
            sessionStorage.setItem("data", JSON.stringify(response));
            let that = this;
            async function f() {
              that.props.login(response.data.user)
            }
            f().then(that.setState(() => ({
              redirectToReferrer: true
            })))
          }
        })
        .catch(error => {
          this.notify(error);
          this.setState({
            loading: false
          });
        });
    }
  }
  errorToast = null;
  notify = error => {
    if (this.errorToast) {
      toast.dismiss(this.errorToast);
    }
    if (error.response.status === 404) {
      error = "invalid email or password"
    }  else {
      return error
    }
    this.errorToast = toast.error(
      "Login Failed: " + error,
      {
        position: toast.POSITION.TOP_LEFT,
        autoClose: false
      }
    );
  };

  render() {

    const responseGoogle = response => {
      console.log(response);
      this.signin(response, "google");
    };
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    return (
      <div className="auth-page d-flex">
        <AuthBackground />
        <div className="authy">
          <div className="m-auto bg-white auth-page-card col-lg-7 col-md-8">
            <h2 className="auth-card-title text-center mb-3">
              Sign Into Your GClout Account
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
                  <GoogleLogin
                    className="social-button-google btn btn-block"
                    clientId="721177315518-ebi0q400rdhuvphrkff962s5encqd3b4.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  >
                    <i className="fab fa-google" /> Google
                    </GoogleLogin>
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
        <ToastContainer />
      </div>
    );
  }
}

export default Login;