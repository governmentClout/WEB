import React, { Component } from "react";
import "../assets/css/pages.css";
import Suggestions from "../components/suggestions/suggestions";
import Trending from "../components/trending/trending";
import Clear from "@material-ui/icons/Clear";
import ChatInterface from "../components/chatInterface";
import Countdown from "../components/countdown";


class ChatPage extends Component {
  searchHandler = e => e.preventDefault();

  render() {
    return (
      <div className="app-wrapper">
        <div className="container app-container mx-auto d-flex">
          <div className="col-md-9">
            <div className="d-flex">
              <div className="sidebar mr-0 ">
                <div className="friends-list-container">
                  <div className="friends-list-header d-flex">
                    <h5>Messages</h5>
                  </div>
                  <div className="friends-search-container chatbox">
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
                  <div className="chat-list">
                    <div className="chat-head chat-head-active">
                      <div className="chat-head-photo">
                        <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="chat head" />
                      </div>
                      <div className="chat-head-content">
                        <p className="chat-head-user-and-time">
                          <strong>Oreoluwa Ojo</strong>
                          <span>11:20pm</span>
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="previous-chat">
                            Lorem ipsum hello, this shoyl be long
                          </p>
                          <p className="message-count">2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="main-chat-container">
                  <div className="chat-header">
                    <div className="chat-head-photo">
                      <img src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="chat head" />
                    </div>
                    <div className="chat-head-content">
                      <p className="chat-head-user-and-time mb-0">
                        <strong>Oreoluwa Ojo</strong>
                      </p>
                        <span>online</span>
                    </div>
                    <button className="close-chat"><Clear /></button>
                  </div>
                  <ChatInterface />
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
    );
  }
}

export default ChatPage;

