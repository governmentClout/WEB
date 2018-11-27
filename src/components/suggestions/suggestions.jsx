import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./suggestions.css";

class Suggestions extends Component {
  render() {
    return (
      <div className="suggestions">
        <div className="suggestions-header">
          <h5>GClout friends suggestions</h5>
        </div>
        <div className="suggestions-content">
          <p className="tagline">These are people you may know</p>
          <div className="single-suggestion dashed-border-bottom">
            <div className="suggestion-image-wrapper">
              <img
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                className="suggestion-image"
                alt="suggested1"
              />
            </div>
            <span className="suggested-name">Mark Anthony</span>{" "}
            <button className="btn btn-gclout-blue-outline">Add Friend</button>
          </div>
          <div className="single-suggestion dashed-border-bottom">
            <div className="suggestion-image-wrapper">
              <img
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                className="suggestion-image"
                alt="suggested2"
              />
            </div>
            <span className="suggested-name">Mark Anthony</span>{" "}
            <button className="btn btn-gclout-blue-outline">Add Friend</button>
          </div>
          <div className="single-suggestion">
            <div className="suggestion-image-wrapper">
              <img
                src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                className="suggestion-image"
                alt="suggested3"
              />
            </div>
            <span className="suggested-name">Mark Anthony</span>{" "}
            <button className="btn btn-gclout-blue-outline">Add Friend</button>
          </div>
        </div>
        <div className="suggestion-footer">
          <Link to="/friends" className="suggestion-footer-link">
            View More
          </Link>
        </div>
      </div>
    );
  }
}

export default Suggestions;
