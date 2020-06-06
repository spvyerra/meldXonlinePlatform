import React from 'react';

import Web3 from 'web3';
import { secureTokenAbi } from './assets/secureTokenAbi.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import BusDash from './components/BusinessSide/Dashboard/Dashboard.jsx';
import BusRegister from './components/BusinessSide/Registration/Register.jsx';
import Investor from './components/InvestorSide/Investor';


if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
} else {
    alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
}


class App extends React.Component {
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
}

export default App;
