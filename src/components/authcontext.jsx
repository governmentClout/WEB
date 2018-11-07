import React, { Component } from "react";
const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    if (sessionStorage.getItem("token")) {
      this.setState({
        isLoggedIn: true,
        user: JSON.parse(sessionStorage.getItem("data")).data.user
      });
    } else {
      this.setState({
        isLoggedIn: false,
        user: {}
      });
    }
  }

  login(user) {
    this.setState({
      user: user,
      isLoggedIn: true
    });
  }
  logout() {
    this.setState({
      user: "",
      isLoggedIn: false
    });
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("data");
    sessionStorage.removeItem("uid");
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: this.state.isLoggedIn,
          login: this.login,
          logout: this.logout,
          user: this.state.user
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer };
