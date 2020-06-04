//import fs from 'fs';
//import { getDefaultNormalizer } from '@testing-library/react';

export let addBusiness = (numShares, busName, busSymbol, busType, busDesc) => {
    let busObj = {
        "busName": busName,
        "symbol": busSymbol,
        "numShares": numShares,
        "type": busType,
        "description": busDesc
    };

    let obj = JSON.stringify(busObj);

    console.log("test.me")
     var xhr = new XMLHttpRequest()
     xhr.addEventListener('load', () => {
    //     // update the state of the component with the result here
         console.log(xhr.responseText)
    })

    xhr.open('POST',  "/bus/add", true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(obj);

    

}
