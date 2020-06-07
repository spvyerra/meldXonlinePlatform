import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Table } from 'reactstrap';

import "../investors.css"
export default class Investor extends React.Component{

nameChange = (e) => {
    this.setState({
        FullName: e.target.value
    });
}

emailChange = (e) => {
    this.setState({
        email: e.target.value
    });
}

ssnChange = (e) => {
    this.setState({
       ssn: e.target.value
    });
}

mintChange = (e) => {
    this.setState({
      mintToken: e.target.value
    });
}

register = () => {
    if(this.state.nameChange !== "" && this.state.emailChange !== "" && this.state.ssnChange !== "") {
       //add linkage to server
    }
    
}

  render(){

   
    return (
      <Jumbotron>
        <div className = "headerLinks">
            <NavLink id= "homeLink" className="link" to="/">
               Home
            </NavLink> 
            <NavLink id="investorLink" className="link" to="/business/registration">
              Business
            </NavLink> 
        </div>
        <div id="invHeading">
                         <h1  className="display-3">Investors</h1>
        </div>
        <div id="explainer">
          <p>Get verified and become a verified <br /> investor on Meld Exchange</p>
          <hr className= "gradHr" ></hr>
        </div>
         <div id="investorForm">
            <h1 id="formHeader" className="display-3"> Register</h1>
            <form id="formDiv" conSubmit={this.register}>
                <div class="form-group">
                    <label for="fullName">Full Name</label>
                     <br/>
                     <input class="form-control" type="text" id="fullName" placeholder="Name" onChange={this.nameChange} />
                </div>
              
                <div class="form-group">
                    <label for="email">Email</label>
                     <br/>
                     <input class="form-control" type="email" id="email" placeholder="Email" onChange={this.emailChange} />
                </div>  

                <div class="form-group">
                    <label for="ssn">Email</label>
                     <br/>
                     <input class="form-control" type="number" id="ssn" placeholder="SSN" onChange={this.ssnChange} />
                </div>   

                <button class="btn btn-primary" id="busButton" value="submit" type="submit">Submit</button>
            </form>
            
            
          </div>

         <div>
            <br />
            <p> Convert USD to Meldcoin <br/>
            Note: You must be a verified user to own Meldcoin
            </p>
            
            <input type ="number" id="mint" placeholder="USD to convert" onChange={this.mintChange} />
            <button onClick={this.mint}>Convert </button>
         </div>
        </Jumbotron>
    );
  }
  
}

