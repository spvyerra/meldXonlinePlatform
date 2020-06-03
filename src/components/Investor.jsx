import React from 'react';
import { Jumbotron, Table } from 'reactstrap';

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
        <div>
         <h1 className="display-3">Investors</h1>
         <div>
            <h2>Register to become an investor</h2>
            <input type="text" id="fullName" placeholder="Full Name" onChange={this.nameChange} />
            <br/>
            <input type="text" id="email" placeholder="Email" onChange={this.emailChange} />
            <br/>
            <input type="number" id="ssn" placeholder="SSN" onChange={this.ssnChange} />
          </div>
  
         <button onClick={this.register}>Submit</button>
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

