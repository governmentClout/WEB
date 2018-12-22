import React, { Component } from "react";
import "./navMessages.css";
import {Link} from "react-router-dom";
import Reply from "@material-ui/icons/Reply"
import {API_URL} from "../config";
import axios from 'axios';

class navMessagees extends Component {

  constructor(props) {
    super(props);

    this.state = {

      messages: [],
      loading: false

    }

  }

  componentDidMount() {

    this.getMessages();

  }

  getMessages(){

    this.setState({
      loading: true

    });

    const id = sessionStorage.getItem("uuid"),
        token = sessionStorage.getItem("token");

    axios({

      method: 'get',
      url: `${API_URL}/messages`,
      headers: {

        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        token: token,
        uuid: id

      }

    }).then(res => {

      console.log(res.data);
      console.log('here');

    })

  }


  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.props.show
              ? "navMessages-wrapper show"
              : "navMessages-wrapper"
          }
        >
          <p className="navMessages-title">Messages</p>
          <ul className="navMessages">
            <li className="navMessage">
            <div className="navMessage-image-wrapper">
              <img className="navMessage-image" src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="lol" />
            </div>
              <div className="navMessage-content-wrapper">
                <p> <strong>Oreoluwa Ojo</strong>
                <span>11:20pm</span>
              </p>
               <p className="navMessage-content"><Reply className="icon-16" /> Hii !! </p>
              </div>
            </li>
            <li className="navMessage">
            <div className="navMessage-image-wrapper">
              <img className="navMessage-image" src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="lol" />
            </div>
              <div className="navMessage-content-wrapper">
                <p> <strong>Oreoluwa Ojo</strong>
                <span>11:20pm</span>
              </p>
               <p className="navMessage-content"><Reply className="icon-16" /> Hii !! </p>
              </div>
            </li>
            <li className="navMessage">
            <div className="navMessage-image-wrapper">
              <img className="navMessage-image" src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg" alt="lol" />
            </div>
              <div className="navMessage-content-wrapper">
                <p> <strong>Oreoluwa Ojo</strong>
                <span>11:20pm</span>
              </p>
               <p className="navMessage-content"><Reply className="icon-16" /> Hii !! </p>
              </div>
            </li>
          </ul>
          <div className="navMessages-footer text-center">
            <Link to="/messages" onClick={this.props.close}>View more</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default navMessagees;
