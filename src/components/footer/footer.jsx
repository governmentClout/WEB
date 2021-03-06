import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer-section-dark d-flex">
          <div className="d-flex justify-content-between container" />
        </section>
        <section className="footer-section-light">
          <div className="d-md-flex justify-content-between container">
            <div className="col-md-4">
              &copy; {new Date().getFullYear()} GClout | All copyrights
              reserved.
            </div>
            <br />
            <div className="col-md-4 d-md-flex justify-content-between">
              <a href="/faq" className="footer-link">
                Help & FAQ
              </a>
              <a href="/terms" className="footer-link">
                Terms of Use
              </a>
              <a href="/privacy" className="footer-link">
                Privacy policy
              </a>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
