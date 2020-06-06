import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Table } from 'reactstrap';
import { addVerification } from "../verificationData.js";

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

addressChange = (e) => {
  this.setState({
    address: e.target.value
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
       console.log("Works!");
       
      addVerification(this.state.FullName, this.state.email, this.state.address, this.state.ssn);
    }
    
}

  render(){

   
    return (
      <Jumbotron>
        <div>
        <NavLink to="/">
            Home
        </NavLink> 
         <h1 className="display-3">Investors</h1>
         <div>
            <h2>Register to become an investor</h2>
            <form onSubmit={this.register}>
              <p> Full Name</p>
              <input type="text" id="fullName" placeholder="Full Name" onChange={this.nameChange} />
              <br/>
              <br/>
              <p> Email</p>
              <input type="text" id="email" placeholder="Email" onChange={this.emailChange} />
              <br/>
              <br/>
              <p> Address</p>
              <input type="text" id="address" placeholder="Address" onChange={this.addressChange} />
              <br/>
              <br/>
              <p> Social Security Number</p>
              <input type="number" id="ssn" placeholder="SSN" onChange={this.ssnChange} />
              
              <button value="submit" type="submit">Submit</button>
            </form>
            
          </div>
  
         
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

