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
import Error404 from "./pages/errors/404";

const Routes = () => (
  <App>
    <Switch>
      <AuthenticationRoute exact path="/register" component={Register} />
      <AuthenticationRoute exact={true} path="/login" component={LoginPage} />
      <AuthenticationRoute
        exact={true}
        path="/forgot-password"
        component={ForgotPassword}
      />
      <AuthenticationRoute
        exact
        path="/password-reset"
        component={PasswordReset}
      />
      <ProtectedRoute exact={true} path="/" component={Home} />
      <ProtectedRoute
        exact={true}
        path="/profile/create"
        component={ProfileCreate}
      />
      <ProtectedRoute exact={true} path="/profile" component={ProfilePage} />
      {/* The 404 page.. Dont Touch, lol */}
      <Route component={Error404} />
    </Switch>
  </App>
);

export default Routes;
