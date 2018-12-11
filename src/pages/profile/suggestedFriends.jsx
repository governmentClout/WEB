import React, { Component } from "react";
import "../../assets/css/pages.css";
import Suggestions from "../../components/suggestions/suggestions";
import Trending from "../../components/trending/trending";
import Sidebar from "../../components/sidebar/sidebar";
import Friend from "../../components/friend/friend";
import axios from 'axios';

class SuggestedFriendsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {

          suggesteds: [],
            filtered: [],
            keyword: ''

        }

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
            console.log(response.data);
            this.setState({
                suggesteds: response.data,
                filtered: response.data
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
    return(
    /*return !this.props.isLoggedIn ? (
            <Redirect to="/login" />
        ) : (*/
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

export default SuggestedFriendsPage;
