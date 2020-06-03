
//import fs from 'fs';
//import { getDefaultNormalizer } from '@testing-library/react';

export let addBusiness = (numShares, busName, busSymbol) => {
    let busObj = {
        "busName": busName,
        "symbol": busSymbol,
        "numShares": numShares
    };

    let obj = JSON.stringify(busObj);
    //fs.writeFileSync(data, obj);

    console.log("test.me")
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
        // update the state of the component with the result here
        console.log(xhr.responseText)
      })

      xhr.open('GET',  "http://localhost:8080/list/-1")
      xhr.send()
}
