const meldC = artifacts.require("MeldCoin");
const web3 = require('web3');

contract("Meldcoin Token test", async (accounts) => {
    it("transfer from tests", async () => {
        let contract = await meldC.deployed();

        await contract.addVerified(accounts[1], web3.utils.asciiToHex("acct2"));
        await contract.addVerified(accounts[3], web3.utils.asciiToHex("acct3"));
        await contract.addVerified(accounts[4], web3.utils.asciiToHex("acct4"));

        let tmp = await contract.isVerified(accounts[3]);
        assert(tmp);

        await contract.mint(accounts[3], 10000);

        let bal = await contract.balanceOf.call(accounts[3]);
        console.log(bal.toNumber())
        assert.equal(bal, 10000);

        // Tests transferfrom
        await contract.transferFrom(accounts[3], accounts[1], 2000);

        assert.equal(await contract.balanceOf.call(accounts[1]), 2000);
        assert.equal(await contract.balanceOf.call(accounts[3]), 8000);
    });
});
