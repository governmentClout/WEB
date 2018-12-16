import React, { Component } from "react";
import "./upgrade.css";
import axios from 'axios';
import { API_URL } from './../config';

class UpgradeModal extends Component {
    constructor(props) {
        super(props)

        this.state = {

            party: '',
            aboutYou: '',
            aboutParty: '',
            position: '',
            tosAgreement: false,
            success: false,
            error: false,
            loading: false
        
        };

        this.requestUpgrade = this.requestUpgrade.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
    }

    handleChange(e){

        this.setState({

            [e.target.name]: e.target.value

        });
    
    }

    requestUpgrade(e){

        e.preventDefault();

        this.setState({

            loading: true
        
        })

        const data = {

            party: this.state.party,
            about_you: this.state.aboutYou,
            about_party: this.state.aboutParty,
            office: this.state.position

        }

        console.log(data);

        const id = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        axios({

            method: 'post',
            data: data,
            url: `${API_URL}/executives`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: id
            }

        }).then(res => {

            console.log(res.data);
            this.setState({

                loading: false,
                party: '',
                aboutYou: '',
                aboutParty: '',
                position: ''

            });
        
        }).catch(err => {
            console.log(err);
        })
    
    }



    render() {
        return (
            <>
            {this.state.success ? (
                <div className="bg-white d-flex justify-content-center p-4 rounded-small mx-auto">
                    <div className="mx-auto col-md-8" style={{padding: "4em 0"}}>
                        <h4>You have successfully submitted your upgrade request, the request will be processed</h4>
                    </div>
                </div>
            ) : (
                <div className="bg-white d-flex justify-content-center p-4 rounded-small mx-auto">
                    <div className="mx-auto col-md-8">
                    <h5 className="text-center"><strong>Request Upgrade</strong></h5>
                    <br />
                    <form onSubmit={this.requestUpgrade}>
                        <div className="form-row">
                        <div className="form-group col-md">
                            <label>Select political office</label>
                            <select
                            name="position"
                            className="form-control"
                            onChange={this.handleChange}
                            required
                            >
                            <option selected>Select Political Office</option>
                            <option value="president">President</option>
                            <option value="governor">Governor</option>
                            <option value="senator">Senator</option>
                            <option value="council_chairman">Council Chairman</option>
                            <option value="federal_rep">Federal Rep.</option>
                            <option value="state_rep">State Rep</option>
                            <option value="councilor">Councilor</option>
                            </select>
                        </div>
                        <div className="form-group col-md">
                            <label>Select political party</label>
                            <select
                            name="party"
                            className="form-control"
                            onChange={this.handleChange}
                            required
                            >
                            <option selected>Select Political Party</option>
                            <option value="apc">APC</option>
                            <option value="pdp">PDP</option>
                            <option value="apga">APGA</option>
                            </select>
                        </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="about_me">Tell us about yourself</label>
                            <textarea
                            className="form-control"
                            rows="3"
                            name="aboutYou"
                            onChange={this.handleChange}
                            value={this.state.aboutYou}
                            placeholder="Type text here..."
                            required={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="about_position"> Tell us about your party </label>
                            <textarea
                            className="form-control"
                            rows="3"
                            name="aboutParty"
                            onChange={this.handleChange}
                            value={this.state.aboutParty}
                            placeholder="Type text here..."
                            required={true}
                            />
                        </div>
                        <div className="form-group">
                            <div className="form-check d-flex">
                            <input
                                className="mr-2"
                                type="checkbox"
                                ref="check_me"
                                value={this.state.tosAgreement}
                                onChange={e => {
                                this.setState({ tosAgreement: e.target.checked });
                                }}
                                required
                            />
                            <label
                                htmlFor="agreement"
                                className="form-check-label"
                                name="tosAgreement"
                            >
                                By clicking submit, I agree with terms and conditions
                            </label>
                            </div>
                        </div>
                        <button className="btn btn-block btn-gclout-blue">SUBMIT</button>
                    </form>
                    </div>
                </div>
                )}
            </>
        )
    }
}

export default UpgradeModal;