const admin = require('./adminInteract');
const fs = require('fs');

const verifiedPath = './server/assets/verified.json';

let isVerifiedLocal = (obj) => {
    let data = JSON.parse(fs.readFileSync(verifiedPath));
    data = data.filter((obj) => obj);

    for (let i in data) {
        if (data[i].userAddress == obj.userAddress) {
            return true;
        }
    }

    return false;
}

let addVerifyLocal = (obj) => {
    if (isVerifiedLocal(obj)) {
        return;
    }

    fs.readFile(verifiedPath, (err, data) => {
        data = JSON.parse(data);
        data.push({
            "id": data.length,
            "name": obj.name,
            "email": obj.email,
            "ssn": obj.ssn,
            "userAddress": obj.userAddress
        });

        data = data.filter((obj) => obj);
        fs.writeFileSync(verifiedPath, JSON.stringify(data, null, 4));
        console.log("File written");
    });
}

let addVerify = async (contract, addressObj) => {
    admin.init();
    let acct = admin.getAcct();
    addVerifyLocal(addressObj);

    contract.options.address = addressObj.contAddress;
    let userHash = admin.web3.utils.sha3(addressObj.userAddress);

    await contract.methods
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

let removeVerified = async (contract, addressObj) => {
    admin.init();
    let acct = admin.getAcct();
    contract.options.address = addressObj.contAddress;

    if (isVerifiedLocal(addressObj.userAddress)) {
        fs.readFile(verifiedPath, (err, data) => {
            data = JSON.parse(data);

            for (let i in data) {
                if (data[i].address == addressObj.userAddress) {
                    delete data[i];
                    break;
                }
            }

            data = data.filter((obj) => obj);
            fs.writeFileSync(verifiedPath, JSON.stringify(data, null, 4));
            console.log("File written");
        });
    }

    await contract.methods
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

module.exports = {
    isVerifiedLocal,
    addVerify,
    removeVerified
};