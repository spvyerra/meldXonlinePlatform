let admin = require('./adminInteract');

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
    
    return deployAddress;
}