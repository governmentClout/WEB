import React, { Component } from 'react';
import NavBar from './components/navbar/navBar';
// import NavBarAuthenticated from './components/navbar/navBarAuthenticated'

class App extends Component {
  render() {
    return (
      <div >
          <NavBar />
          {/* TODO: Make the normal navbar show when the user is not logged in, an the authenticated navbar show when the user is logged in */}
          {/* <NavBarAuthenticated /> */}
          <div>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;