import React from 'react';
import { Jumbotron, Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component{


  constructor() {
    super();
    this.state = {
      busisnesses: []
    };
  }
  componentWillMount() {
    
    this.getData();

  }

  getData() {
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      var json_obj = JSON.parse(xhr.responseText);
      this.setState({
        busisnesses: json_obj
      });
      console.log(this.state.busisnesses)
    })
    // open the request with the verb and the url
    xhr.open('GET', '/list/', true);
    // send the request
    xhr.send();
  }


  renderTableData() {
    return this.state.busisnesses.map((business, index) => {
       const { id, busName, symbol } = business //destructuring
      
      
        return (
          <tr key={id}>
             <td>{busName}</td>
             <td>{symbol}</td>
             <td>NYC</td>

          </tr>
       )
       
       
       
      return;
    })
 }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello!</h1>
          <p className="lead">Welcome to Meld Exchange.</p>
          <hr className="my-2" />
          <p>I am a: </p>
          <NavLink to="/business/registration">
            business<br />
          </NavLink>
          <NavLink to="investor">
            investor
          </NavLink> 

          <hr className="my-2" />
          <br />
          <h2 className="lead"> Buisnesses on MeldX</h2>
         
            <div>
            <Table id='students'>
                <thead>
                <tr>
                  <th>Business Name</th>
                  <th>Symbol</th>
                  <th>Location</th>
                </tr>
              </thead>
               <tbody>
                {this.renderTableData()}
               </tbody>
            </Table>
              </div>    
        </Jumbotron>
      </div>
    );
  };
  }
  
