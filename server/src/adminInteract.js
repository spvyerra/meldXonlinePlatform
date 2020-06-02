const Web3 = require('web3');
const fs = require('fs');

let web3 = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/d938f5a0bc83408e887c10d7a7599c17'));
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

let deploySecureToken = async (bus) => {
    let acct = getAcct();
    let deployAddress;

    // Get SecureToken contract
    fs.readFile('../../build/contracts/SecureToken.json', (err, data) => {
        if (err) throw err;
        let rawContract = JSON.parse(data);

        let bytecode = rawContract.bytecode;
        let ownerHash = web3.utils.sha3(bus.ownerAddress);

        let secureToken = new web3.eth.Contract(rawContract.abi);

        let contObj = secureToken.deploy({
            data: bytecode,
            arguments: [bus.ownerAddress, ownerHash, bus.numShares, bus.busName, bus.symbol]
        });

        let contString = web3.eth.sign(contObj, acct.address);
        web3.eth.sendSignedTransaction(contString.toHex)
            .on('receipt', (rec) => {
                console.log(rec);
                deployAddress = rec.address;
            });

    });

    return deployAddress;
}

let obj = {
    "busName": "newBus",
    "symbol": "nbs",
    "numShares": 100,
    "ownerAddress": "0xebBF6e4fC3a229D4f5b3B00C6018cff2f3246Cc5",
    "id": 1
};

deploySecureToken(obj);

module.exports = {
    getAcct,
    getBal,
    deploySecureToken
};