import React, { Component } from "react";
import "./friend.css";
import PropTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu() {
    let currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }
  render() {
    return (
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
Friend.PropTypes = {
  type: PropTypes.string
};

export default Friend;
