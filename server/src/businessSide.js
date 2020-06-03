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
            deployAddress = rec.contractAddress;
        });

    admin.exit();

    return deployAddress;
}

let isVerifiedLocal = (address) => {
    let data = JSON.parse(fs.readFileSync(verifiedPath));
    data = data.filter((obj) => obj);

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

    if (!isVerifiedLocal(addressObj.userAddress)) {
        fs.readFile(verifiedPath, (err, data) => {
            data = JSON.parse(data);
            data.push({
                "id": data.length,
                "address": addressObj.userAddress
            });

            data = data.filter((obj) => obj);
            fs.writeFileSync(verifiedPath, JSON.stringify(data, null, 4));
            console.log("File written");
        });
    }

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
}

let removeVerified = async (addressObj) => {
    admin.init();
    let acct = admin.getAcct();
    secureToken.options.address = addressObj.contAddress;

    if (isVerifiedLocal(addressObj.userAddress)) {
        fs.readFile(verifiedPath, (err, data) => {
            data = JSON.parse(data);

            for (i in data) {
                if (data[i].address == addressObj.userAddress) {
                    delete data[i];
                }
            }

            data = data.filter((obj) => obj);
            fs.writeFileSync(verifiedPath, JSON.stringify(data, null, 4));
            console.log("File written");
        });
    }

    await secureToken.methods
        .removeVerified(addressObj.userAddress)
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

let reissue = async (obj) => {
    admin.init();
    const acct = getAcct();
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

module.exports = {
    addVerify,
    deploySecureToken,
    isVerifiedLocal,
    reissue,
    removeVerified
};
