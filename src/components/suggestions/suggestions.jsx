import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./suggestions.css";
import axios from 'axios';

class Suggestions extends Component {

    constructor(props) {
        super(props);

        this.state = {

          friends: []

        }

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
       // console.log(response.data);
        this.setState({
            friends: response.data
        })

      })

    }

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
            <span className="suggested-name">Markus Anthony</span>{" "}
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
