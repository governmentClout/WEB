import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  render() {
    const {
      onCloseRequest,
      children,
      sheet: { classes }
    } = this.props;
    return <div>Modal</div>;
  }
}

export default Modal;
