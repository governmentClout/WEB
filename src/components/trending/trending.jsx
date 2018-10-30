import React, { Component } from "react";
import "./trending.css";

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    return (
      <div className="trending-section">
        <div className="trending-section-header">
          <h5>Trending post</h5>
        </div>
        <div className="trending-section-content">
          <div className="trending-post">
            <div className="d-flex align-content-center">
              <div className="trending-image-wrapper">
                <img
                  className="trending-image"
                  alt="trending1"
                  src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                />
              </div>
              <div className="trending-name">
                <p>Mark Anthony</p>
              </div>
            </div>
            <div className="trending-text">
              <p>
                Alternative answers to the question, “What are you going to do
                with your life?”
              </p>
            </div>
            <div className="d-flex no-gutters">
              <div className="col-6 d-flex">
                <button className="like-btn">
                  {this.state.liked ? (
                    <i className="fas fa-thumbs-up" />
                  ) : (
                    <i className="far fa-thumbs-up" />
                  )}{" "}
                  10 Likes{" "}
                </button>
              </div>
              <div className="col-6 d-flex">
                <button className="like-btn">
                  <i className="far fa-comment" /> 7 comments
                </button>
              </div>
            </div>
          </div>
          <div className="trending-post">
            <div className="d-flex align-content-center">
              <div className="trending-image-wrapper">
                <img
                  className="trending-image"
                  alt="trending2"
                  src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                />
              </div>
              <div className="trending-name">
                <p>Mark Anthony</p>
              </div>
            </div>
            <div className="trending-text">
              <p>
                Alternative answers to the question, “What are you going to do
                with your life?”
              </p>
            </div>
            <div className="d-flex no-gutters">
              <div className="col-6 d-flex">
                <button className="like-btn">
                  {this.state.liked ? (
                    <i className="fas fa-thumbs-up" />
                  ) : (
                    <i className="far fa-thumbs-up" />
                  )}{" "}
                  10 Likes{" "}
                </button>
              </div>
              <div className="col-6 d-flex">
                <button className="like-btn">
                  <i className="far fa-comment" /> 7 comments
                </button>
              </div>
            </div>
          </div>
          <div className="trending-post">
            <div className="d-flex align-content-center">
              <div className="trending-image-wrapper">
                <img
                  className="trending-image"
                  alt="trending3"
                  src="https://res.cloudinary.com/plushdeveloper/image/upload/v1539363398/gclout/Ellipse_1.png"
                />
              </div>
              <div className="trending-name">
                <p>Mark Anthony</p>
              </div>
            </div>
            <div className="trending-text">
              <p>
                Alternative answers to the question, “What are you going to do
                with your life?”
              </p>
            </div>
            <div className="d-flex no-gutters">
              <div className="col-6 d-flex">
                <button className="like-btn">
                  {this.state.liked ? (
                    <i className="fas fa-thumbs-up" />
                  ) : (
                    <i className="far fa-thumbs-up" />
                  )}{" "}
                  10 Likes{" "}
                </button>
              </div>
              <div className="col-6 d-flex">
                <button className="like-btn">
                  <i className="far fa-comment" /> 7 comments
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
