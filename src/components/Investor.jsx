import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Table } from 'reactstrap';


import "../investors.css";
import { userDeposit, addVerification, getPortfolio } from '../contractInt/investReq';
import { getBusList } from '../contractInt/businessReq';


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

    register = () => {
        if (this.state.name !== "" && this.state.email !== "" && this.state.ssn !== "") {

            const Obj = {
                "userAddress": window.ethereum.selectedAddress,
                "name": this.state.FullName,
                "ssn": this.state.ssn,
                "email": this.state.email,
            };

            addVerification(Obj);
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
    }


    renderGetPortfolio = () => {
        console.log(this.state.InvestorPortfolio);

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
                    <NavLink id="homeLink" className="link" to="/">
                        Home
            </NavLink>
                    <NavLink id="investorLink" className="link" to="/business/registration">
                        Business
            </NavLink>
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
                    <form id="formDiv" onSubmit={this.register}>
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

                        <button className="btn btn-primary" id="busButton" value="submit" type="submit">Submit</button>
                    </form>


                </div>

                <div id="converter">
                    <div id="convertDiv">
                        <div id="convertHeader">
                            <h1 id="convert" className="display-3" > Convert USD to Meldcoin</h1>
                            <label htmlFor="convert"> Note: you must be a verified user to own Meldcoin</label>
                        </div>
                        <form id="convertForm" onSubmit={this.mint} >
                            <div className="form-group">
                                <label htmlFor="mint"> USD to MeldCoin (1:1) </label>
                                <input id="convertInput" className="form-control" type="number" id="mint" placeholder="USD to convert" onChange={this.mintChange} />
                            </div>
                            <button className="btn btn-primary" value="submit" type="submit" >Convert </button>
                        </form>
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
            </Jumbotron>
        );
    }

}

