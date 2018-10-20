import React, { Component } from "react";
import { AuthProvider, AuthConsumer } from "./components/authcontext";
import NavBarAuthenticated from "./components/navbar/navBarAuthenticated";
import NavBar from "./components/navbar/navBar";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AuthConsumer>
          {({ isLoggedIn, logout }) =>
            isLoggedIn ? <NavBarAuthenticated logout={logout} /> : <NavBar />
          }
        </AuthConsumer>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default App;
