const SecureToken = artifacts.require("SecureToken");
const web3 = require('../node_modules/web3');

contract("Secure Token tests", async accounts => {
    it("name, symbol and decimals", async () => {
        let contract = await SecureToken.deployed();

        let name = "Meldshare ERC-884 Test";
        let symbol = "MST";

        assert.equal(await contract.name.call(), name);
        assert.equal(await contract.symbol.call(), symbol);
        assert.equal(await contract.decimals.call(), 0);
        assert.equal(await contract.totalSupply.call(), 10000);
    });

    it("basic verification check", async () => {
        let instance = await SecureToken.deployed();

        // Checks that deployer is not verified
        assert(!(await instance.isVerified.call(accounts[0])));

        // Checks that owner is verified
        let verifiedCheck = await instance.isVerified.call(accounts[1]);
        assert(verifiedCheck);
    });

    it("adding and removing verified", async () => {
        let contract = await SecureToken.deployed();

        await contract.addVerified(accounts[2], web3.utils.asciiToHex("acct2"));
        assert(await contract.isVerified.call(accounts[2]));

        await contract.removeVerified(accounts[2]);
        assert(!(await contract.isVerified.call(accounts[2])));
    });

    it("update verified hash", async () => {
        let contract = await SecureToken.deployed();

        let oldHash = web3.utils.asciiToHex("acct2");
        await contract.addVerified(accounts[2], oldHash);

        assert(await contract.isVerified.call(accounts[2]));
        assert(await contract.hasHash(accounts[2], oldHash));

        let newHash = web3.utils.asciiToHex("thenumber2acct");
        await contract.updateVerified(accounts[2], newHash);

        assert(await contract.isVerified.call(accounts[2]));
        assert(!(await contract.hasHash(accounts[2], oldHash)));
        assert(await contract.hasHash(accounts[2], newHash));

    });

    it("transfer direct tests", async () => {
        let contract = await SecureToken.deployed();

        await contract.addVerified(accounts[2], web3.utils.asciiToHex("acct2"));
        await contract.addVerified(accounts[3], web3.utils.asciiToHex("acct3"));
        await contract.addVerified(accounts[4], web3.utils.asciiToHex("acct4"));

        let test = await contract.isHolder.call(accounts[1]);

        assert(await contract.isHolder.call(accounts[1]));

        // Tests Transfer
        await contract.transfer(accounts[2], 1000, { from: accounts[1] });
        assert(contract.isHolder.call(accounts[2]));

        assert.equal(await contract.balanceOf.call(accounts[2], { from: accounts[2] }), 1000);
        assert.equal(await contract.balanceOf.call(accounts[1], { from: accounts[1] }), 9000);

        assert.equal(await contract.holderCount.call(), 2);
    });

    it("transfer from tests", async () => {
        let contract = await SecureToken.deployed();

        await contract.addVerified(accounts[2], web3.utils.asciiToHex("acct2"));
        await contract.addVerified(accounts[3], web3.utils.asciiToHex("acct3"));
        await contract.addVerified(accounts[4], web3.utils.asciiToHex("acct4"));
        
        assert(await contract.isHolder.call(accounts[1]));
        
        // Tests transferfrom
        await contract.transferFrom(accounts[1], accounts[3], 2000);
        assert(contract.isHolder.call(accounts[3]));

        assert.equal(await contract.balanceOf.call(accounts[1], { from: accounts[1] }), 7000);
        assert.equal(await contract.balanceOf.call(accounts[2], { from: accounts[2] }), 1000);
        assert.equal(await contract.balanceOf.call(accounts[3], { from: accounts[3] }), 2000);
        
        assert.equal(await contract.holderCount.call(), 3);
    });
    
    it("reissue shareholder shares", async () => {
        let contract = await SecureToken.deployed();
        
        let numShares = await contract.balanceOf.call(accounts[1], { from: accounts[1] });
        assert.equal(numShares.toNumber(), 7000);
        
        await contract.addVerified(accounts[9], web3.utils.asciiToHex("acct2"));
        
        assert(await contract.isVerified.call(accounts[9]));
        assert(!(await contract.isHolder.call(accounts[9])));
        
        await contract.cancelAndReissue(accounts[1], accounts[9]);
        
        numShares = await contract.balanceOf.call(accounts[9], { from: accounts[9] });
        assert.equal(numShares.toNumber(), 7000);
        
        assert(await contract.isVerified.call(accounts[1]));
        assert(!(await contract.isHolder.call(accounts[1])));
        
        assert.equal(await contract.holderCount.call(), 3);
    });
    
    it("extra test", async () => {
        let contract = await SecureToken.deployed();
        
        await contract.addVerified(accounts[2], web3.utils.asciiToHex("acct2"));
        await contract.addVerified(accounts[3], web3.utils.asciiToHex("acct3"));
        await contract.addVerified(accounts[9], web3.utils.asciiToHex("acct4"));

        await contract.transferFrom(accounts[9], accounts[3], 7000);
        
        assert.equal(await contract.balanceOf.call(accounts[2], { from: accounts[2] }), 1000);
        assert.equal(await contract.balanceOf.call(accounts[3], { from: accounts[3] }), 9000);
        
        assert.equal(await contract.holderCount.call(), 2);
    });
});