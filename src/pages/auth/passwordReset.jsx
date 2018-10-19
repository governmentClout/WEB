import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Redirect } from "react-router-dom";

class PasswordReset extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <div className="auth-page d-flex">
          <AuthBackground />
          <div className="m-auto col-md-6 bg-white auth-page-card">
            <h2 className="auth-card-title text-center mb-3">
              Your password canceled!
            </h2>
            <div className="col-md-8 offset-md-2 mb-4">
              <form className="auth-form my-4">
                <div className="form-group mt-4">
                  <label htmlFor="email">New password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="New password"
                    name="new_password"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email">Confirm password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Re-enter password"
                    name="confirm_password"
                    required
                  />
                </div>
                <button className="btn btn-block btn-gclout-blue mb-3">
                  CHANGE PASSWORD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordReset;
