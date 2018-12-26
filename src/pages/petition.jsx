import React, { Component } from "react";
import "../assets/css/pages.css";
import "../assets/css/opinion.css";
import Suggestions from "../components/suggestions/suggestions";
import Trending from "../components/trending/trending";
import Sidebar from "../components/sidebar/sidebar";
import MakePetition from "../components/makePost/makePetition";
import { Manager, Reference, Popper } from "react-popper";
import SinglePetition from "../components/post/petition";
import Countdown from "../components/countdown";
import Footer from "../components/footer/footer";
import { AuthConsumer } from "../components/authcontext";
import NavBarMobile from "../components/navbar/navBarMobile";
import NavBarAuthenticated from "../components/navbar/navBarAuthenticated";


class PetitionPage extends Component {
  state = {showFilters: false}
  showFilters = () => {
    let currentState = this.state.showFilters
    this.setState({showFilters: !currentState })
  }
  render() {
    return (
      <>
        <AuthConsumer>
          {({ logout }) => (
            <>
              <NavBarAuthenticated logout={logout} />
              <NavBarMobile logout={logout} />
            </>
          )}
        </AuthConsumer>
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
                          <button
                            type="button"
                            ref={ref}
                            onClick={this.showFilters}
                            className="btn btn-white"
                          >
                          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12H8C7.45 12 7 11.55 7 11C7 10.45 7.45 10 8 10H10C10.55 10 11 10.45 11 11C11 11.55 10.55 12 10 12ZM18 1C18 1.55 17.55 2 17 2H1C0.450001 2 0 1.55 0 1C0 0.45 0.450001 0 1 0H17C17.55 0 18 0.45 18 1ZM14 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H14C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7Z" fill="#333333"/>
                          </svg> {" "}
                            Filters
                          </button>
                        )}
                      </Reference>
                      <Popper placement="bottom">
                        {({ ref, style, placement, arrowProps }) => (
                          <div ref={ref} style={style} data-placement={placement}>
                            <div
                              className={
                                this.state.showFilters
                                  ? "button-dropdown show"
                                  : "button-dropdown"
                              }
                            >
                              <ul className="button-dropdown-list">
                                <li
                                  className="profile-dropdown-list-item"
                                  onClick={this.showFilters}
                                >
                                  <button className="button-dropdown-list-button">All</button>
                                </li>
                                <li
                                  className="profile-dropdown-list-item"
                                  onClick={this.showFilters}
                                >
                                  <button className="button-dropdown-list-button">Infrastructure</button>
                                </li>
                                <li
                                  className="profile-dropdown-list-item"
                                  onClick={this.showFilters}
                                >
                                  <button className="button-dropdown-list-button">Education</button>
                                </li>
                                <li
                                  className="profile-dropdown-list-item"
                                  onClick={this.showFilters}
                                >
                                  <button className="button-dropdown-list-button">Politics</button>
                                </li>
                                <li
                                  className="profile-dropdown-list-item"
                                  onClick={this.showFilters}
                                >
                                  <button className="button-dropdown-list-button">Security</button>
                                </li>
                                <li
                                  className="profile-dropdown-list-item"
                                  onClick={this.showFilters}
                                >
                                  <button className="button-dropdown-list-button">Agriculture</button>
                                </li>
                                <li
                                  className="profile-dropdown-list-item"
                                  onClick={this.showFilters}
                                >
                                  <button className="button-dropdown-list-button">Technology</button>
                                </li>
                                <li
                                  className="profile-dropdown-list-item"
                                  onClick={this.showFilters}
                                >
                                  <button className="button-dropdown-list-button">Economy</button>
                                </li>
                              </ul>
                            </div>
                            <div ref={arrowProps.ref} style={arrowProps.style} />
                          </div>
                        )}
                      </Popper>
                    </Manager> 
                  </div>
                  <MakePetition />
                  <SinglePetition />
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
          <Footer />
        </>
    );
  }
}

export default PetitionPage;
