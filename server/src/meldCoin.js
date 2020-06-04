const admin = require('./adminInteract');
const fs = require('fs');

const contractPath = '../../build/contracts/MeldCoin.json';
const stableAddress = '../assets/stableCoin.txt';

const rawContract = JSON.parse(fs.readFileSync(contractPath));
const bytecode = rawContract.bytecode;

let meldCoin = new admin.web3.eth.Contract(rawContract.abi);

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
    fs.writeFileSync(stableAddress, deployAddress);

    return deployAddress;
}



module.exports = {
    deployMeldcoin
};
