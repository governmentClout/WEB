import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "./authcontext";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isLoggedIn }) => (
      <Route exact={true}
        render={props =>
          isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
        {...rest}
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
