const fs = require('fs');
const verify = require('./verfied');

const protfolioPath = "./server/assets/portfolio";

let getPortfolio = (address) => {
    let addressObj = verify.getVerified(address);

    const portfolio = JSON.parse(fs.readFileSync(protfolioPath + `/${addressObj.id}.json`));

    return portfolio;
}

let addShares = (address, contractID, numShares) => {
    let portfolio = getPortfolio(address);

    

}

let removeShares = (address, contractID, numShares) => {
    
}

module.exports = {
    getPortfolio,
    addShares,
    removeShares
};