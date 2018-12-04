import React, { Component } from "react";
import "../../assets/css/auth.css";
import AuthBackground from "./../../components/authBackground/authBackground";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';

class ResetPasswordCode extends Component {

    constructor(){
        super();

        this.state = {

            code: "",
            redirect: false

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

            reset_code : this.state.code

        };

        console.log(data);

        axios({

            method: 'post',
            url: `http://api.gclout.com:3000/resets/code`,
            data: data

        }).then(res => {

            console.log(res.data);
            if(res.data.uuid){
                
                swal('Operation Successful!');
                sessionStorage.setItem("resetuuid", res.data.uuid);
            
            }
            
            this.setState({
                
                code: "",
                redirect: true
            
            })

        }).catch(err => {

            console.log(err);

        })

    }
    render() {
        
        const { redirect } = this.state;

        if(redirect){
            return (
                <Redirect to={'/password-reset'}/>
            )
        }
        return (
                <div>
                    <div className="auth-page d-flex">
                        <AuthBackground />
                        <div className="authy">
                            <div className="m-auto bg-white auth-page-card col-lg-7 col-md-8">
                                <h2 className="auth-card-title text-center mb-3">
                                    Forgot Your Password
                                </h2>
                                <p className="auth-card-subtitle mb-3 text-center col-12 col-md-8 offset-md-2">
                                    Enter the code to rset the password
                                </p>
                                <div className="col-md-8 offset-md-2 mb-4">
                                    <form className="auth-form my-4" onSubmit={this.onSubmit}>
                                        <div className="form-group my-4">
                                            <label htmlFor="email">CODE</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter your code"
                                                name="code"
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
                </div>
        );
    }
}

export default ResetPasswordCode;
