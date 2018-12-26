import React, { Component } from "react";
import { AuthProvider, AuthConsumer } from "./components/authcontext";
import NavBarAuthenticated from "./components/navbar/navBarAuthenticated";
import NavBarMobile from "./components/navbar/navBarMobile";

class App extends Component {
    render() {
        return (
            <AuthProvider>
                {this.props.children}
            </AuthProvider>
        );
    }
}

export default App;