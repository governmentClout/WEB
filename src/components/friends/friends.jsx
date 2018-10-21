import React, { Component } from "react";
import "./friends.css";

class FriendsList extends Component {
  searchHandler(e) {
    e.preventDefault();
  }
  render() {
    return (
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
          <div className="friend-details-container">
            <div className="friend-details">
              <div className="friend-image-container  my-auto">
                <img
                  src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                  className="friend-image"
                />
              </div>
              <div className="deats  my-auto">
                <h5>Oreoluwa Ojo</h5>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            <div className="friend-action">
              <button className="btn btn-gclout-blue-outline">Message</button>
              <button className="btn-icon">
                <i className="fas fa-ellipsis-v" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsList;
