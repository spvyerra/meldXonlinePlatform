let admin = require('./adminInteract.js');
const fs = require('fs');

const contractPath = '../../build/contracts/SecureToken.json';
const verifiedPath = '../assets/verified.json';

const rawContract = JSON.parse(fs.readFileSync(contractPath));
const bytecode = rawContract.bytecode;

let secureToken = new admin.web3.eth.Contract(rawContract.abi);

let deploySecureToken = async (bus) => {
    admin.init();
    let acct = admin.getAcct();

    let deployAddress;
    let ownerHash = admin.web3.utils.sha3(bus.ownerAddress);

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

let isVerified = (address) => {
    let data = JSON.parse(fs.readFileSync(verifiedPath));

    for (i in data) {
        if (data[i].address == address) {
            return true;
        }
    }

    return false;
}

let addVerify = async (addressObj) => {
    admin.init();
    let acct = admin.getAcct();

    secureToken.options.address = addressObj.contAddress;
    let userHash = admin.web3.utils.sha3(addressObj.userAddress);

    await secureToken.methods
        .addVerified(addressObj.userAddress, userHash)
        .send({ from: acct.address })

        .on("transactionHash", (hash) => console.log(hash))

        .on("receipt", (rec) => {
            console.log("Tx completed");
            console.log(rec);
        })

        .on("error", (err, rec) => {
            console.log("error occured");
            console.log(rec);
            console.log(err);
        });

    admin.exit();

    fs.readFile(verifiedPath, (err, data) => {
        data = JSON.parse(data);
        data.push({
            "id": data.length,
            "address": addressObj.userAddress
        });

        fs.writeFileSync(verifiedPath, JSON.stringify(data, null, 4));
        console.log("File written");
    });
}

let removeVerified = async (addressObj) => {

}

let reissue = async () => {

    return await contract.methods.cancelAndReissue(rawData[""], rawData[""]);
}


module.exports = {
    addVerify,
    deploySecureToken,
    isVerified,
    reissue
};
