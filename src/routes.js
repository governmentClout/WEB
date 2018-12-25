import React from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
//import Main App file
import App from "./App";
//import pages to be routed (should be a jsx files in the /pages folder)
import Home from "./pages/home";
import Register from "./pages/auth/register";
import LoginPage from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgotPassword";
import PasswordReset from "./pages/auth/passwordReset";
import PasswordCode from "./pages/auth/code";
import ProfileCreate from "./pages/profile/createProfile";
import ProfilePage from "./pages/profile/index";
import FriendsPage from "./pages/profile/friends";
import SuggestedFriendsPage from "./pages/profile/suggestedFriends";
import ActivityPage from "./pages/activity";
import OpinionPollPage from "./pages/opinionPoll";
import NotificationsPage from "./pages/notifications";
import Error404 from "./pages/errors/404";
import PetitionPage from "./pages/petition";
import PrivacyPage from "./pages/privacy";
import HelpPage from "./pages/faq";
import TermsPage from "./pages/terms";
import { AuthConsumer } from "./components/authcontext";
import ResetPasswordCode from "./pages/auth/ResetPasswordCode";
import SinglePost from "./components/post/post";
import OnePost from "./components/post/OnePost";
import ChatPage from "./pages/chat.jsx";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <AuthConsumer>
        {({ isLoggedIn, logout }) =>
        (<Route {...rest} render={(props) => isLoggedIn ?  <Component {...props} /> : <Redirect to={{ pathname: '/login'}} />} />)}
    </AuthConsumer>
);

const Routes = () => (
    <Router>
        <App>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/password-reset" component={PasswordReset} />
                <Route exact path="/password-reset-code" component={PasswordCode} />
                <Route exact path="/reset-password/code" component={ResetPasswordCode} />
                <Route exact path="/privacy" component={PrivacyPage} />
                <Route exact path="/faq" component={HelpPage} />
                <Route exact path="/terms" component={TermsPage} />
                <PrivateRoute exact path="/" component={ActivityPage} />
                <Route exact  component={Error404} />
            </Switch>
        </App> 
    </Router>
);

export default Routes;