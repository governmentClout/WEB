import React, { Component } from "react";
import "./post.css";
import PostActions from "./postActions";
import axios from 'axios';
import PollActions from "./pollActions";

class SinglePoll extends Component {

    constructor(props) {
        super(props);

        this.state = {

            selectedOption: "yes",
            showComment: false,
            polls: []

        };

    }

    getInitialState = () => {

    return this.state.selectedOption;

    };

    showComment = () => {

    const currentState = this.state.showComment;

    this.setState({

      showComment: !currentState

    })

    };

    handleOptionChange = changeEvent => {

    this.setState({

      selectedOption: changeEvent.target.value

    });

    };

    componentWillMount() {

      axios({

          method: 'get',
          url: `http://api.gclout.com:3000/polls`,
          headers: {

              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              token: sessionStorage.getItem('token'),
              uuid: sessionStorage.getItem('uuid')

          }

      }).then(res => {

        console.log(res.data);

        this.setState({

            polls: res.data

        })

      })

    }

    render() {

      const {polls} = this.state;
      console.log(polls);

      return (
      <div style={{ marginBottom: "1em" }}>
          { polls.map(
              (poll, index) => (
                  <div className="post-container">
                      <div className="post-owner">
                          <div className="post-owner-image-wrapper">
                              <img
                                  src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                                  alt="lol"
                                  className="post-owner-image"
                              />
                          </div>
                          <div className="post-owner-details">
                              <p onLoad={() => alert(poll.polls.created_by)}>{poll.polls.created_by}</p>
                              <p className="post-type">{poll.polls.sector}</p>
                          </div>
                      </div>
                      <div className="post-content">
                          <p>
                              {poll.polls.opinion}
                          </p>
                      </div>
                      <PollActions showComment={this.showComment} />
                  </div>
              )
          )}
        {/*<PostActions showComment={this.showComment} />*/}
      </div>
    );
  }
}
export default SinglePoll;
