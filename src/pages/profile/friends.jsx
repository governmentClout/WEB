import React, { Component } from "react";
import "../../assets/css/pages.css";
import Suggestions from "../../components/suggestions/suggestions";
import Trending from "../../components/trending/trending";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import { Manager, Reference, Popper } from "react-popper";

class FriendsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            friends: []
        };
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu() {
        let currentState = this.state.showMenu;
        this.setState({ showMenu: !currentState });
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
                      /*(friend) => (<Friend friend={friend}/>)*/
                      (friend) => (
                          <div className="friend-details-container">
                              <div className="friend-details">
                                  <div className="friend-image-container  my-auto">
                                      <img
                                          src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                                          className="friend-image"
                                          alt="friend"
                                      />
                                  </div>
                                  <div className="deats  my-auto">
                                      <h5>{friend.firstName + " " + friend.lastName}</h5>
                                      <p>Lagos, Nigeria</p>
                                  </div>
                              </div>
                              <div className="friend-action">
                                  {this.props.type !== "suggested" ? (
                                      <>
                                          <button className="btn btn-gclout-blue-outline">Message</button>
                                          <Manager>
                                              <Reference>
                                                  {({ ref }) => (
                                                      <button
                                                          className="btn-icon"
                                                          ref={ref}
                                                          onClick={this.showMenu}
                                                      >
                                                          <i className="fas fa-ellipsis-v" />
                                                      </button>
                                                  )}
                                              </Reference>
                                              <Popper placement="bottom">
                                                  {({ ref, style, placement, arrowProps }) => (
                                                      <div ref={ref} style={style} data-placement={placement}>
                                                          <div
                                                              className={
                                                                  this.state.showMenu ? "side-drop show" : "side-drop"
                                                              }
                                                          >
                                                              <ul className="side-drop-list">
                                                                  <li className="side-drop-list-item">
                                                                      <button className="side-drop-button">Remove</button>
                                                                  </li>
                                                                  <li className="side-drop-list-item">
                                                                      <button className="side-drop-button">Block</button>
                                                                  </li>
                                                              </ul>
                                                          </div>
                                                          <div ref={arrowProps.ref} style={arrowProps.style} />
                                                      </div>
                                                  )}
                                              </Popper>
                                          </Manager>
                                      </>
                                  ) : (
                                      <button className="btn btn-gclout-blue-outline">Add Friend</button>
                                  )}
                              </div>
                          </div>
                      )
                  )}
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

export default FriendsPage;
