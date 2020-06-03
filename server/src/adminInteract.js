const Web3 = require('web3');
const fs = require('fs');
const HDwalletProvider = require('@truffle/hdwallet-provider');

let web3 = new Web3();
let provider;
const password = "The best password in the world boi";

let creatAcct = () => {
    let acct = web3.eth.accounts.create();
    console.log(acct);
    fs.writeFileSync('../assets/serverAcct.json', JSON.stringify(acct, null, 4));
}

let encryptAcct = () => {
    let raw = JSON.parse(fs.readFileSync('../assets/serverAcct.json'));

    let encrypted = web3.eth.accounts.encrypt(raw.privateKey, password);
    fs.writeFileSync('../assets/encryptedAcct.json', JSON.stringify(encrypted, null, 4));

    return encrypted;
}

let getAcct = () => {
    let raw = JSON.parse(fs.readFileSync('../assets/encryptedAcct.json'));

    let decrypted = web3.eth.accounts.decrypt(raw, password);

    return decrypted;
}

let getBal = async () => {
    let acct = getAcct();

    return await web3.eth.getBalance(acct.address);
}

let init = () => {
    let acct = getAcct();
    
    provider = new HDwalletProvider(acct.privateKey, "https://rinkeby.infura.io/v3/d938f5a0bc83408e887c10d7a7599c17");
    web3.setProvider(provider);
}

let exit = () => {
    provider.engine.stop();
}

module.exports = {
    getAcct,
    getBal,
    init,
    exit,
    web3
};