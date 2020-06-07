import React from "react";

import { addBusiness } from "../../../businessData.js";
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
        alert(acct);
       
        if(!this.state.businessName|| !this.state.businessSymbol || !this.state.numShares || !this.state.businessDescription || !this.state.businessType) {
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
                    <div className = "headerLinks">
                        <NavLink id= "homeLink" className="link" to="/">
                            Home
                        </NavLink> 
                        <NavLink id="investorLink" className="link" to="/investor">
                            Investors
                        </NavLink> 
                    </div>
                    
                    <div id="busHeading">
                         <h1  className="display-3">Business</h1>
                    </div>
                    <div id="explainer">
                        <p>Register your buisness now, and deploy <br/> a digital equity certificate onto the blockchain </p>
                        <hr className= "gradHr" ></hr>
                    </div>

                    <div id="registerForm">
                        <h1 id="formHeader" className="display-3"> Register</h1>
                        <form id="formDiv" conSubmit={this.register}>
                         <div class="form-group">
                                <label for="busName">Business Name</label>
                                <br/>
                                <input class="form-control"  type="text" className="busNameClass" id="busName" placeholder="Name" onChange={this.nameChange} />
                            </div>

                            <div class="form-group">
                                <label for="busType">Business Type</label>
                                <br/>
                                <input  class="form-control" type="text" id="busType" className="busNameTypeClasss" placeholder="Type" onChange={this.typeChange} />
                            </div>

                            <div class="form-group">
                                <label for="busSymbol">Business Symbol</label>
                                <br/>
                                < input class="form-control"  type="text" id="busSymbol" className="busSymbolClass" placeholder="Symbol 3-4 letters" onChange={this.symbolChange} />
                </div> 

                            <div class="form-group">
                                <label for="numShares">Number of shares</label>
                                <br/>
                                <input class="form-control"  type="number" id="numShares" className="busShareClass" placeholder="# of Shares" onChange={this.shareChange} />
                            </div>

                            <div class="form-group">
                                <label for="priceShares">Price of share</label>
                                <br/>
                                <input class="form-control" type="number" id="priceShares" className="busSharePriceClass" placeholder="$ per share" onChange={this.pricePerShareChange} />
                            </div>

                            <div class="form-group">
                                <label for="description">Number of shares</label>
                                <br/>
                                <textarea class="form-control" id="description" className="busDescClass" onChange={this.descriptionChange}/>
                </div>
                            <button class="btn btn-primary" id="busButton" value="submit" type="submit">Submit</button>
                        </form>
                    </div>
                  

                    </div>

            </Jumbotron>
            
        );
    }
}


