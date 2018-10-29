import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
          // TODO: Make the normal navbar show when the user is not logged in,
          // and the authenticated navbar show when the user is logged in
          <div>
            {this.props.children}
          </div>
    );
  }
}

export default App;