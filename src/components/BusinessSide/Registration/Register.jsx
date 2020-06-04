import React from "react";
import axios from 'axios'

import { addBusiness } from "../../../businessData.js";
import { Jumbotron } from "reactstrap";


export default class BusRegister extends React.Component {
    constructor(props) {
        super(props);
    }




    componentDidMount() {
        axios.get("/list/")
            .then(response => response.json())
            .then(json => this.setState({ users: json.data, done: true }))

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
        if(!this.state.nameChange || !this.state.symbolChange || this.state.shareChange) {
            alert("Please complete the form before submitting");
        }
        else if (this.state.nameChange !== "" && this.state.symbolChange !== "" && this.state.shareChange !== "") {
            addBusiness(this.state.numShares, this.state.businessName, this.state.businessSymbol);
        }

    }

    render() {
        return (
            <Jumbotron>
                <div>
                    <h1 className="display-3">Business</h1>
                    <p>Register your business</p>
                    <input type="text" placeholder="Address" />
                    <button>Add Financial Info</button>
                    <p>(Just for show does nothing right now)</p>
                    <form onSubmit={this.register}>
                        <h2>Contract Info</h2>
                        <input type="text" id="busName" placeholder="Business Name" onChange={this.nameChange} />
                        <input type="text" id="busSymbol" placeholder="Symbol 3-4 letters" onChange={this.symbolChange} />
                        <input type="number" id="numShares" placeholder="Number of Shares" onChange={this.shareChange} />
                        <button value="submit" type="submit">Continue</button>
                    </form>

                    
                </div>
            </Jumbotron>

        );
    }
}