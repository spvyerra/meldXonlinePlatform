const Migrations = artifacts.require("Migrations");
const SecureToken = artifacts.require("SecureToken");
const web3 = require('../node_modules/web3');

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Migrations);
    deployer.deploy(SecureToken, accounts[1], web3.utils.asciiToHex("acct1"), 10000, "Meldshare ERC-884 Test", "MST");
};
