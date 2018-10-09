import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import {Redirect} from 'react-router-dom';

class Home extends Component {

/*   constructor(props) {
    super(props);
    this.state = {

      name: '',
      redirect: false,

    };
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem('userData'));
    console.log(data);
    this.setState({
      name: data.userData.name
    })
  } */

  render() {

    /* if (!sessionStorage.getItem('userData') || this.state.redirect) {
      
      return ( <Redirect to={'/'}/>)
    
    } */

    return (
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
