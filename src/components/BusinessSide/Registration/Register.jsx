import React from "react";

import Web3 from 'web3';


export default class BusRegister extends React.Component {
    state = {
        
    }

    render() {
        return (
            <div>
                <h1>Business</h1>
                <p>Register your business</p>
                <input type="text" placeholder="Address" />
                <button>Add Financial Info</button>
                <p>(Just for show does nothing right now)</p>
                <button>Coninue</button>
            </div>
        );
    }
}