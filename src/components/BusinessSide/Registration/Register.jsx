import React from "react";

import Web3 from 'web3';


export default class BusRegister extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div>
                <h1>Business</h1>
                <p>Register your business</p>
                <input type="text" placeholder="Address" />
                <button>Add Financial Info</button>
                <p>(Just for show does nothing right now)</p>

                <div>
                    <h2>Contract Info</h2>
                    <input type="text" id="busName" placeholder="Business Name" onChange={this.nameChange} />
                    <input type="text" id="busSymbol" placeholder="Symbol 3-4 letters" onChange={this.symbolChange} />
                </div>

                <button>Continue</button>
            </div>
        );
    }
}