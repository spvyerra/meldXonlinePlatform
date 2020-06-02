let admin = require('./adminInteract');
const fs = require('fs');

const contractPath = '../../build/contracts/SecureToken.json';

let rawContract = fs.readFileSync(contractPath);
let abi = JSON.parse(rawContract);

let deploySecureToken = async (bus) => {
    admin.init();

    let acct = admin.getAcct();
    let deployAddress;
    
    // Get SecureToken contract
    fs.readFile('../../build/contracts/SecureToken.json', (err, data) => {
        if (err) throw err;
        let rawContract = JSON.parse(data);
        
        let bytecode = rawContract.bytecode;
        let ownerHash = web3.utils.sha3(bus.ownerAddress);
        
        let secureToken = new admin.web3.eth.Contract(rawContract.abi);
        
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
        
    });
    
    admin.exit();

    return deployAddress;
}

let addVerified = (address) => {
    admin.init();

    let acct = admin.getAcct();


}

module.exports = {
    deploySecureToken,
    addVerified
};
