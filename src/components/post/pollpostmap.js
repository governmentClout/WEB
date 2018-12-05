import React, { Component } from "react";
import "./post.css";
import PostActions from "./postActions";
import axios from 'axios';

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

        const id = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        axios({
            method: 'get',
            url: `http://api.gclout.com:3000/polls`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: id
            }
        }).then(res => {
            console.log(res.data);
            this.setState({
                polls: res.data
            });
        })

    }

    render() {
        const { polls } = this.state;
        console.log(polls);
        return (
            <div style={{ marginBottom: "1em" }}>
                <div className="post-container">
                    { polls.map(
                        (poll, index) => (
                            <div className="post-owner">
                                <div className="post-owner-image-wrapper">
                                    <img
                                        src="https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"
                                        alt="lol"
                                        className="post-owner-image"
                                    />
                                </div>
                                <div className="post-owner-details">
                                    <p>Oreoluwa Ojo</p>
                                    <p className="post-type">{poll.polls.sector}</p>
                                </div>
                            </div>
                        )
                    )}
                    <hr/>

                    {/*<div className="post-content">
            <p>
              Do you believe president Buhari is for no one but for everybody?
            </p>
            <form className="poll-form">
              <div className="form-check">
                <input
                  className="form-check-i"
                  type="radio"
                  name="pollOptions"
                  value="yes"
                  checked={this.state.selectedOption === "yes"}
                  onChange={this.handleOptionChange}
                />
                <span className="checkmark" />
                <label className="form-check-label" htmlFor="pollOptions">
                  Yes/Agree/True
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-i"
                  type="radio"
                  name="pollOptions"
                  value="no"
                  checked={this.state.selectedOption === "no"}
                  onChange={this.handleOptionChange}
                />
                <span className="checkmark" />
                <label className="form-check-label" htmlFor="pollOptions">
                  No/Disagree/False
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-i"
                  type="radio"
                  name="pollOptions"
                  value="maybe"
                  checked={this.state.selectedOption === "maybe"}
                  onChange={this.handleOptionChange}
                />
                <span className="checkmark" />
                <label className="form-check-label" htmlFor="pollOptions">
                  Undecided/Ambiguos
                </label>
              </div>
            </form>
          </div>*/}
                </div>
                <PostActions showComment={this.showComment} />
            </div>
        );
    }
}
export default SinglePoll;
