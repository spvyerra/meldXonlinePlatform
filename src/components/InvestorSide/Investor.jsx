import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Table } from 'reactstrap';


import "../../investors.css";
import { userDeposit, addVerification, getPortfolio } from '../../contractInt/investReq';
import { getBusList, getBusId, sellShares } from '../../contractInt/businessReq';


export default class Investor extends React.Component {


    constructor() {
        super()
        this.state = ({
            portfolioSwitch: false
        });

        getBusList().then((list) => this.setState({ masterList: list }));
    }
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

    register = async () => {
        if (this.state.name !== "" && this.state.email !== "" && this.state.ssn !== "") {
            const Obj = {
                "userAddress": window.ethereum.selectedAddress,
                "name": this.state.FullName,
                "ssn": this.state.ssn,
                "email": this.state.email,
            };

            await addVerification(Obj);
            alert("Sucessfully verified");
        }

    }

    mint = async () => {
        let address = window.ethereum.selectedAddress;

        let obj = {
            "userAddress": address,
            "amt": this.state.mintToken * 100
        };

        let res = await userDeposit(obj);

        console.log(res);
        alert("Deposit Completed");
    }

    sellBus = async () => {
        let list = await getBusList();

        let option = list.find((item) => item.symbol.toUpperCase() == this.state.businessSymbol.toUpperCase());
        console.log(option);
        let breakDown = await getBusId(option.id);

        let acct = window.ethereum.selectedAddress;
        let res = await sellShares({
            "userAddress": acct,
            "contract": breakDown.address,
            "price": breakDown.pricePerShare,
            "amount": this.state.numBuyShares,
            "id": option.id
        });

        alert("Sell Order Placed");
    }

    renderGetPortfolio = () => {
        if (this.state.InvestorPortfolio.length == 0) {
            alert("You currently do not own any shares")
            this.setState({
                portfolioSwitch: false
            });
        } else {
            return this.state.InvestorPortfolio.map((company, index) => {
                let { id, owned } = company //destructuring

                if (id <= -1) id = 0;

                let info = this.state.masterList[id];

                return (
                    <tr key={id}>
                        <td>{info.busName}</td>
                        <td>{info.symbol}</td>
                        <td>{owned}</td>
                    </tr>
                );
            })
        }
    }

    getPortfolioFunction = () => {
        getPortfolio().then((info) => {
            this.setState({
                InvestorPortfolio: info.shares,
                portfolioSwitch: true
            });
        });
    }

    render() {


        return (
            <Jumbotron id="test">
                <div className="headerLinks">
                    <NavLink id="homeLink" className="link" to="/">Home</NavLink>
                    <NavLink id="investorLink" className="link" to="/business/registration">Business</NavLink>
                </div>
                <div id="invHeading">
                    <h1 className="display-3">Investors</h1>
                </div>
                <div id="explainer">
                    <p>Get verified and become a verified <br /> investor on Meld Exchange</p>
                    <hr className="gradHr" ></hr>
                </div>
                <div id="investorForm">
                    <h1 id="formHeader" className="display-3"> Register</h1>
                    <div id="formDiv" >
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <br />
                            <input className="form-control" type="text" id="fullName" placeholder="Name" onChange={this.nameChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <br />
                            <input className="form-control" type="email" id="email" placeholder="Email" onChange={this.emailChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="ssn">SSN</label>
                            <br />
                            <input className="form-control" type="number" id="ssn" placeholder="SSN" onChange={this.ssnChange} />
                        </div>

                        <button className="btn btn-primary" onClick={this.register} id="busButton" value="submit" type="submit">Submit</button>
                    </div>


                </div>

                <div id="converter">
                    <div id="convertDiv">
                        <div id="convertHeader">
                            <h1 id="convert" className="display-3" > Convert USD to Meldcoin</h1>
                            <label htmlFor="convert"> Note: you must be a verified user to own Meldcoin</label>
                        </div>
                        <div id="convertForm"  >
                            <div className="form-group">
                                <label htmlFor="mint"> USD to MeldCoin (1:1) </label>
                                <input id="convertInput" className="form-control" type="number" id="mint" placeholder="USD to convert" onChange={this.mintChange} />
                            </div>
                            <button className="btn btn-primary" onClick={this.mint} value="submit" type="submit" >Convert </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div id="registerFormCheck">
                        <hr className="my-2" />
                        <h1 id="formHeaderCheck" className="display-3"> Get Portfolio</h1>
                        <button className="btn btn-primary" id="busButton" onClick={this.getPortfolioFunction}>View</button>

                    </div>

                    {this.state.portfolioSwitch ? <Table id='businessTable'>
                        <thead>
                            <tr>
                                <th>Business Name</th>
                                <th>Symbol</th>
                                <th>Number of Shares Owned</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.renderGetPortfolio()}
                        </tbody>
                    </Table> : null}
                </div>

                <br />
                <div  id="sellDiv">
                    <h1 id="formHeader" className="display-3">Sell Your Shares</h1>
                    <div id="formDiv" >
                    <div className="form-group">
                        <label htmlFor="busSymbol">Business Symbol</label>
                        <br />
                        < input className="form-control" type="text" id="busSymbol" placeholder="Symbol 3-4 letters" onChange={this.symbolChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="numShares">Number of shares</label>
                        <br />
                        <input className="form-control" type="number" id="numShares" placeholder="# of Shares" onChange={this.shareChange} />
                    </div>
                    <button className="btn btn-primary" onClick={this.sellBus} id="busButton" value="submit" type="submit">Sell</button>

                    </div>
                </div>

            </Jumbotron>
        );
    }

}

