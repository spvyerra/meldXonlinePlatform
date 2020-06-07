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

    await axios({
        method: 'post',
        url: url,
        data: {
            busObj
        }
    }).then(data => console.log(data + "succcess"))
        .catch(err => console.log(err + "Failed"));

    // console.log("test.me")
    //  var xhr = new XMLHttpRequest()
    //  xhr.addEventListener('load', () => {
    // //     // update the state of the component with the result here
    //      console.log(xhr.responseText)
    // })

    // xhr.open('POST',  "/bus/add", true);
    // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // xhr.send(obj);


}

