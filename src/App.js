import React, { Component } from "react";
import { AuthProvider, AuthConsumer } from "./components/authcontext";
import NavBarAuthenticated from "./components/navbar/navBarAuthenticated";
import NavBar from "./components/navbar/navBar";
import NavBarMobile from "./components/navbar/navBarMobile";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AuthConsumer>
          {({ isLoggedIn, logout }) =>
            isLoggedIn ? (
              <>
                <NavBarAuthenticated logout={logout} /> <NavBarMobile />
              </>
            ) : (
              <NavBar />
            )
          }
        </AuthConsumer>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default App;
