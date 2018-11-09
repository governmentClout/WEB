import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';

class Error404 extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Error 404!!</h1>
          <p>The page you are looking for does not exist!</p>
          <p>
            Go <Link to="/">Home</Link>{' '}
          </p>
        </header>
      </div>
    );
  }
}

export default Error404;
