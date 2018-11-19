import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Home extends Component {
    state = { myProfile: "", redirect: false };
    componentDidMount() {
        if (this.state.myProfile === "") {
            axios({
                method: "get",
                url: `http://api.gclout.com:3000/profiles/${this.props.user.uuid}`,
                headers: {
                    uuid: this.props.user.uuid,
                    token: this.props.user.token
                }
            })
                .then(response => this.setState({ myProfile: response.profile }))
                .catch(err => this.setState({ redirect: true }));
        }
    }
    render() {
        return !this.props.isLoggedIn ? (
            <Redirect to="/login" />
        ) : this.state.redirect ? (
            <Redirect to="/profile/create" />
        ) : (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Click on get started to start</p>
                </header>
            </div>
        );
    }
}

export default Home;
