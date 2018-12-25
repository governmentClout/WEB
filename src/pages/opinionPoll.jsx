import React, { Component } from "react";
import "../assets/css/opinion.css";
import Suggestions from "../components/suggestions/suggestions";
import { Manager, Reference, Popper } from "react-popper";
import Trending from "../components/trending/trending";
import Sidebar from "../components/sidebar/sidebar";
import MakePost from "../components/makePost/makePost";
import SinglePoll from "../components/post/pollPost"
import { Redirect } from "react-router-dom"
import Countdown from "../components/countdown";

class OpinionPage extends Component {
  state = {

    showFilters: false

  };

  showFilters = () => {

    let currentState = this.state.showFilters
    this.setState({showFilters: !currentState })

  };

  render() {

    return (
      <div className="app-wrapper">
        <div className="container app-container mx-auto d-flex">
          <div className="col-md-9">
            <div className="d-flex">
              <Sidebar />
              <div className="flex-1">
                <div className="tabs-header">
                  <div className="filter-tabs">
                    <button className="btn btn-tabs active">All</button>
                    <button className="btn btn-tabs">Participated</button>
                  </div>
                  <Manager>
                <Reference>
                  {({ ref }) => (
                    <button onClick={this.showFilters} className="filter-button" ref={ref}>
                    <span className="mr-2">
                      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12H8C7.45 12 7 11.55 7 11C7 10.45 7.45 10 8 10H10C10.55 10 11 10.45 11 11C11 11.55 10.55 12 10 12ZM18 1C18 1.55 17.55 2 17 2H1C0.450001 2 0 1.55 0 1C0 0.45 0.450001 0 1 0H17C17.55 0 18 0.45 18 1ZM14 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H14C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7Z" fill="#333333"/>
                      </svg>
                    </span>
                    Filter
                  </button>
                  )}
                </Reference>
                <Popper placement="bottom">
                  {({ ref, style, placement, arrowProps }) => (
                    <div ref={ref} style={style} data-placement={placement}>
                      <div
                        className={
                          this.state.showFilters
                            ? "filter-dropdown show"
                            : "filter-dropdown"
                          }
                        >
                        <ul className="filter-dropdown-list">
                          <li className="filter-dropdown-list-item">
                            <button
                              className="filter-dropdown-button"
                            >
                              All
                            </button>
                          </li>
                          <li className="filter-dropdown-list-item">
                            <button
                              className="filter-dropdown-button"
                            >
                              Infrastructure
                            </button>
                          </li>
                          <li className="filter-dropdown-list-item">
                            <button
                              className="filter-dropdown-button"
                            >
                              Education
                            </button>
                          </li>
                          <li className="filter-dropdown-list-item">
                            <button
                              className="filter-dropdown-button"
                            >
                              Politics
                            </button>
                          </li>
                          <li className="filter-dropdown-list-item">
                            <button
                              className="filter-dropdown-button"
                            >
                              Security
                            </button>
                          </li>
                          <li className="filter-dropdown-list-item">
                            <button
                              className="filter-dropdown-button"
                            >
                              Agriculture
                            </button>
                          </li>
                          <li className="filter-dropdown-list-item">
                            <button
                              className="filter-dropdown-button"
                            >
                              Technology
                            </button>
                          </li>
                          <li className="filter-dropdown-list-item">
                            <button
                              className="filter-dropdown-button"
                            >
                              Economy
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div ref={arrowProps.ref} style={arrowProps.style} />
                    </div>
                  )}
                </Popper>
              </Manager>
                </div>
                <MakePost type="poll" />
                <SinglePoll />
              </div>
            </div>
          </div>
          <div
            className="col-md-3 d-none d-md-block"
            style={{ padding: "0px" }}
          >
            <Countdown />
            <Suggestions />
            <Trending />
          </div>
        </div>
      </div>
    );
  }
}

export default OpinionPage;
