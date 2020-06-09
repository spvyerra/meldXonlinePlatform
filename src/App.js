import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import BusDash from './components/BusinessSide/Dashboard/Dashboard.jsx';
import BusRegister from './components/BusinessSide/Registration/Register.jsx';
import Investor from './components/InvestorSide/Investor';


export class App extends React.Component {
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
