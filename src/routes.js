import React from "react";
import Loadable from 'react-loadable';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
//import Main App file
import { AuthConsumer } from "./components/authcontext";
import App from "./App";
// import { Provider } from 'react-redux';
// import store from './store';
import { Redirect } from "react-router-dom";
import logo from './assets/images/logo.png';

//import pages to be routed (should be a jsx files in the /pages folder)
const Register = Loadable({
    loader: () => import(/* webpackChunkName: "Register" */ "./pages/auth/register"),
    loading: Loading,
    timeout: 10000,
    modules: ['Register'],
    delay: 100,
});
const LoginPage = Loadable({
    loader: () => import(/* webpackChunkName: "Login" */ "./pages/auth/login"),
    loading: Loading,
    timeout: 10000,
    modules: ['Login'],
    delay: 100,
});
const ForgotPassword = Loadable({
    loader: () => import(/* webpackChunkName: "ForgotPassword" */ "./pages/auth/forgotPassword"),
    delay: 100,
    loading: Loading,
    timeout: 10000,
    modules: ['ForgotPassword'],
});
const PasswordReset = Loadable({
    loader: () => import(/* webpackChunkName: "PasswordReset" */"./pages/auth/passwordReset"),
    loading: Loading,
    timeout: 10000,
    modules: ['PasswordReset'],
    delay: 100,
});
const PasswordCode = Loadable({
    loader: () => import(/* webpackChunkName: "PasswordCode" */ "./pages/auth/code"),
    loading: Loading,
    timeout: 10000,
    modules: ['PasswordCode'],
    delay: 100,
});
const ResetPasswordCode = Loadable({
    loader: () => import(/* webpackChunkName: "ResetPasswordCode" */ "./pages/auth/ResetPasswordCode"),
    loading: Loading,
    timeout: 10000,
    modules: ['ResetPasswordCode'],
    delay: 100,
});
const ProfilePage = Loadable({
    loader: () => import(/* webpackChunkName: "ProfilePage" */ "./pages/profile/index"),
    loading: Loading,
    timeout: 10000,
    modules: ['ProfilePage'],
    delay: 100,
});
const CreateProfile = Loadable({
    loader: () => import(/* webpackChunkName: "CreateProfile" */"./pages/profile/create"),
    loading: Loading,
    timeout: 10000,
    modules: ['CreateProfile'],
    delay: 100,
});
const FriendsPage = Loadable({
    loader: () => import(/* webpackChunkName: "Friends" */ "./pages/profile/friends"),
    loading: Loading,
    timeout: 10000,
    modules: ['Friends'],
    delay: 100,
});
const SuggestedFriendsPage = Loadable({
    loader: () => import(/* webpackChunkName: "SuggestedFriends" */ "./pages/profile/suggestedFriends"),
    loading: Loading,
    timeout: 10000,
    modules: ['SuggestedFriends'],
    delay: 100,
});
const ActivityPage = Loadable({
    loader: () => import(/* webpackChunkName: "Activity" */ "./pages/activity"),
    loading: Loading,
    timeout: 10000,
    modules: ['Activity'],
    delay: 100,
});
const OpinionPollPage = Loadable({
    loader: () => import(/* webpackChunkName: "OpinionPoll" */ "./pages/opinionPoll"),
    loading: Loading,
    timeout: 10000,
    modules: ['OpinionPoll'],
    delay: 100,
});
const NotificationsPage = Loadable({
    loader: () => import(/* webpackChunkName: "Notifications" */ "./pages/notifications"),
    loading: Loading,
    timeout: 10000,
    modules: ['Notifications'],
    delay: 100,
});
const Error404 = Loadable({
    loader: () => import(/* webpackChunkName: "error404" */ "./pages/errors/404"),
    loading: Loading,
    timeout: 10000,
    modules: ['error404'],
    delay: 100,
});
const PetitionPage = Loadable({
    loader: () => import(/* webpackChunkName: "Petiton" */"./pages/petition"),
    loading: Loading,
    timeout: 10000,
    modules: ['Petition'],
    delay: 100,
});
const PrivacyPage = Loadable({
    loader: () => import(/* webpackChunkName: "Privacy" */ "./pages/privacy"),
    loading: Loading,
    timeout: 10000,
    modules: ['Privacy'],
    delay: 100,
});
const HelpPage = Loadable({
    loader: () => import(/* webpackChunkName: "Help" */ "./pages/faq"),
    loading: Loading,
    timeout: 10000,
    modules: ['Help'],
    delay: 100,
});
const TermsPage = Loadable({
    loader: () => import(/* webpackChunkName: "Terms" */ "./pages/terms"),
    loading: Loading,
    timeout: 10000,
    modules: ['Terms'],
    delay: 100,
});
const ChatPage = Loadable({
    loader: () => import(/* webpackChunkName: "Chat" */"./pages/chat"),
    loading: Loading,
    timeout: 10000,
    modules: ['Chat'],
    delay: 100,
});
const SinglePostPage = Loadable({
    loader: () => import(/* webpackChunkName: "SinglePost" */"./pages/singlePost"),
    loading: Loading,
    timeout: 10000,
    modules: ['SinglePost'],
    delay: 100,
});

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
function Loading(props) {
    if (props.isLoading) {
        if (props.timedOut) {
            return <div>Loader timed out!</div>;
        } else if (props.pastDelay) {
            return <div className="fullscreen">
                <img src={logo} className="bounce" alt="logo" />
                <p>Loading...</p>
            </div>;
        } else {
            return null;
        }
    } else if (props.error) {
        return <div>Error! Component failed to load</div>;
    } else {
        return null;
    }
}

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
                <PrivateRoute path="/post/:id" component={SinglePostPage} />
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