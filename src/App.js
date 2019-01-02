import React, { Component } from "react";
import { AuthProvider } from "./components/authcontext";

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