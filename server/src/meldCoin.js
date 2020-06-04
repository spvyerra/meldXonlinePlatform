const admin = require('./adminInteract');
const fs = require('fs');
const verify = require('./verfied');

const contractPath = './build/contracts/MeldCoin.json';
const stablePath = './server/assets/stableCoin.txt';

const rawContract = JSON.parse(fs.readFileSync(contractPath));
const bytecode = rawContract.bytecode;

let meldCoin = new admin.web3.eth.Contract(rawContract.abi);

let stableAddress = () => {
    return fs.readFileSync(stablePath, 'utf-8');
}

let deployMeldcoin = async () => {
    admin.init();
    let acct = admin.getAcct();
    let deployAddress;

    await meldCoin.deploy({ data: bytecode })
        .send({ from: acct.address })
        .on("transactionHash", (hash) => console.log(hash))
        .on('receipt', (rec) => {
            console.log(rec);
            console.log(typeof (rec));
            deployAddress = rec.contractAddress;
        });

    admin.exit();

    console.log(deployAddress);
    fs.writeFileSync(stablePath, deployAddress);

    return deployAddress;
}

let mintTokens = async (address, amount) => {
    admin.init();
    let acct = admin.getAcct();
    meldCoin.options.address = stableAddress();

    let tmp = await meldCoin.methods.isVerified(address).call();

    if (!tmp) {
        let hash = admin.web3.utils.sha3(address);

        await meldCoin.methods
            .addVerified(address, hash)
            .send({ from: acct.address })
            .on('receipt', () => console.log("Add verified"))
            .on('error', () => console.log("still not working"));
    }

    await meldCoin.methods
        .mint(address, amount)
        .send({
            from: acct.address,
            gasPrice: "1000000000",
            gas: 100000
        })
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

let burnTokens = async (address, amount) => {
    admin.init();
    let acct = admin.getAcct();
    meldCoin.options.address = stableAddress();

    let tmp = await meldCoin.methods.isVerified(address).call();

    if (!tmp) {
        let hash = admin.web3.utils.sha3(address);

        await meldCoin.methods
            .addVerified(address, hash)
            .send({ from: acct.address })
            .on('receipt', () => console.log("Add verified"))
            .on('error', () => console.log("still not working"));
    }

    await meldCoin.methods
        .burn(address, amount)
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

let checkBalance = async (address) => {
    admin.init();

    meldCoin.options.address = stableAddress();
    let tmp = await meldCoin.methods.balanceOf(address).call();

    console.log(tmp);
    admin.exit();
    return tmp;
}

let addVerify = async (addresssObj) => {
    addresssObj.contAddress = stableAddress();
    await verify.addVerify(meldCoin, addresssObj);

    return stableAddress();
}

module.exports = {
    mintTokens,
    burnTokens,
    checkBalance,
    addVerify
};