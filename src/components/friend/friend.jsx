import React, { Component } from "react";
import "./friend.css";
import propTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";
import MoreVert from "@material-ui/icons/MoreVert";
class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            // friends: []
        };
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu() {
        let currentState = this.state.showMenu;
        this.setState({ showMenu: !currentState });
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
                        <h5>{this.props.friend.firstName + " " + this.props.friend.lastName}</h5>
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
                                            <MoreVert />
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
                        <button
                            className="btn btn-gclout-blue-outline"
                            onClick={() => alert(this.props.friend.email)}
                        >Add Friend</button>
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
