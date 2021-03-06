import axios from 'axios';

import { web3, meldCoin } from "./constants";

/**
 * 
 * @param { 
 * userAddress: address,
 * name: string,
 * ssn: number,
 * email: string} obj 
 */
export let addVerification = async (obj) => {
    const url = '/user/add';

    let res = await axios.post(url, obj)
        .catch(err => console.log(err));

    return res.data;
}

/**
 * 
 * @param {
 * userAddress: address,
 *  amt: amountOfTokens} obj 
 */
export let userDeposit = async (obj) => {
    const url = 'user/deposit';

    let res = await axios.post(url, obj)
        .catch(err => console.log(err));

    return res.data;
}

// Gets meldcoin balance of logged in user
// RETURNS in cents
export let userBalance = async () => {
    let address = window.ethereum.selectedAddress;

    let res = await meldCoin.methods.balanceOf(address)
        .call({ from: address });

    return res;
}


export let getPortfolio = async () => {
    let address = window.ethereum.selectedAddress;
    console.log(address);
    const url = '/portfolio/' + address;

    let res = await axios.get(url)
        .catch(err => console.log(err));
    
    return res.data;
}
