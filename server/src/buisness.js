const Web3 = require('web3');
const fs = require('fs');
let abi = require("./SecureTokenAbi.js");
let web3 = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/d938f5a0bc83408e887c10d7a7599c17'));
const password = "The best password in the world boi";


let contract = new web3.eth.Contract(abi);
let rawData = JSON.parse(fs.readFileSync("../assets/busBreak/-1.json"));
contract.options.address = rawData['contactAddress'];

let getAcct = () => {
    let raw = JSON.parse(fs.readFileSync('../assets/encryptedAcct.json'));

    let decrypted = web3.eth.accounts.decrypt(raw, password);

    return decrypted;
}

let addVerify = async () => {

    console.log("Hello");
    
    let verified = await contract.methods.addVerified(rawData['ownerAdress'], rawData['name']).call({from: acct});
    return verified;
}

let isVerified = async () => {

    let isVerified = await contract.methods.isVerified(rawData['ownerAdress']).call();
    return isVerified;
}

let getBal = async () => {
    let acct = getAcct();

    return await web3.eth.getBalance(acct.address);
}

let reissue = async () => {
    
    return await contract.methods.cancelAndReissue(rawData[""], rawData[""])
}
module.exports = {
    getAcct,
    isVerified,
    addVerify,
    getBal
};