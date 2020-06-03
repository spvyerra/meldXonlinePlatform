const admin = require('./adminInteract');
const fs = require('fs');

const contractPath = '../../build/contracts/MeldCoin.json'
const rawContract = JSON.parse(fs.readFileSync(contractPath));
const abi = rawContract.abi;
const bytecode = rawContract.bytecode;

let deployMeldcoin = () => {
    let acct = admin.getAcct();
    
}