import axios from 'axios';

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

    return res;
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
    
    return res;
}