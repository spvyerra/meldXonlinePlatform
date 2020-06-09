import React from "react";

import { addBusiness } from "../../../contractInt/businessReq";
import { NavLink } from 'react-router-dom';
import { Jumbotron } from "reactstrap";
import { findAllByAltText } from "@testing-library/react";
import "../../../register.css"


export default class BusRegister extends React.Component {
    constructor(props) {
        super(props);
    }



    typeChange = (e) => {
        this.setState({
            businessType: e.target.value
        });
    }

    descriptionChange = (e) => {
        this.setState({
            businessDescription: e.target.value
        });
    }

    nameChange = (e) => {
        this.setState({
            businessName: e.target.value
        });
    }


    symbolChange = (e) => {
        this.setState({
            businessSymbol: e.target.value
        });
    }

    pricePerShareChange = (e) => {
        this.setState({
            pricePerShare: e.target.value
        });
    }
    shareChange = (e) => {
        this.setState({
            numShares: e.target.value
        });
    }

    register = async () => {
        let acct = window.ethereum.selectedAddress;

        if (!this.state.businessName || !this.state.businessSymbol || !this.state.numShares || !this.state.businessDescription || !this.state.businessType) {
            alert("Please complete the form before submitting");
        }
        else if (this.state.nameChange !== "" && this.state.symbolChange !== "" && this.state.shareChange !== "") {

            await addBusiness(this.state.numShares, this.state.pricePerShare, this.state.businessName, this.state.businessSymbol, this.state.businessType, this.state.businessDescription, acct);
            alert("Valid form");
        }
    }

    render() {
        return (
            <Jumbotron>
                <div>
                    <div className="headerLinks">
                        <NavLink id="homeLink" className="link" to="/">
                            Home
                        </NavLink>
                        <NavLink id="investorLink" className="link" to="/investor">
                            Investors
                        </NavLink>
                    </div>

                    <div id="busHeading">
                        <h1 className="display-3">Business</h1>
                    </div>
                    <div id="explainer">
                        <p>Register your buisness now, and deploy <br /> a digital equity certificate onto the blockchain </p>
                        <hr className="gradHr" ></hr>
                    </div>

                    <div id="registerForm">
                        <h1 id="formHeader" className="display-3"> Register</h1>
                        <div id="formDiv">
                            <div className="form-group">
                                <label htmlFor="busName">Business Name</label>
                                <br />
                                <input className="form-control" type="text" id="busName" placeholder="Name" onChange={this.nameChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="busType">Business Type</label>
                                <br />
                                <input className="form-control" type="text" id="busType" placeholder="Type" onChange={this.typeChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="busSymbol">Business Symbol</label>
                                <br />
                                < input className="form-control" type="text" id="busSymbol" placeholder="Symbol 3-4 letters" onChange={this.symbolChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="numShares">Number of shares</label>
                                <br />
                                <input className="form-control" type="number" id="numShares" placeholder="# of Shares" onChange={this.shareChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="priceShares">Price of share</label>
                                <br />
                                <input className="form-control" type="number" id="priceShares" placeholder="$ per share" onChange={this.pricePerShareChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <br />
                                <textarea className="form-control" id="description" onChange={this.descriptionChange} />
                            </div>
                            <button className="btn btn-primary" onClick={this.register} id="busButton" value="submit" type="submit">Submit</button>
                        </div>
                    </div>
                    <br />
                    <div id="registerForm">
                        <h1 id="formHeader" className="display-3">Sell Your Shares To Potential Investors</h1>


                    </div>

                </div>

            </Jumbotron>

        );
    }
}


