let admin = require('./adminInteract.js');
const fs = require('fs');

const contractPath = './build/contracts/SecureToken.json';

const rawContract = JSON.parse(fs.readFileSync(contractPath));
const bytecode = rawContract.bytecode;

let secureToken = new admin.web3.eth.Contract(rawContract.abi);

let deploySecureToken = async (bus) => {
    admin.init();
    let acct = admin.getAcct();

    let ownerHash = admin.web3.utils.sha3(bus.ownerAddress);
    let deployedAddress;

    await secureToken.deploy({
        data: bytecode,
        arguments: [bus.ownerAddress, ownerHash, bus.numShares, bus.busName, bus.symbol]
    })
        .send({
            from: acct.address
        })
        .on("transactionHash", (hash) => console.log(hash))
        .on('receipt', (rec) => {
            console.log(rec);
            deployedAddress = rec.contractAddress;
        });

    admin.exit();

    return deployedAddress;
}

let reissue = async (obj) => {
    admin.init();
    const acct = admin.getAcct();
    secureToken.options.address = obj.contAddress;

    await secureToken.methods
        .cancelAndReissue(obj.oldAddress, obj.newAddress)
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
}

let transfer = async (_to, _from, _value, _contAddress) => {
    admin.init();
    let acct = admin.getAcct();
    secureToken.options.address = _contAddress;

    await secureToken.methods
        .transferFrom(_from, _to, _value)
        .send({ from: acct.address })

        .on("transactionHash", (hash) => console.log(hash))
        .on("receipt", (rec) => {
            console.log("Tx Completed");
            console.log(rec);
        })

        .on('error', (err, rec) => {
            console.log("error occured");
            console.log(rec);
            console.log(err);
        });

    admin.exit();
}

module.exports = {
    deploySecureToken,
    reissue,
    transfer
};
