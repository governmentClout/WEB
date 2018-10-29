import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "./authcontext";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isLoggedIn }) =>
      isLoggedIn ? (
        <Route exact={true} component={Component} {...rest} />
      ) : (
        <Redirect to="/login" />
      )
    }
  </AuthConsumer>
);

export default ProtectedRoute;
