import data from './assets/businesses.json';
import fs from 'fs';

export let addBusiness = (numShares, busName, busSymbol) => {
    let busObj = {
        "busName": busName,
        "symbol": busSymbol,
        "numShares": numShares
    };

    let obj = JSON.stringify(busObj);
    fs.writeFileSync(data, obj);
}