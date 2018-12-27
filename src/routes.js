import React from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
//import Main App file
import { AuthConsumer } from "./components/authcontext";
import App from "./App";
//import pages to be routed (should be a jsx files in the /pages folder)
import Register from "./pages/auth/register";
import LoginPage from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgotPassword";
import PasswordReset from "./pages/auth/passwordReset";
import PasswordCode from "./pages/auth/code";
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
import ResetPasswordCode from "./pages/auth/ResetPasswordCode";
import ChatPage from "./pages/chat.jsx";
import { Provider } from 'react-redux';
import store from './store';
import CreateProfile from "./pages/profile/create";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <AuthConsumer>
        {({ isLoggedIn }) =>
            (<Route {...rest} render={(props) => isLoggedIn ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />} />)}
    </AuthConsumer>
);
const AuthRoute = ({ component: Component, ...rest }) => (
    <AuthConsumer>
        {({ isLoggedIn, login }) =>
            (<Route {...rest} render={(props) => !isLoggedIn ? <Component login={login} {...props} /> : <Redirect to={{ pathname: '/'}} />} />)}
    </AuthConsumer>
);

const Routes = () => (
//    <Provider store={store}>
    <Router>
        <App>
            <Switch>
                {/* Home route */}
                <PrivateRoute exact path="/" component={ActivityPage} />
                {/* Authentication pages */}
                <AuthRoute exact path="/login" component={LoginPage} />
                <AuthRoute exact path="/register" component={Register} />
                <AuthRoute exact path="/forgot-password" component={ForgotPassword} />
                <AuthRoute exact path="/password-reset" component={PasswordReset} />
                <AuthRoute exact path="/password-reset-code" component={PasswordCode} />
                <AuthRoute exact path="/reset-password/code" component={ResetPasswordCode} />
                {/* Internal pages */}
                <PrivateRoute exact path="/profile" component={ProfilePage} />
                <PrivateRoute exact path="/profile/create" component={CreateProfile} />
                <PrivateRoute exact path="/friends" component={FriendsPage} />
                <PrivateRoute exact path="/friends/suggested" component={SuggestedFriendsPage} />
                <PrivateRoute exact path="/polls" component={OpinionPollPage} />
                <PrivateRoute exact path="/notifications" component={NotificationsPage} />
                <PrivateRoute exact path="/petition" component={PetitionPage} />
                <PrivateRoute exact path="/messages" component={ChatPage} />
                {/* external pages */}
                <Route exact path="/privacy" component={PrivacyPage} />
                <Route exact path="/faq" component={HelpPage} />
                <Route exact path="/terms" component={TermsPage} />
                {/* Error pages */}
                <Route component={Error404} />
            </Switch>
        </App> 
    </Router>
    // </Provider>
);

export default Routes;