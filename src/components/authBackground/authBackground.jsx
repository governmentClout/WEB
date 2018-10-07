import React, { Component } from "react";
import "./authBackground.css";

class AuthBackground extends Component {
  render() {
    const imagesList = [
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884672/gclout/1.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/2.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884668/gclout/16.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884667/gclout/15.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884664/gclout/13.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/11.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884660/gclout/9.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/7.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884654/gclout/4.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/5.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/3.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884666/gclout/14.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/10.png",
      "https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/6.png"
    ];
    return (
      <div className="d-flex align-items-stretch flex-wrap no-gutters auth-bg">
        <div className="auth-bg-overlay" />
        {imagesList.map((imageUrl, index) => (
          <div className="col-md-3 col-sm-4 col-6" key={"key-" + index}>
            <img
              src={imageUrl}
              alt={"bg-image-" + index}
              className="img-fluid"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default AuthBackground;
