import { PostData } from './../../services/PostData';
import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props){

    super(props);

    this.state = {

      email: '',
      password: '',
//      loggedIn: false
    
    };

    /* this.handleChange=this.handleChange.bind(this);*/
    // this.login=this.login.bind(this); 

  }

  dataChange(ev){

    this.setState({

      [ev.target.name]: ev.target.value
    
    })
  
  }
  
  postData(ev) {

    ev.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    const data = {

      email,
      password
    
    }

    const url = "http://api.staybusy.ng:3000/login";

    axios({
      method: 'post',
      url: url,
      data: data,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      }
    }).then(response => {

      console.log(response);
    
    }).catch(error => {

      console.log(error);
    
    })


/*     axios('http://api.staybusy.ng:3000/login', data).then(response => {

    console.log(response);

  }); */

  }

  /* login(){

    console.log("login")
  
  }

  onChange(){
    
  } */

  render() {

    /* if(this.state.loggedIn){

      return <Redirect to="/" />
    
    } */
    
    return (
      <div className="auth-page d-flex">
        <AuthBackground />
        <div className="m-auto col-md-8 bg-white auth-page-card">
          <h2 className="auth-card-title text-center mb-3">
            Sign Into Your Account
          </h2>
          <div className="row --with-divider">
            <div className="col-md-6">
              <form onSubmit={this.postData.bind(this)} className="auth-form mb-4">
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
                    onChange = {
                      this.dataChange.bind(this)
                    }
                    value={this.state.password} 
                    placeholder="Password"
                    required
                  />
                </div>
                <button className="btn btn-block btn-gclout-blue">
                  SIGN IN
                </button>
                <div className="form-group mt-2 d-flex">
                  <div className="form-check">
                    <input className="mr-2" type="checkbox"/>
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
                <a href="#" className="social-button-linkedin btn btn-block">
                  <i className="fab fa-linkedin-in" />
                  Linkedin
                </a>
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

  submit(e){

    this.setState({
      
      loggedIn: true
    
    })
    
    e.preventDefault();

    window.axios.post('http://api.staybusy.ng:3000/login', {

    
    name: this.state.email,
    password: this.state.password
    
  }).then(response => {

    console.log(response);

    this.setState({
      
      loggedIn: true 
  
    })

    localStorage.setItem('token', response.data.access_token)
  
  }).catch(error => {

    console.log(error);

  })
  
  }

}

export default Login;
