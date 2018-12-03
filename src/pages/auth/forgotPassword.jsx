import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import toastr from 'toastr';

class ForgotPassword extends Component {

  constructor(){
    super();

    this.state = {

      email: ""

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

      email : this.state.email

    };

    axios({

        method: 'post',
        url: `http://api.gclout.com:3000/resets`,
        data: data

    }).then(res => {

      console.log(res.data);
      
      if(res.data.Success){

        this.setState({
      
          email: ""
      
        });

        toastr.success("Please Check your email for your rest code");

      } else {

        toastr.info("Something went wrong")
      }

    }).catch(err => {

      console.log(err);

    })

  }

  render() {
    return (
      this.props.isLoggedIn ? <Redirect to="/" /> :
      <div>
        <div className="auth-page d-flex">
          <AuthBackground />
          <div className="m-auto col-md-6 bg-white auth-page-card">
            <h2 className="auth-card-title text-center mb-3">
              Forgot Your Password
            </h2>
            <p className="auth-card-subtitle mb-3 text-center col-12 col-md-8 offset-md-2">
              Enter the email address that you used to register. We’ll send you
              an email with a link to reset your password.
            </p>
            <div className="col-md-8 offset-md-2 mb-4">
              <form className="auth-form my-4" onSubmit={this.onSubmit}>
                <div className="form-group my-4">
                  <label htmlFor="email">Email address</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
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

export default ForgotPassword;
