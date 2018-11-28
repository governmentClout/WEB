import React, { Component } from "react";
import "./friend.css";
import propTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";
import axios from "axios";

class Friend extends Component {
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

  componentDidMount() {

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

              friends: response.data

            })

        })

  }

  render() {

    const { friends } = this.state;
    console.log(friends);
    return (
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
            <h5>Oreoluwa Ojo</h5>
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
    );
  }
}

Friend.defaultProps = {
  type: "friend"
};
Friend.propTypes = {
  type: propTypes.string
};

export default Friend;
