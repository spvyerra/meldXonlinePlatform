import axios from 'axios';
//const axios = require('axios');
//import fs from 'fs';
//import { getDefaultNormalizer } from '@testing-library/react';

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

/*
    obj format:
    {
        "userAddress": address,
        "contract": address,
        "price": number,
        "amount": number
    }
*/
export let sellShares = async (obj) => {
    const url = "/transfer/sell";

    let thing = await axios.post(url, obj);

    return thing;
}

// Object must be set up the same as sell shares
export let buyShares = async (obj) => {
    const url = "/transfer/buy";

    let thing = await axios.post(url, obj);

    return thing;
}



