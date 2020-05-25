pragma solidity >=0.4.22 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MeldCoin.sol";

contract MeldCoinTest {

    function testInitialBalanceUsingDeployedContract() public {
        MeldCoin mld = MeldCoin(DeployedAddresses.MeldCoin());
        uint expected = 0;

        Assert.equal(mld.totalSupply(), expected, "Not the same");
    }

    function testMinting() public {
        MeldCoin mld = new MeldCoin();
        string memory expected = "MeldCoin";
        Assert.equal(mld.name(), expected, "Not the name of the token");
        bytes32 owner = keccak256("owner");
        mld.addVerified(0x5008cB9029178860666Bd528a34e5E44dB09f847, owner);
        mld.mint(0x5008cB9029178860666Bd528a34e5E44dB09f847, 100);
        Assert.equal(mld.balanceOf(0x5008cB9029178860666Bd528a34e5E44dB09f847), 100, "Not the correct balance");
        Assert.equal(mld.totalSupply(), 100, "Not the same");
    }

    function testverification() public {
        MeldCoin mld = new MeldCoin();
        bytes32 hashName = keccak256("bob");
        mld.addVerified(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673, hashName);
        Assert.equal(mld.isVerified(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673), true, "Not Verified");
        mld.mint(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673, 100);
        Assert.equal(mld.balanceOf(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673), 100, "Not the correct balance");
        Assert.equal(mld.totalSupply(), 100, "Not the correct supply");
        mld.removeVerified(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673);
        Assert.equal(mld.isVerified(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673), false, "Not Verified");

    }

    function testTransfer() public {
        MeldCoin mld = new MeldCoin();
        bytes32 owner = keccak256("owner");
        mld.addVerified(msg.sender, owner);
        mld.mint(msg.sender, 100);
        bytes32 hashName = keccak256("bob");
        mld.addVerified(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673, hashName);
        Assert.equal(mld.isVerified(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673), true, "Not Verified");
        
        Assert.equal(mld.totalSupply(), 100, "Not correct total supply");
        Assert.equal(mld.balanceOf(msg.sender), 100,
        "Transfer was not right");
        mld.transfer(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673, 10);
        
        Assert.equal(mld.balanceOf(0x5273f1d9Bf9E83B504a95DeeF85ca9Bf3A7f2673), 10,
        "Transfer was not right");
    }
    
}