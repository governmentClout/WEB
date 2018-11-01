import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "./authcontext";

const AuthenticationRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isLoggedIn, login }) => (
      <Route
        exact={true}
        render={props =>
          isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} login={login} />
          )
        }
        {...rest}
      />
    )}
  </AuthConsumer>
);

export default AuthenticationRoute;
