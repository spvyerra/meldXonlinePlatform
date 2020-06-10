import axios from 'axios';
import { secureToken, web3 } from "./constants";


export let getBusList = async () => {
    const url = '/list';

    let res = await axios.get(url)
        .catch(err => console.log(err));

    console.log(res);
    return res.data;
}

export let getBusId = async (idt) => {
    const url = '/list';

    let res = await axios.get(url + `/${idt}`)
        .catch(err => console.log(err));

    return res.data;
}

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
        "pricePerShare": pricePerShare * 100,
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
    return res.data;
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

    return res.data;
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

    return res.data;
}

/**
 * 
 * @param {address of user} address 
 */
export let pendingOrders = async (address) => {
    const url = "/transfer/pending";

    let res = await axios.put(url, { "userAddress": address })
        .catch(err => console.log(err));

    return res.data;
}

/**
 * 
 * @param {address} contract address of securetoken contract
 */
export let shareBalance = async (contract, address) => {
    let userAddress = window.ethereum.selectedAddress;

    secureToken.options.address = contract;

    let res = await secureToken.methods.balanceOf(address)
        .call({ from: address });

    secureToken.options.address = null;
    return res;
}
