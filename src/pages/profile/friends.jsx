import React, { Component } from "react";
import "../../assets/css/pages.css";
import Suggestions from "../../components/suggestions/suggestions";
import Trending from "../../components/trending/trending";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import Friend from "../../components/friend/friend";
import Footer from "../../components/footer/footer";
import { AuthConsumer } from "../../components/authcontext";
import NavBarMobile from "../../components/navbar/navBarMobile";
import NavBarAuthenticated from "../../components/navbar/navBarAuthenticated";


class FriendsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: []

          };

        }
    componentWillMount() {

      this.fetchFriends();

    }

    fetchFriends(){

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
            this.setState({
                friends: response.data
            })
        })
    }

  searchHandler(e) {
    e.preventDefault();
  }
  render() {

    return  (
      <>
      <AuthConsumer>
        {({ logout }) =>(
          <>
            <NavBarAuthenticated logout={logout} />
            <NavBarMobile logout={logout} />
          </>
        )}
      </AuthConsumer>
      <div className="app-wrapper">
        <div className="container app-container mx-auto d-flex">
          <div className="page-70">
            <div className="d-flex">
              <Sidebar />
              <div className="friends-list-container">
                <div className="friends-list-header d-flex">
                  <h5><strong>300 Friends</strong></h5>
                </div>
                <div className="friends-search-container">
                  <form className="searchContainer" onSubmit={this.searchHandler}>
                    <input
                      className="searchBox"
                      type="search"
                      placeholder="Type in to search..."
                    />
                    <span className="searchIconContainer">
                      <i className="fas fa-search searchIcon" />
                    </span>
                  </form>
                </div>
                <div className="friends-list">
                  {this.state.friends.map(
                    (friend) => (<Friend friend={friend}/>)
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="page-30 d-none d-md-block"
            style={{ padding: "0px" }}
          >
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

export default FriendsPage;
