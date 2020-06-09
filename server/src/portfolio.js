const fs = require('fs');
const verify = require('./verfied');

const portfolioPath = "./server/assets/portfolio";

let createPortfolio = (address, id) => {
    let obj = {
        "id": id,
        "address": address,
        "shares": []
    };

    fs.writeFileSync(portfolioPath + `/${id}.json`, JSON.stringify(obj, null, 4));
}

let getPortfolio = (address) => {
    let addressObj = verify.getVerified(address);

    try { fs.accessSync(portfolioPath + `/${addressObj.id}.json`); }
    catch (err) { createPortfolio(address, addressObj.id); }

    const portfolio = JSON.parse(fs.readFileSync(portfolioPath + `/${addressObj.id}.json`));

    return portfolio;
}

let addShares = (address, contractID, numShares) => {
    let port = getPortfolio(address);

    let thing = port.shares.find((item) => item.id == contractID);

    if (thing != null) {
        console.log(thing);
        thing.owned += numShares;
    } else {
        port.shares.push({
            "id": contractID,
            "owned": numShares
        });
    }

    console.log(port);

    fs.writeFile(portfolioPath + `/${port.id}.json`, JSON.stringify(port, null, 4),
        (err) => { if (err) console.log(err) });
}

let removeShares = (address, contractID, numShares) => {
    let port = getPortfolio(address);

    let ind = port.shares.findIndex((item) => item.id == contractID);

    console.log(ind);

    if (port.shares[ind].owned == numShares)
        delete port.shares[ind];
    else
        port.shares[ind].owned -= numShares;

    console.log(port);

    port.shares = port.shares.filter((obj) => obj);
    fs.writeFile(portfolioPath + `/${port.id}.json`, JSON.stringify(port, null, 4),
        (err) => { if (err) console.log(err) });
}

module.exports = {
    getPortfolio,
    addShares,
    removeShares
};