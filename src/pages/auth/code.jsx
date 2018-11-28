import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Redirect } from "react-router-dom";

class PasswordCode extends Component {

  constructor(){
    super();

    this.state = {

      code: ""

    };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

  }

    onChange(e) {

        this.setState({

            [e.target.name]: e.target.value

        });

    }

  onSubmit(e){
    e.preventDefault();

    const data = {

      code : this.state.email

    };

    console.log(data);

  }
  render() {
    return (
      this.props.isLoggedIn ? <Redirect to="/" /> :
      <div>
        <div className="auth-page d-flex">
          <AuthBackground />
          <div className="m-auto col-md-6 bg-white auth-page-card">
            <h2 className="auth-card-title text-center mb-3">
              Reset Your Password
            </h2>
            <p className="auth-card-subtitle mb-3 text-center col-12 col-md-8 offset-md-2">
              We have sent a code to your email. Once you receive the code, enter it below to reset your password.
            </p>
            <div className="col-md-8 offset-md-2 mb-4">
              <form className="auth-form my-4" onSubmit={this.onSubmit}>
                <div className="form-group my-4">
                  <label htmlFor="email">Enter code</label>
                  <input
                    className="form-control"
                    type="code"
                    placeholder="Enter code"
                    name="email"
                    onChange={this.onChange}
                    value={this.state.code}
                    required
                  />
                </div>
                <button className="btn btn-block btn-gclout-blue mb-3">
                  RESET
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordCode;
