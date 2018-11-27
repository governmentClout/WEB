import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Redirect } from "react-router-dom";
import axios from 'axios';

class PasswordReset extends Component {

  constructor(){
    super();

    this.state = {

      code: "",
      uuid: "",
      password: "",
      confirm_password: ""

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

      reset_code: this.state.code,
      uuid: sessionStorage.getItem('resetuuid'),
      password: this.state.password

    };

    console.log(data);
    axios({

        method: 'put',
        data: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8;application/json",
        },
        url: `http://api.gclout.com:3000/resets`

    }).then(res => {

      console.log(res.data);

    }).catch(err => {

      console.log(err);

    })

  }

  render() {
    return this.props.isLoggedIn ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div className="auth-page d-flex">
          <AuthBackground />
          <div className="m-auto col-md-6 bg-white auth-page-card">
            <h2 className="auth-card-title text-center mb-3">
              Your password canceled!
            </h2>
            <div className="col-md-8 offset-md-2 mb-4">
              <form className="auth-form my-4" onSubmit={this.onSubmit}>
                  <div className="form-group mt-4">
                      <label htmlFor="email">code</label>
                      <input
                          className="form-control"
                          type="text"
                          placeholder="code sent to your mail"
                          name="code"
                          onChange={this.onChange}
                          value={this.state.code}
                          required
                      />
                  </div>
                <div className="form-group mt-4">
                  <label htmlFor="email">New password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="New password"
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}
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
                    onChange={this.onChange}
                    value={this.state.confirm_password}
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
