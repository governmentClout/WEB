import React, { Component } from "react";
import "./modal.css";
import isNil from "lodash/fp/isNil";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;

    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener("click", this.handleOutsideClick, false);
      }
    }
  }

  render() {
    const { onCloseRequest, children } = this.props;

    return (
      <div className="gclout-modal-overlay">
        <div className="gclout-modal">
          <div className="gclout-modal-content col-md-6 col-lg-7 mx-auto"  ref={node => (this.modal = node)}>{children}</div>
        </div>

         <button
          type="button"
          className="gclout-modal-close-btn"
          onClick={onCloseRequest}
        />
      </div>
    );
  }
}

export default Modal;
