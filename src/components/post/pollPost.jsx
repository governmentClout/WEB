import React, { Component } from "react";
import PropTypes from "prop-types";
import "./post.css";
import axios from 'axios';
import PollActions from "./pollActions";
import PollCommentInput from "../comments/PollCommentInput";
import {API_URL} from "../config";
// import toastr from 'toastr';

class SinglePoll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "yes",
            showComment: false,
            polls: [],
            option: ''
        };
    }

    onChange = (event) => {
        this.setState({
            ...this.state,
            option: event.target.value
        });
    };

    static propTypes = {
        postType: PropTypes.string,
        media: PropTypes.bool
    };
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

    respond(id){

        const pollId = id;
        console.log(id);

        const data = {
            poll: id,
            status: this.state.option
        };

        console.log(data);
        const header = {
            token: sessionStorage.getItem('token'),
            uuid: sessionStorage.getItem('uuid')
        };
        console.log(header);

        axios({

            method: 'post',
            data: data,
            url: `${API_URL}/polls/response`,
            headers: header

        }).then(res => {
            console.log(res.data);
            if(res.data.Success === "response submitted"){

                this.getPolls();
                this.setState({
                    option: ''
                })
            } else {
                // toastr.error('please select something');
                console.log("lol")
            }
        })

    }
    componentWillMount() {
      
        this.getPolls();

    }

    getPolls(){

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
                          <form className="poll-form">
                            <div className="form-check">
                            <input
                            className="form-check-i"
                            type="radio"
                            name="option"
                            onClick={id => this.respond(poll.polls.uuid)}
                            value="1"
                            // checked={this.state.selectedOption === "yes"}
                            onChange={this.onChange}
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
                              name="option"
                              onClick={id => this.respond(poll.polls.uuid)}
                              value="2"
                              // checked={this.state.selectedOption === "no"}
                              onChange={this.onChange}
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
                              onClick={id => this.respond(poll.polls.uuid)}
                              name="option"
                              value="3"
                              // checked={this.state.selectedOption === "maybe"}
                              onChange={this.onChange}
                            />
                            <span className="checkmark" />
                            <label className="form-check-label" htmlFor="pollOptions">
                              Undecided/Ambiguos
                            </label>
                          </div>
                        </form>
                      </div>
                      <hr/>
                  </div>
              )
          )}
        {/*<PostActions showComment={this.showComment} />*/}
      </div>
    );
  }
}
export default SinglePoll;
