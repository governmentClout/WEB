import React from "react";
import { Route, Switch } from "react-router-dom";
//import Main App file
import App from "./App";
import { LoggedInConsumer } from "./components/authenticated";
//import pages to be routed (should be a jsx files in the /pages folder)
import Home from "./pages/home";
import Register from "./pages/auth/register";
import LoginPage from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgotPassword";
import PasswordReset from "./pages/auth/passwordReset";
import ProfileCreate from "./pages/profile/createProfile";
import ProfilePage from "./pages/profile/index";
import Error404 from "./pages/errors/404";

const Routes = () => (
  <App>
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <LoggedInConsumer>
            {({ isLoggedIn }) => <Home {...props} isLoggedIn={isLoggedIn} />}
          </LoggedInConsumer>
        )}
      />
      <Route
        exact
        path="/register"
        render={props => (
          <LoggedInConsumer>
            {({ isLoggedIn }) => (
              <Register {...props} isLoggedIn={isLoggedIn} />
            )}
          </LoggedInConsumer>
        )}
      />
      <Route
        exact
        path="/login"
        render={props => (
          <LoggedInConsumer>
            {({ isLoggedIn, login }) => (
              <LoginPage {...props} isLoggedIn={isLoggedIn} login={login} />
            )}
          </LoggedInConsumer>
        )}
      />
      <Route
        exact
        path="/forgot-password"
        render={props => (
          <LoggedInConsumer>
            {({ isLoggedIn }) => (
              <ForgotPassword {...props} isLoggedIn={isLoggedIn} />
            )}
          </LoggedInConsumer>
        )}
      />
      <Route
        exact
        path="/password-reset"
        render={props => (
          <LoggedInConsumer>
            {({ isLoggedIn }) => (
              <PasswordReset {...props} isLoggedIn={isLoggedIn} />
            )}
          </LoggedInConsumer>
        )}
      />
      <Route
        exact
        path="/profile/new"
        render={props => (
          <LoggedInConsumer>
            {({ isLoggedIn, user }) => (
              <ProfileCreate {...props} isLoggedIn={isLoggedIn} />
            )}
          </LoggedInConsumer>
        )}
      />
      <Route
        exact
        path="/profile"
        render={props => (
          <LoggedInConsumer>
            {({ isLoggedIn, user }) => (
              <ProfilePage {...props} isLoggedIn={isLoggedIn} />
            )}
          </LoggedInConsumer>
        )}
      />
      {/* The 404 page.. Dont Touch, lol */}
      <Route component={Error404} />
    </Switch>
  </App>
);

export default Routes;
