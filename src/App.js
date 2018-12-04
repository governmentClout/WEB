import React, { Component } from "react";
import { AuthProvider, AuthConsumer } from "./components/authcontext";
import NavBarAuthenticated from "./components/navbar/navBarAuthenticated";
import NavBar from "./components/navbar/navBar";
import NavBarMobile from "./components/navbar/navBarMobile";
import Footer from "./components/footer/footer";

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
                            ""
                        )
                    }
                </AuthConsumer>
                {this.props.children}
                <AuthConsumer>
                    {({ isLoggedIn }) =>
                        isLoggedIn ? (
                            <>
                                <Footer />
                            </>
                        ) : (
                            ""
                        )
                    }
                </AuthConsumer>
            </AuthProvider>
        );
    }
}

export default App;