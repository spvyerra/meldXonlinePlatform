import React from 'react';

import Web3 from 'web3';
import * as abi from './abi.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import BusDash from './components/BusinessSide/Dashboard/Dashboard.jsx';
import BusRegister from './components/BusinessSide/Registration/Register.jsx';
import Investor from './components/Investor';

const ethEnabled = () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        return true;
    }
    return false;
}

let contract

class App extends React.Component {
    state = {
        address: "",
        isLoggedIn: false,
        balance: 0
    };

    constructor() {
        super();
        if (!ethEnabled()) {
            alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
        }
        contract = new window.web3.eth.Contract(abi.contractAbi);
        contract.options.address = "0x87029090A67160bE3cce4F76B6283400132A12f0";
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <Route exact path="/" component={Home} />

                        <Route path="/business/dashboard" component={BusDash} />
                        <Route path="/business/registration" component={BusRegister} />
                        <Route path="/investor" component={Investor} />

                    </React.Fragment>
                </Router>
            </div>
        );
    }

                        <Route path="/business/dashboard" component={BusDash} />
    <Route path="/business/registration" component={BusRegister} />
    <Route path="/investor" component={Investor} />
                    </React.Fragment >
                </Router >
            </div >
        );
    }

getBalance = async () => {
    let currentOwn = await contract.methods.getOwner().call();
    this.setState({ balance: currentOwn });
}

}

export default App;
