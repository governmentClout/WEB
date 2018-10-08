import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";

class Register extends Component {
  state = {
    date_of_birth: new Date(1980, 1, 1)
  };
  onDateChange = date_of_birth => this.setState({ date_of_birth });
  render() {
    return (
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
                <a href="#" className="social-button-facebook btn btn-block">
                  <i className="fab fa-facebook-f" />
                  Facebook
                </a>
                <a href="#" className="social-button-twitter btn btn-block">
                  <i className="fab fa-twitter" />
                  Twitter
                </a>
                <a href="#" className="social-button-google btn btn-block">
                  <i className="fab fa-google-plus-g" />
                  Google
                </a>
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
    );
  }
}

export default Register;
