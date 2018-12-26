import React, { Component } from "react";
import "../../assets/css/pages.css";
import Suggestions from "../../components/suggestions/suggestions";
import Trending from "../../components/trending/trending";
import Sidebar from "../../components/sidebar/sidebar";
import Friend from "../../components/friend/friend";
import axios from 'axios';
import Countdown from "../../components/countdown";
import Footer from "../../components/footer/footer";
import { AuthConsumer } from "../../components/authcontext";
import NavBarMobile from "../../components/navbar/navBarMobile";
import NavBarAuthenticated from "../../components/navbar/navBarAuthenticated";

class SuggestedFriendsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {

          suggesteds: [],
            filtered: [],
            keyword: '',
            loading: false

        }

    }

    componentWillMount() {

      this.fetchFriends();

    }

    fetchFriends(){

        this.setState({
            loading: true

        })

        const uuid = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");
        axios({
            method: 'get',
            url: `http://api.gclout.com:3000/users`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: uuid
            }
        }).then(response => {
            console.log(response.data);
            this.setState({
                suggesteds: response.data,
                filtered: response.data,
                loading: false
            })
        })
    }

    searchUser = (e) => {
        const keyword = e.target.value;

        if(keyword !== ''){

            const list = this.state.suggesteds.filter((friend) => {
                if(friend.lastName.indexOf(keyword) !== -1){
                    return friend;
                }
            });
            this.setState({
                filtered: list
            })

        } else {

            this.setState({

                filtered: this.state.suggesteds,
                keyword

            });

        }

    };

  render() {

      const { loading } =  this.state;

      if(loading){
          return <img src="https://i.gifer.com/8ZFL.gif" />
      }

    return(
    /*return !this.props.isLoggedIn ? (
            <Redirect to="/login" />
        ) : (*/
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
              <div className="friends-list-container">
                <div className="friends-list-header">
                  <h5>GClout Friends Suggestion</h5>
                  <p>These are people you may know</p>
                </div>
                <div className="friends-search-container">
                  {/*<form
                    className="searchContainer"
                    onSubmit={this.searchHandler}
                  >*/}
                    <input
                      className="searchBox"
                      type="text"
                      value={this.state.keyword}
                      placeholder="Type in to search..."
                      onChange={e => this.searchUser(e)}
                    />
                    <span className="searchIconContainer">
                      <i className="fas fa-search searchIcon" />
                    </span>
                  {/*</form>*/}
                </div>
                <div className="friends-list">
                  {this.state.filtered.map((suggestedFriend) => (<Friend friend={suggestedFriend} type="suggested" />))}
                </div>
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

export default SuggestedFriendsPage;
