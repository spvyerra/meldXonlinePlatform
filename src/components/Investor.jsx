import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Table } from 'reactstrap';
//import { addVerification } from "./contractInt/investorReq";

import "../investors.css";
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
                    <label for="ssn">SSN</label>
                     <br/>
                     <input class="form-control" type="number" id="ssn" placeholder="SSN" onChange={this.ssnChange} />
                </div>   

                <button class="btn btn-primary" id="busButton" value="submit" type="submit">Submit</button>
            </form>
            
            
          </div>
          
          <div id="converter">
          <div id="convertDiv">
            <div id="convertHeader">
                  <h1 id="convert" className="display-3" > Convert USD to Meldcoin</h1>
                  <label for="convert"> Note: you must be a verified user to own Meldcoin</label>
              </div>
            <form id="convertForm" onSubmit={this.mint} >
              <div  class="form-group">
                <label for="mint"> USD to MeldCoin (1:1) </label>
                <input  id="convertInput" class="form-control" type ="number" id="mint" placeholder="USD to convert" onChange={this.mintChange} />
              </div>
              <button class="btn btn-primary" value="submit" type="submit" >Convert </button>
            </form>
          </div>
          </div>
          
      
          
         <div>
           
            
           
           
         </div>
        </Jumbotron>
    );
  }
  
}

