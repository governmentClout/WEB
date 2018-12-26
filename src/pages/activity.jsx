import React, { Component } from "react";
import "../assets/css/pages.css";
import Suggestions from "../components/suggestions/suggestions";
import Trending from "../components/trending/trending";
import Sidebar from "../components/sidebar/sidebar";
import MakePost from "../components/makePost/makePost";
import SinglePost from "../components/post/post";
import axios from "axios";
import LoadingPost from "../components/loaders/posts";
import MakeExecutivePost from "../components/makePost/makeExecutivePost";
import Countdown from "../components/countdown";
import { Redirect } from "react-router-dom";
import Footer from "../components/footer/footer";
import { AuthConsumer } from "../components/authcontext";
import NavBarMobile from "../components/navbar/navBarMobile";
import NavBarAuthenticated from "../components/navbar/navBarAuthenticated";

class ActivityPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          posts: [],
            userId: '',
            loading: true,
            days: 0,
            hasProfile: false
        }
    }

    componentDidMount() {
        let userId = this.props.match.params;
        this.setState({
            userId,
        })
    }

    componentWillMount() {
        let id = sessionStorage.getItem("uuid");
        const token = sessionStorage.getItem("token");
        const url = `http://api.gclout.com:3000/profiles/${id}`;

        axios({
            method: "GET",
            url: url,
            headers: {
                uuid: id,
                token: token
            }
        }).then(res => {
            console.log(res)
        }).catch(err => this.setState({
            hasProfile: false
        }));
        this.loadPosts();

    }


    loadNow = () => {

        this.loadPosts()

    };

    loadPosts() {

        const id = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        const url = "http://api.gclout.com:3000/posts?page=1&limit=10&sort=DESC";
        const header = {

            token: token,
            uuid: id

        };
        console.log(header);

        axios({

            method: "get",
            url: url,
            headers: header
        })
            .then(res => {
                const posts = res.data.posts;

                this.setState({
                    posts,
                    loading: false
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        if(this.state.hasProfile == false) {
            return <Redirect to="/profile/create" />
        }
    return  (
        <>
            <AuthConsumer>
                {({ logout }) => (
                    <>
                        <NavBarAuthenticated logout={logout} />
                        <NavBarMobile logout={logout} />
                    </>
                )}
            </AuthConsumer>
        <div className="app-wrapper">
            <div className="container app-container mx-auto d-flex">
            <div className="col-md-9">
                <div className="d-flex">
                <Sidebar />
                <div className="flex-1">
                    {this.state.userId.id === 'executive' ? <MakeExecutivePost updatePosts={this.loadNow} /> : <MakePost updatePosts={this.loadNow} />}
                    {this.state.loading ?  <>
                        <LoadingPost />
                        <LoadingPost />
                        <LoadingPost />
                        </> :
                        (this.state.posts.map(post => <SinglePost key={post.post.id.toString()} post={post} />))
                    }
                </div>
                </div>
            </div>
            <div
                className="col-md-3 d-none d-md-block"
                style={{ padding: "0px" }}
            >
                <Countdown />
                <Suggestions />
                <Trending />
            </div>
            </div>
        </div>
        <Footer />
    </>
    );
  }
}

export default ActivityPage;
