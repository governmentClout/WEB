import React from "react";
import { Route, Switch } from "react-router-dom";
//import Main App file
import App from "./App";
//import pages to be routed (should be a jsx files in the /pages folder)
import ProtectedRoute from "./components/protectedRoute";
import AuthenticationRoute from "./components/authenticationRoute";
import Home from "./pages/home";
import Register from "./pages/auth/register";
import LoginPage from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgotPassword";
import PasswordReset from "./pages/auth/passwordReset";
import ProfileCreate from "./pages/profile/createProfile";
import ProfilePage from "./pages/profile/index";
import FriendsPage from "./pages/profile/friends";
import Error404 from "./pages/errors/404";
import { AuthConsumer } from "./components/authcontext";

const Routes = () => (
  <App>
    <AuthConsumer>
      {({ isLoggedIn, login, user }) => (
        <Switch>
          <Route
            exact
            path="/register"
            render={props => (
              <Register login={login} isLoggedIn={isLoggedIn} {...props} />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <LoginPage login={login} isLoggedIn={isLoggedIn} {...props} />
            )}
          />
          <Route
            exact
            path="/forgot-password"
            render={props => (
              <ForgotPassword isLoggedIn={isLoggedIn} {...props} />
            )}
          />
          <Route
            exact
            path="/password-reset"
            render={props => (
              <PasswordReset isLoggedIn={isLoggedIn} {...props} />
            )}
          />
          <Route
            exact
            path="/"
            render={props => <Home isLoggedIn={isLoggedIn} {...props} />}
          />
          <Route exact path="/profile/create" components={ProfileCreate} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/friends" component={FriendsPage} />
          {/* The 404 page.. Dont Touch, lol */}
          <Route component={Error404} />
        </Switch>
      )}
    </AuthConsumer>
  </App>
);

export default Routes;
