import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import BusinessDashboard from './components/Business/BusinessDashboard.jsx';
import BusinessSignIn from './components/Business/BusinessSignIn.jsx';
import BusinessSignUp from './components/Business/BusinessSignUp.jsx';
import InvestorDashboard from './components/Investor/InvestorDashboard.jsx';
import InvestorSignIn from './components/Investor/InvestorSignIn.jsx';
import InvestorSignUp from './components/Investor/InvestorSignUp.jsx';

const App = () => (
  <div>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={ Home } />
        <Route path="/business/dashboard" component={ BusinessDashboard } />
        <Route path="/business/sign-in" component={ BusinessSignIn } />
        <Route path="/business/sign-up" component={ BusinessSignUp } />
        <Route path="/investor/dashboard" component={ InvestorDashboard } />
        <Route path="/investor/sign-in" component={ InvestorSignIn } />
        <Route path="/investor/sign-up" component={ InvestorSignUp } />
      </React.Fragment>
    </Router>
  </div>
)

export default App;
