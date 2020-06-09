import React from 'react';
import { Jumbotron, Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import "../home.css"

import { shareBalance, getBusId, getBusList, buyShares } from "../contractInt/businessReq";

export default class Home extends React.Component {


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
        getBusList().then((info) => {
            this.setState({
                busisnesses: info
            });
        });
    }

    nameChange = (e) => {
        this.setState({
            businessName: e.target.value
        });
    }
    symbolChange = (e) => {
        this.setState({
            businessSymbol: e.target.value
        });
    }

    shareChange = (e) => {
        this.setState({
            numBuyShares: e.target.value
        });
    }

    buyBus = async () => {
        let list = await getBusList();

        let option = list.find((item) => item.symbol.toUpperCase() == this.state.businessSymbol.toUpperCase());
        console.log(option);
        let breakDown = await getBusId(option.id);

        let address = window.ethereum.selectedAddress;
        let res = await buyShares({
            "userAddress": address,
            "contract": breakDown.address,
            "price": breakDown.pricePerShare,
            "amount": this.state.numBuyShares
        });
    }




    renderTableData() {
        return this.state.busisnesses.map((business, index) => {
            const { id, busName, symbol, numShares, pricePerShare } = business //destructuring


            return (
                <tr key={id}>
                    <td>{busName}</td>
                    <td>{symbol}</td>
                    <td>{numShares}</td>
                    <td>{pricePerShare} </td>
                    <td>{this.getAvailableTokens(id)}</td>
                </tr>
            )
        })
    }

    render() {
        return (
          <tr key={id}>
             <td>{busName}</td>
             <td>{symbol}</td>
             <td>{numShares}</td>
             <td>{pricePerShare} </td>
              
          </tr>
       )
    })
 }

  render() {
    return (
      <div>
        <Jumbotron>
          <div className = "headerLinks">
            <NavLink id= "homeLink" className="link" to="/business/registration">
               Business
            </NavLink> 
            <NavLink id="investorLink" className="link" to="/investor">
                 Investors
             </NavLink> 
                      </div>
          <div id="homeHeading">
            <h1 className="display-3">Hello!</h1>
            <p className="lead">Welcome to Meld Exchange.</p>
            <hr className="my-2" />
          </div>

          
         
            <div class="homeBusDiv">
            <div id="homeBusHeading">
              <h2 id="formHeader" className="display-3"> Buisnesses on MeldX</h2>
            </div>
           
            <Table id='businessTable'>
                <thead>
                <tr>
                  <th>Business Name</th>
                  <th>Symbol</th>
                  <th>Number of shares</th>
                  <th> Price per Share</th>

                </tr>
              </thead>
               <tbody>
                {this.renderTableData()}
               </tbody>
            </Table>
              </div> 
              <div id="spacer">
                <p></p>
              </div>
              <div id="registerForm">
            <h1 id="formHeader" className="display-3"> Invest in a Business</h1>
            <form id="formDiv" onSubmit={this.buyBus}>
              <div class="form-group">
                  <label for="busName">Business Name</label>
                  <br/>
                  <input class="form-control"  type="text"  id="busName" placeholder="Name" onChange={this.nameChange} />
              </div>
              <div class="form-group">
                 <label for="busSymbol">Business Symbol</label>
                 <br/>
                 < input class="form-control"  type="text" id="busSymbol"  placeholder="Symbol 3-4 letters" onChange={this.symbolChange} />
              </div> 
              <div class="form-group">
                <label for="numShares">Number of shares to Buy</label>
                 <br/>
                 <input class="form-control"  type="number" id="numBuyShares"  placeholder="# of Shares" onChange={this.shareChange} />
               </div>
               <button class="btn btn-primary" id="busButton" value="submit" type="submit">Submit</button>
            </form>
             </div>   
        </Jumbotron>
      </div>
    );
  };
  }
  
