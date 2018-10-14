import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import NavBar from "../components/navbar/navBar"
import {Redirect} from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    
    super(props);
    
    this.state = {

      redirect: false,

    };

    this.logout = this.logout.bind(this);
  
  }

  componentWillMount() {

    console.log(sessionStorage.getItem('uuid')); 
  
    if(sessionStorage.getItem("data")){

      console.log('d is here');

    } else {

      this.setState({
        
        redirect: true

      })

    }

  }
  
  logout(){

    sessionStorage.setItem('data', '');
    sessionStorage.clear();
    this.setState({

      redirect: true

    })

  }

  render() {

    if(this.state.redirect){

      return (<Redirect to={'/login'}/>)
    
    }

    return (
      <div>
      <NavBar />
        
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Click on get started to start</p>
        </header>

        <button type='button' className="button" onClick={this.logout}>Logout</button>

        </div>
      </div>
    );
  }
}

export default Home;
