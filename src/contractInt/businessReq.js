import axios from 'axios';
import { secureToken, web3 } from "./constants";

/**
 * 
 * @param {*} numShares 
 * @param {Must be in cents} pricePerShare 
 * @param {*} busName 
 * @param {*} busSymbol 
 * @param {*} busType 
 * @param {*} busDesc 
 * @param {*} acct 
 */
export let addBusiness = async (numShares, pricePerShare, busName, busSymbol, busType, busDesc, acct) => {
    const busObj = {
        "busName": busName,
        "symbol": busSymbol,
        "numShares": numShares,
        "pricePerShare": pricePerShare,
        "type": busType,
        "description": busDesc,
        "ownerAddress": acct
    };

    const url = "/bus/add";

    let res = await axios({
        method: 'post',
        url: url,
        data: {
            busObj
        }
    }).catch(err => console.log(err + "Failed"));

    console.log(res);
    return res;
}


/**
 * MAJOR THING SINCE DECIMALS ARE NOT SUPPORTED ON CONTRACTS
 * PRICE IS IN CENTS
 * @param {
 * userAddress: address,
 * contract: address,
 * price: number,
 * amount: number} obj 
 */
export let sellShares = async (obj) => {
    const url = "/transfer/sell";

    let res = await axios.post(url, obj)
        .catch(err => console.log(err));

    return res;
}

/**
 * MAJOR THING SINCE DECIMALS ARE NOT SUPPORTED ON CONTRACTS
 * PRICE IS IN CENTS
 * @param {
 * userAddress: address,
 * contract: address,
 * price: number,
 * amount: number} obj 
 */
export let buyShares = async (obj) => {
    const url = "/transfer/buy";

    let res = await axios.post(url, obj)
        .catch(err => console.log(err));

    return res;
}

/**
 * 
 * @param {address of user} address 
 */
export let pendingOrders = async (address) => {
    const url = "/transfer/pending";

    let res = await axios.put(url, { "userAddress": address })
        .catch(err => console.log(err));

    return res;
}

/**
 * 
 * @param {address} contract address of securetoken contract
 */
export let shareBalance = async (contract) => {
    let userAddress = window.ethereum.selectedAddress;

    secureToken.options.address = contract;

    let res = await secureToken.methods.balanceOf(userAddress)
        .call({ from: userAddress });

    secureToken.options.address = null;
    return res;
}
