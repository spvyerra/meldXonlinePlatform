const fs = require('fs');
const verify = require('./verfied');

const portfolioPath = "./server/assets/portfolio";

let getPortfolio = (address) => {
    let addressObj = verify.getVerified(address);

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
        (err) => console.log(err));
}

module.exports = {
    getPortfolio,
    addShares,
    removeShares
};