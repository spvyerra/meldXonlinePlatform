import React from "react";


import { addBusiness } from "../../../businessData.js";
import { NavLink } from 'react-router-dom';
import { Jumbotron } from "reactstrap";


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

    shareChange = (e) => {
        this.setState({
            numShares: e.target.value
        });
    }

    register = () => {
       
        if(!this.state.businessName|| !this.state.businessSymbol || !this.state.numShares || !this.state.businessDescription || !this.state.businessType) {
            alert("Please complete the form before submitting");
        }
        else if (this.state.nameChange !== "" && this.state.symbolChange !== "" && this.state.shareChange !== "") {
            alert("Valid form");
            addBusiness(this.state.numShares, this.state.businessName, this.state.businessSymbol, this.state.businessType, this.state.businessDescription);
        }

    }

    render() {
        return (
            <Jumbotron>
                <div>
                    <NavLink to="/">
                        Home
                    </NavLink> 
                    <h1 className="display-3">Business</h1>
                    <p>Register your business</p>
                    <input type="text" placeholder="Address" />
                    <button>Add Financial Info</button>
                    <p>(Just for show does nothing right now)</p>
                    <form onSubmit={this.register}>
                        <h2>Contract Info</h2>
                        <p className="busNameClass"> Business Name</p>
                        <input type="text" className="busNameClass" id="busName" placeholder="Business Name" onChange={this.nameChange} />
                        <br/>
                        <br/>
                        <p className="busNameTypeClass"> Business Type</p>
                        <input type="text" id="busType" className="busNameTypeClasss" placeholder="Business Type" onChange={this.typeChange} />
                        <br/>
                        <br/>
                        <p className="busSymbolClass"> Business Symbol</p>
                        <input type="text" id="busSymbol" className="busSymbolClass" placeholder="Symbol 3-4 letters" onChange={this.symbolChange} />
                        <br/>
                        <br/>
                        <p className="busShareClass"> Number of shares offered</p>
                        <input type="number" id="numShares" className="busShareClass" placeholder="Number of Shares" onChange={this.shareChange} />
                        
                        <br/>
                        <br/>
                        <p className="busDescClass"> Business Description</p>
                        <textarea id="description" className="busDescClass" onChange={this.descriptionChange}/>
                        <br/>
                        <br/>
                        <button id="busButton" value="submit" type="submit">Continue</button>
                    </form>

                    
                </div>
            </Jumbotron>

        );
    }
}