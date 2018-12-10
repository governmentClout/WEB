import React, { Component } from "react";
import "../../assets/css/pages.css";
import Suggestions from "../../components/suggestions/suggestions";
import Trending from "../../components/trending/trending";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import Friend from "../../components/friend/friend";

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
      <div className="app-wrapper">
        <div className="container app-container mx-auto d-flex">
          <div className="col-md-9">
            <div className="d-flex">
              <Sidebar />
              <div className="friends-list-container">
                <div className="friends-list-header d-flex">
                  <h5>300 Friends</h5>
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
            className="col-md-3 d-none d-md-block"
            style={{ padding: "0px" }}
          >
            <div className="bg-gclout-blue mb-4 p-4 text-center countdown">
                <h3>82 Days</h3>
                <p className="mb-0 pb-0">to the general elections</p>
            </div>
            <Suggestions />
            <Trending />
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsPage;
