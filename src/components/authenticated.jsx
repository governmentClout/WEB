import React, { Component } from "react";

const LoggedInContext = React.createContext();

export class LoggedInProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: {}
    };
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
  login = user => {
    this.setState({
      user: user,
      isLoggedIn: true
    });
  };
  logout = () => {
    this.setState({
      user: "",
      isLoggedIn: false
    });
    sessionStorage.clear();
  };

  render() {
    const { children } = this.props;
    return (
      <LoggedInContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          isLoggedIn: this.state.isLoggedIn,
          user: this.state.user
        }}
      >
        {children}
      </LoggedInContext.Provider>
    );
  }
}

export const LoggedInConsumer = LoggedInContext.Consumer;
