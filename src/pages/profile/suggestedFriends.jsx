import React, { Component } from "react";
import "../../assets/css/pages.css";
import Suggestions from "../../components/suggestions/suggestions";
import Trending from "../../components/trending/trending";
import Sidebar from "../../components/sidebar/sidebar";
import Friend from "../../components/friend/friend";

class SuggestedFriendsPage extends Component {
  searchHandler(e) {
    e.preventDefault();
  }
  render() {
    return (
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
                  <form
                    className="searchContainer"
                    onSubmit={this.searchHandler}
                  >
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
                  <Friend type="suggested" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 d-none d-md-block"
            style={{ padding: "0px" }}
          >
            <Suggestions />
            <Trending />
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestedFriendsPage;
