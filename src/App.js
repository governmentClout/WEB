import React, { Component } from "react";
import { LoggedInProvider, LoggedInConsumer } from "./components/authenticated";
import NavBarAuthenticated from "./components/navbar/navBarAuthenticated";
import NavBar from "./components/navbar/navBar";

class App extends Component {
  render() {
    return (
      <div>
        <LoggedInProvider>
          <LoggedInConsumer>
            {({ logout, isLoggedIn }) =>
              isLoggedIn ? <NavBarAuthenticated logout={logout} /> : <NavBar />
            }
          </LoggedInConsumer>
          {this.props.children}
        </LoggedInProvider>
      </div>
    );
  }
}

export default App;
