let admin = require('./adminInteract');
const fs = require('fs');

const contractPath = '../../build/contracts/SecureToken.json';

const rawContract = JSON.parse(fs.readFileSync(contractPath));
const bytecode = rawContract.bytecode;

let secureToken = admin.web3.eth.Contract(rawContract.abi);

let deploySecureToken = async (bus) => {
    admin.init();
    let acct = admin.getAcct();

    let deployAddress;
    let ownerHash = web3.utils.sha3(bus.ownerAddress);

    secureToken.deploy({
        data: bytecode,
        arguments: [bus.ownerAddress, ownerHash, bus.numShares, bus.busName, bus.symbol]
    })
        .send({
            from: acct.address
        })
        .on("transactionHash", (hash) => console.log(hash))
        .on('receipt', (rec) => {
            console.log(rec);
            deployAddress = rec.address;
        });

    admin.exit();

    return deployAddress;
}

let addVerify = async (addressObj) => {

    

    let verified = await contract.methods.addVerified(rawData['ownerAdress'], rawData['name']).call({ from: acct });
    return verified;
}

let isVerified = async () => {

    let isVerified = await contract.methods.isVerified(rawData['ownerAdress']).call();
    return isVerified;
}

let reissue = async () => {

    return await contract.methods.cancelAndReissue(rawData[""], rawData[""])
}

module.exports = {
    getAcct,
    isVerified,
    addVerify,
    getBal,
    deploySecureToken,
    addVerified
};
