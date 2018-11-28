import React from "react";
import { Route, Switch } from "react-router-dom";
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
                        path="/password-reset-code"
                        render={props => (
                            <PasswordCode isLoggedIn={isLoggedIn} {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <Home user={user} isLoggedIn={isLoggedIn} {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/profile/create"
                        render={props => (
                            <ProfileCreate isLoggedIn={isLoggedIn} {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/profile/:id?"
                        render={props => (
                            <ProfilePage user={user} isLoggedIn={isLoggedIn} {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/friends"
                        render={props => <FriendsPage isLoggedIn={isLoggedIn} {...props} />}
                    />
                    <Route
                        exact
                        path="/friends/suggested"
                        component={SuggestedFriendsPage}
                    />
                    <Route
                        exact
                        path="/activity"
                        render={props => (
                            <ActivityPage isLoggedIn={isLoggedIn} {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/polls"
                        render={props => (
                            <OpinionPollPage isLoggedIn={isLoggedIn} {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/notifications"
                        render={props => (
                            <NotificationsPage isLoggedIn={isLoggedIn} {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/petition"
                        render={props => (
                            <PetitionPage isLoggedIn={isLoggedIn} {...props} />
                        )}
                    />
                    <Route path="/privacy" component={PrivacyPage} />
                    <Route path="/faq" component={HelpPage} />
                    <Route path="/terms" component={TermsPage} />
                    {/* The 404 page.. Dont Touch, lol */}
                    <Route component={Error404} />
                </Switch>
            )}
        </AuthConsumer>
    </App>
);

export default Routes;