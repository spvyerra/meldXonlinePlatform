 const SecureTokenABI  = [
    {
        "contractName": "SecureToken",
        "abi": [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner_in",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "numShares",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name_in",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "symbol_in",
                "type": "string"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
              }
            ],
            "name": "VerifiedAddressAdded",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
              }
            ],
            "name": "VerifiedAddressRemoved",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "original",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "replacement",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
              }
            ],
            "name": "VerifiedAddressSuperseded",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bytes32",
                "name": "oldHash",
                "type": "bytes32"
              },
              {
                "indexed": false,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
              }
            ],
            "name": "VerifiedAddressUpdated",
            "type": "event"
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
              }
            ],
            "name": "addVerified",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "removeVerified",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
              }
            ],
            "name": "updateVerified",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "original",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "replacement",
                "type": "address"
              }
            ],
            "name": "cancelAndReissue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "isVerified",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "isHolder",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
              }
            ],
            "name": "hasHash",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "holderCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
              }
            ],
            "name": "holderAt",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "isSuperseded",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "getCurrentFor",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner_in",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.6.8+commit.0bbfe453\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner_in\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"numShares\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name_in\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol_in\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"VerifiedAddressAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"VerifiedAddressRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"original\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"replacement\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"VerifiedAddressSuperseded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"oldHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"VerifiedAddressUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"}],\"name\":\"addVerified\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner_in\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"original\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"replacement\",\"type\":\"address\"}],\"name\":\"cancelAndReissue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getCurrentFor\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"}],\"name\":\"hasHash\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"holderAt\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"holderCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"isHolder\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"isSuperseded\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"isVerified\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"removeVerified\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"}],\"name\":\"updateVerified\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Ref https://github.com/ethereum/EIPs/pull/884\",\"methods\":{\"addVerified(address,bytes32)\":{\"params\":{\"addr\":\"The address of the person represented by the supplied hash.\",\"hash\":\"A cryptographic hash of the address holder's verified information.\"}},\"cancelAndReissue(address,address)\":{\"params\":{\"original\":\"The address to be superseded. This address MUST NOT be reused.\"}},\"getCurrentFor(address)\":{\"params\":{\"addr\":\"The superseded address.\"},\"returns\":{\"_0\":\"the verified address that ultimately holds the share.\"}},\"hasHash(address,bytes32)\":{\"params\":{\"addr\":\"The address to test.\",\"hash\":\"The hash to test.\"},\"returns\":{\"_0\":\"true if the hash matches the one supplied with the address in `addVerified`, or `updateVerified`.\"}},\"holderAt(uint256)\":{\"params\":{\"index\":\"The zero-based index of the holder.\"},\"returns\":{\"_0\":\"the address of the token holder with the given index.\"}},\"holderCount()\":{\"returns\":{\"_0\":\"the number of unique addresses that hold tokens.\"}},\"isHolder(address)\":{\"params\":{\"addr\":\"The address to check.\"},\"returns\":{\"_0\":\"true if the supplied address owns a token.\"}},\"isSuperseded(address)\":{\"params\":{\"addr\":\"The address to check.\"},\"returns\":{\"_0\":\"true if the supplied address was superseded by another address.\"}},\"isVerified(address)\":{\"params\":{\"addr\":\"The address to test.\"},\"returns\":{\"_0\":\"true if the address is known to the contract.\"}},\"removeVerified(address)\":{\"params\":{\"addr\":\"The verified address to be removed.\"}},\"updateVerified(address,bytes32)\":{\"params\":{\"addr\":\"The verified address of the person represented by the supplied hash.\",\"hash\":\"A new cryptographic hash of the address holder's updated verified information.\"}}}},\"userdoc\":{\"methods\":{\"addVerified(address,bytes32)\":{\"notice\":\"Add a verified address, along with an associated verification hash to the contract. Upon successful addition of a verified address, the contract must emit `VerifiedAddressAdded(addr, hash, msg.sender)`. It MUST throw if the supplied address or hash are zero, or if the address has already been supplied.\"},\"cancelAndReissue(address,address)\":{\"notice\":\"Cancel the original address and reissue the Tokens to the replacement address. Access to this function MUST be strictly controlled. The `original` address MUST be removed from the set of verified addresses. Throw if the `original` address supplied is not a shareholder. Throw if the `replacement` address is not a verified address. Throw if the `replacement` address already holds Tokens. This function MUST emit the `VerifiedAddressSuperseded` event.\"},\"getCurrentFor(address)\":{\"notice\":\"Gets the most recent address, given a superseded one. Addresses may be superseded multiple times, so this function needs to follow the chain of addresses until it reaches the final, verified address.\"},\"hasHash(address,bytes32)\":{\"notice\":\"Checks that the supplied hash is associated with the given address.\"},\"holderAt(uint256)\":{\"notice\":\"By counting the number of token holders using `holderCount` you can retrieve the complete list of token holders, one at a time. It MUST throw if `index >= holderCount()`.\"},\"holderCount()\":{\"notice\":\"The number of addresses that hold tokens.\"},\"isHolder(address)\":{\"notice\":\"Checks to see if the supplied address is a share holder.\"},\"isSuperseded(address)\":{\"notice\":\"Checks to see if the supplied address was superseded.\"},\"isVerified(address)\":{\"notice\":\"Tests that the supplied address is known to the contract.\"},\"removeVerified(address)\":{\"notice\":\"Remove a verified address, and the associated verification hash. If the address is unknown to the contract then this does nothing. If the address is successfully removed, this function must emit `VerifiedAddressRemoved(addr, msg.sender)`. It MUST throw if an attempt is made to remove a verifiedAddress that owns Tokens.\"},\"transfer(address,uint256)\":{\"notice\":\"The `transfer` function MUST NOT allow transfers to addresses that have not been verified and added to the contract. If the `to` address is not currently a shareholder then it MUST become one. If the transfer will reduce `msg.sender`'s balance to 0 then that address MUST be removed from the list of shareholders.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"The `transferFrom` function MUST NOT allow transfers to addresses that have not been verified and added to the contract. If the `to` address is not currently a shareholder then it MUST become one. If the transfer will reduce `from`'s balance to 0 then that address MUST be removed from the list of shareholders.\"},\"updateVerified(address,bytes32)\":{\"notice\":\"Update the hash for a verified address known to the contract. Upon successful update of a verified address the contract must emit `VerifiedAddressUpdated(addr, oldHash, hash, msg.sender)`. If the hash is the same as the value already stored then no `VerifiedAddressUpdated` event is to be emitted. It MUST throw if the hash is zero, or if the address is unverified.\"}},\"notice\":\"An `ERC20` compatible token that conforms to Delaware State Senate, 149th General Assembly, Senate Bill No. 69: An act to Amend Title 8 of the Delaware Code Relating to the General Corporation Law. *  Implementation Details. *  An implementation of this token standard SHOULD provide the following: *  `name` - for use by wallets and exchanges. `symbol` - for use by wallets and exchanges. *  The implementation MUST take care not to allow unauthorised access to share transfer functions. *  In addition to the above the following optional `ERC20` function MUST be defined. *  `decimals` \\u2014 MUST return `0` as each token represents a single Share and Shares are non-divisible.\"}},\"settings\":{\"compilationTarget\":{\"/root/blockchain/MeldxContract/online-platform/contracts/SecureToken.sol\":\"SecureToken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/root/blockchain/MeldxContract/online-platform/contracts/Imports/Context.sol\":{\"keccak256\":\"0x5cb724054ad075921b7741021125a2fd126ac7444792e7a960fb5dbdd64c066d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://29671ebbb2d3362ef0ded04073455756f4ed6de5cde8008f6ded5c8953dd59f9\",\"dweb:/ipfs/QmecPtFRMHaKFyqfUTZgk9rKn1acvNureoEZWER8hmRu1y\"]},\"/root/blockchain/MeldxContract/online-platform/contracts/Imports/IERC20.sol\":{\"keccak256\":\"0xa553818699a35dfcf54cac7a42dd088934b10ece6449cfabf4bf76359f2a0083\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e727207870669dfea4525aea408cfdd4d1849584739ca61abb286fcef764a6d6\",\"dweb:/ipfs/QmYNWJHrSLceotyj2SZjjNkyfVMgDJMhLTWLV5HacxUiCs\"]},\"/root/blockchain/MeldxContract/online-platform/contracts/Imports/Roles.sol\":{\"keccak256\":\"0x0a12a47d50841d6e4da82bee594d969d7d68a2582defbc646088bc096cf020ee\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://359c845a3586454c652c9604e4952655bf04c1ce025a01f5428a8ef373fd4daa\",\"dweb:/ipfs/QmcuBzdVsQS2BxHLB72JaznzdKMbZUn9dTfJ3tgBjNqTux\"]},\"/root/blockchain/MeldxContract/online-platform/contracts/Imports/SafeMath.sol\":{\"keccak256\":\"0x5e007768b2c5d209c567fbecc1b1e0b99a1c827ce05559034e02b56a1117434e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://efe0026285e329e160201a97d75c19a20caec4834bf95648a117de0ecd8373ac\",\"dweb:/ipfs/Qme7VLjsoqBKAGxQEmHW6UYdC4kGUGatdxs2SEqFC6ouJm\"]},\"/root/blockchain/MeldxContract/online-platform/contracts/SecureToken.sol\":{\"keccak256\":\"0xc2ee089a3fb15a06d98b8cce948747aa03821ec2098f273793bc2040866ec94e\",\"urls\":[\"bzz-raw://7a910144ddb1eb43898589c7f62f99c6cb46eb08f248e9a50d5cea52e4499bc8\",\"dweb:/ipfs/QmNwHS9JQ2BZHtx7qUUvmARNDeg2GytHmn71shWDkXatSn\"]}},\"version\":1}",
        "bytecode": "0x60806040523480156200001157600080fd5b50604051620026f0380380620026f0833981810160405260a08110156200003757600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805160405193929190846401000000008211156200007657600080fd5b838201915060208201858111156200008d57600080fd5b8251866001820283011164010000000082111715620000ab57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000e1578082015181840152602081019050620000c4565b50505050905090810190601f1680156200010f5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200013357600080fd5b838201915060208201858111156200014a57600080fd5b82518660018202830111640100000000821117156200016857600080fd5b8083526020830192505050908051906020019080838360005b838110156200019e57808201518184015260208101905062000181565b50505050905090810190601f168015620001cc5780820380516001836020036101000a031916815260200191505b506040525050508160009080519060200190620001eb929190620006a2565b50806001908051906020019062000204929190620006a2565b506200022c60046200021b620002cc60201b60201c565b620002d460201b62001bcb1760201c565b62000244600286620002d460201b62001bcb1760201c565b6200025c600386620002d460201b62001bcb1760201c565b82600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550826008819055506001600781905550620002c18585620003b860201b60201c565b505050505062000751565b600033905090565b620002e68282620005c260201b60201c565b156200035a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b620003df6004620003ce620002cc60201b60201c565b620005c260201b62001ca61760201c565b62000452576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f55736572206d7573742062652061646d696e206f6620636f6e7472616374000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580156200049357506000801b8114155b62000506576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f496e70757473206d757374206265206e6f6e7a65726f0000000000000000000081525060200191505060405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506200055a620002cc60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fb4f9d1d687d745820ae7c948518d6eef182cfbf5ef20b5b6a33769059592e7c8836040518082815260200191505060405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200064b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620026ce6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620006e557805160ff191683800117855562000716565b8280016001018555821562000716579182015b8281111562000715578251825591602001919060010190620006f8565b5b50905062000725919062000729565b5090565b6200074e91905b808211156200074a57600081600090555060010162000730565b5090565b90565b611f6d80620007616000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806347089f62116100ad578063b9209e3311610071578063b9209e331461064f578063cc397ed3146106ab578063d4d7b19a1461072f578063dd62ed3e1461078b578063f3221c7f146108035761012c565b806347089f621461045c57806370a08231146104aa57806379f647201461050257806395d89b4114610566578063a9059cbb146105e95761012c565b806323b872dd116100f457806323b872dd146102c45780632da7293e1461034a578063313ce567146103a6578063354b7b1d146103ca5780634487b392146104185761012c565b806306fdde0314610131578063095ea7b3146101b457806318160ddd1461021a578063197bc336146102385780631aab9a9f146102a6575b600080fd5b610139610869565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017957808201518184015260208101905061015e565b50505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610200600480360360408110156101ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061090b565b604051808215151515815260200191505060405180910390f35b61022261097b565b6040518082815260200191505060405180910390f35b6102646004803603602081101561024e57600080fd5b8101908080359060200190929190505050610985565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ae6109f5565b6040518082815260200191505060405180910390f35b610330600480360360608110156102da57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109ff565b604051808215151515815260200191505060405180910390f35b61038c6004803603602081101561036057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cbd565b604051808215151515815260200191505060405180910390f35b6103ae610d2d565b604051808260ff1660ff16815260200191505060405180910390f35b610416600480360360408110156103e057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d35565b005b61045a6004803603602081101561042e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f8b565b005b6104a86004803603604081101561047257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110c9565b005b6104ec600480360360208110156104c057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112b3565b6040518082815260200191505060405180910390f35b6105646004803603604081101561051857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061140d565b005b61056e611723565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ae578082015181840152602081019050610593565b50505050905090810190601f1680156105db5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610635600480360360408110156105ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506117c5565b604051808215151515815260200191505060405180910390f35b6106916004803603602081101561066557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a1c565b604051808215151515815260200191505060405180910390f35b6106ed600480360360208110156106c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a7a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107716004803603602081101561074557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611aea565b604051808215151515815260200191505060405180910390f35b6107ed600480360360408110156107a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611afe565b6040518082815260200191505060405180910390f35b61084f6004803603604081101561081957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611b6e565b604051808215151515815260200191505060405180910390f35b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109015780601f106108d657610100808354040283529160200191610901565b820191906000526020600020905b8154815290600101906020018083116108e457829003601f168201915b5050505050905090565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b6000600854905090565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b6000600754905090565b6000610a0a83611a1c565b610a7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f546f2061646472657373206973206e6f7420766572696669656400000000000081525060200191505060405180910390fd5b610a8584611a1c565b610af7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f46726f6d2061646472657373206973206e6f742076657269666965640000000081525060200191505060405180910390fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610b8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611e4a602e913960400191505060405180910390fd5b610b9a600384611ca6565b610baa57610ba9600384611bcb565b5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115610ca357600760008154809291906001019190505550610cb6565b610cb56003610cb0611d84565b611d8c565b5b9392505050565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b600080905090565b610d476004610d42611d84565b611ca6565b610db9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f55736572206d7573742062652061646d696e206f6620636f6e7472616374000081525060200191505060405180910390fd5b610dc282611a1c565b8015610dd157506000801b8114155b610e43576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f496e70757473206d757374206265206e6f6e7a65726f0000000000000000000081525060200191505060405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610e8f57610f87565b610e97611d84565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f63ec12603f028c6f74dc3c59a67d645d431250142b56676015d25475ee3fc3d3600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484604051808381526020018281526020019250505060405180910390a380600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5050565b610f9d6004610f98611d84565b611ca6565b61100f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f55736572206d7573742062652061646d696e206f6620636f6e7472616374000081525060200191505060405180910390fd5b61101881611a1c565b611021576110c6565b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905561106c611d84565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8071c01a493142de896a206c19ca180d32e91d6486fcf11ea299f569f5d922b560405160405180910390a35b50565b6110db60046110d6611d84565b611ca6565b61114d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f55736572206d7573742062652061646d696e206f6620636f6e7472616374000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415801561118d57506000801b8114155b6111ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f496e70757473206d757374206265206e6f6e7a65726f0000000000000000000081525060200191505060405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061124b611d84565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fb4f9d1d687d745820ae7c948518d6eef182cfbf5ef20b5b6a33769059592e7c8836040518082815260200191505060405180910390a35050565b6000816112be611d84565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611341576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611f136025913960400191505060405180910390fd5b611353600361134e611d84565b611ca6565b6113c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f55736572206d757374206f776e2073686172657300000000000000000000000081525060200191505060405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b61141f600461141a611d84565b611ca6565b611491576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f55736572206d7573742062652061646d696e206f6620636f6e7472616374000081525060200191505060405180910390fd5b61149a82611aea565b61150c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f726967696e616c2061646472657373206e6f74207368617265686f6c64657281525060200191505060405180910390fd5b61151581611a1c565b61156a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611ef06023913960400191505060405180910390fd5b61157381611aea565b156115c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526035815260200180611e786035913960400191505060405180910390fd5b6115d4600383611d8c565b6115df600382611bcb565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506116af611d84565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fb64971100522354f3d25283cb14e2eefcb0dd26a757482ccfe42479d0a68685760405160405180910390a45050565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117bb5780601f10611790576101008083540402835291602001916117bb565b820191906000526020600020905b81548152906001019060200180831161179e57829003601f168201915b5050505050905090565b60006117d083611a1c565b611842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f546f2061646472657373206973206e6f7420766572696669656400000000000081525060200191505060405180910390fd5b816006600061184f611d84565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156118e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611e4a602e913960400191505060405180910390fd5b6118ec600384611ca6565b6118fc576118fb600384611bcb565b5b8160066000611909611d84565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506000600660006119ab611d84565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611a0357600760008154809291906001019190505550611a16565b611a156003611a10611d84565b611d8c565b5b92915050565b60008060001b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611a705760019050611a75565b600090505b919050565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b6000611af7600383611ca6565b9050919050565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b600081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415611bc05760019050611bc5565b600090505b92915050565b611bd58282611ca6565b15611c48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611ece6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b611d968282611ca6565b611deb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611ead6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe53656e64657220646f6573206e6f74206861766520656e6f75676820746f6b656e7320746f207472616e736665725265706c6163656d656e742061646472657373206973206e6f7420616c6c6f77656420746f20686f6c6420616e7920746f6b656e73526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f20616464726573735265706c6163656d656e742061646472657373206973206e6f7420766572696669656443616e6e6f74207669657720646966666572656e7420706572736f6e277320736861726573a2646970667358221220e51142319677b8235e202ca192394fd0ff31161c99dd90ccd2030d66083dc1eb64736f6c63430006080033526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373",
        "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c806347089f62116100ad578063b9209e3311610071578063b9209e331461064f578063cc397ed3146106ab578063d4d7b19a1461072f578063dd62ed3e1461078b578063f3221c7f146108035761012c565b806347089f621461045c57806370a08231146104aa57806379f647201461050257806395d89b4114610566578063a9059cbb146105e95761012c565b806323b872dd116100f457806323b872dd146102c45780632da7293e1461034a578063313ce567146103a6578063354b7b1d146103ca5780634487b392146104185761012c565b806306fdde0314610131578063095ea7b3146101b457806318160ddd1461021a578063197bc336146102385780631aab9a9f146102a6575b600080fd5b610139610869565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017957808201518184015260208101905061015e565b50505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610200600480360360408110156101ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061090b565b604051808215151515815260200191505060405180910390f35b61022261097b565b6040518082815260200191505060405180910390f35b6102646004803603602081101561024e57600080fd5b8101908080359060200190929190505050610985565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ae6109f5565b6040518082815260200191505060405180910390f35b610330600480360360608110156102da57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109ff565b604051808215151515815260200191505060405180910390f35b61038c6004803603602081101561036057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cbd565b604051808215151515815260200191505060405180910390f35b6103ae610d2d565b604051808260ff1660ff16815260200191505060405180910390f35b610416600480360360408110156103e057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d35565b005b61045a6004803603602081101561042e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f8b565b005b6104a86004803603604081101561047257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110c9565b005b6104ec600480360360208110156104c057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112b3565b6040518082815260200191505060405180910390f35b6105646004803603604081101561051857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061140d565b005b61056e611723565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ae578082015181840152602081019050610593565b50505050905090810190601f1680156105db5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610635600480360360408110156105ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506117c5565b604051808215151515815260200191505060405180910390f35b6106916004803603602081101561066557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a1c565b604051808215151515815260200191505060405180910390f35b6106ed600480360360208110156106c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a7a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107716004803603602081101561074557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611aea565b604051808215151515815260200191505060405180910390f35b6107ed600480360360408110156107a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611afe565b6040518082815260200191505060405180910390f35b61084f6004803603604081101561081957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611b6e565b604051808215151515815260200191505060405180910390f35b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109015780601f106108d657610100808354040283529160200191610901565b820191906000526020600020905b8154815290600101906020018083116108e457829003601f168201915b5050505050905090565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b6000600854905090565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b6000600754905090565b6000610a0a83611a1c565b610a7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f546f2061646472657373206973206e6f7420766572696669656400000000000081525060200191505060405180910390fd5b610a8584611a1c565b610af7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f46726f6d2061646472657373206973206e6f742076657269666965640000000081525060200191505060405180910390fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610b8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611e4a602e913960400191505060405180910390fd5b610b9a600384611ca6565b610baa57610ba9600384611bcb565b5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115610ca357600760008154809291906001019190505550610cb6565b610cb56003610cb0611d84565b611d8c565b5b9392505050565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b600080905090565b610d476004610d42611d84565b611ca6565b610db9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f55736572206d7573742062652061646d696e206f6620636f6e7472616374000081525060200191505060405180910390fd5b610dc282611a1c565b8015610dd157506000801b8114155b610e43576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f496e70757473206d757374206265206e6f6e7a65726f0000000000000000000081525060200191505060405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610e8f57610f87565b610e97611d84565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f63ec12603f028c6f74dc3c59a67d645d431250142b56676015d25475ee3fc3d3600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484604051808381526020018281526020019250505060405180910390a380600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5050565b610f9d6004610f98611d84565b611ca6565b61100f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f55736572206d7573742062652061646d696e206f6620636f6e7472616374000081525060200191505060405180910390fd5b61101881611a1c565b611021576110c6565b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905561106c611d84565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8071c01a493142de896a206c19ca180d32e91d6486fcf11ea299f569f5d922b560405160405180910390a35b50565b6110db60046110d6611d84565b611ca6565b61114d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f55736572206d7573742062652061646d696e206f6620636f6e7472616374000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415801561118d57506000801b8114155b6111ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f496e70757473206d757374206265206e6f6e7a65726f0000000000000000000081525060200191505060405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061124b611d84565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fb4f9d1d687d745820ae7c948518d6eef182cfbf5ef20b5b6a33769059592e7c8836040518082815260200191505060405180910390a35050565b6000816112be611d84565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611341576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611f136025913960400191505060405180910390fd5b611353600361134e611d84565b611ca6565b6113c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f55736572206d757374206f776e2073686172657300000000000000000000000081525060200191505060405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b61141f600461141a611d84565b611ca6565b611491576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f55736572206d7573742062652061646d696e206f6620636f6e7472616374000081525060200191505060405180910390fd5b61149a82611aea565b61150c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f726967696e616c2061646472657373206e6f74207368617265686f6c64657281525060200191505060405180910390fd5b61151581611a1c565b61156a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611ef06023913960400191505060405180910390fd5b61157381611aea565b156115c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526035815260200180611e786035913960400191505060405180910390fd5b6115d4600383611d8c565b6115df600382611bcb565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506116af611d84565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fb64971100522354f3d25283cb14e2eefcb0dd26a757482ccfe42479d0a68685760405160405180910390a45050565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117bb5780601f10611790576101008083540402835291602001916117bb565b820191906000526020600020905b81548152906001019060200180831161179e57829003601f168201915b5050505050905090565b60006117d083611a1c565b611842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f546f2061646472657373206973206e6f7420766572696669656400000000000081525060200191505060405180910390fd5b816006600061184f611d84565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156118e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611e4a602e913960400191505060405180910390fd5b6118ec600384611ca6565b6118fc576118fb600384611bcb565b5b8160066000611909611d84565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506000600660006119ab611d84565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611a0357600760008154809291906001019190505550611a16565b611a156003611a10611d84565b611d8c565b5b92915050565b60008060001b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611a705760019050611a75565b600090505b919050565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b6000611af7600383611ca6565b9050919050565b60006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f46756e6374696f6e206e6f7420737570706f727465640000000000000000000081525060200191505060405180910390fd5b600081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415611bc05760019050611bc5565b600090505b92915050565b611bd58282611ca6565b15611c48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611ece6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b611d968282611ca6565b611deb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611ead6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe53656e64657220646f6573206e6f74206861766520656e6f75676820746f6b656e7320746f207472616e736665725265706c6163656d656e742061646472657373206973206e6f7420616c6c6f77656420746f20686f6c6420616e7920746f6b656e73526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f20616464726573735265706c6163656d656e742061646472657373206973206e6f7420766572696669656443616e6e6f74207669657720646966666572656e7420706572736f6e277320736861726573a2646970667358221220e51142319677b8235e202ca192394fd0ff31161c99dd90ccd2030d66083dc1eb64736f6c63430006080033",
        "immutableReferences": {},
        "sourceMap": "1093:12456:9:-:0;;;3771:475;5:9:-1;2:2;;;27:1;24;17:12;2:2;3771:475:9;;;;;;;;;;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;3771:475:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;3771:475:9;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3771:475:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;3771:475:9;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3771:475:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3952:7;3945:4;:14;;;;;;;;;;;;:::i;:::-;;3978:9;3969:6;:18;;;;;;;;;;;;:::i;:::-;;3998:30;4008:5;4015:12;:10;;;:12;;:::i;:::-;3998:9;;;;;:30;;:::i;:::-;4038:26;4048:5;4055:8;4038:9;;;;;:26;;:::i;:::-;4074:33;4084:12;4098:8;4074:9;;;;;:33;;:::i;:::-;4140:9;4118;:19;4128:8;4118:19;;;;;;;;;;;;;;;:31;;;;4171:9;4159;:21;;;;4201:1;4191:7;:11;;;;4212:27;4224:8;4234:4;4212:11;;;:27;;:::i;:::-;3771:475;;;;;1093:12456;;599:104:1;652:15;686:10;679:17;;599:104;:::o;302:175:5:-;379:18;383:4;389:7;379:3;;;:18;;:::i;:::-;378:19;370:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;466:4;443;:11;;:20;455:7;443:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;302:175;;:::o;5212:246:9:-;4319:30;4329:5;4336:12;:10;;;:12;;:::i;:::-;4319:9;;;;;:30;;:::i;:::-;4298:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5310:1:::1;5294:18;;:4;:18;;;;:31;;;;;5324:1;5316:9:::0;::::1;:4;:9;;5294:31;5286:66;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;5386:4;5363:14;:20;5378:4;5363:20;;;;;;;;;;;;;;;:27;;;;5438:12;:10;;;:12;;:::i;:::-;5405:46;;5426:4;5405:46;;;5432:4;5405:46;;;;;;;;;;;;;;;;;;5212:246:::0;;:::o;821:200:5:-;893:4;936:1;917:21;;:7;:21;;;;909:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;994:4;:11;;:20;1006:7;994:20;;;;;;;;;;;;;;;;;;;;;;;;;987:27;;821:200;;;;:::o;1093:12456:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
        "deployedSourceMap": "1093:12456:9:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;1093:12456:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;1519:82:9;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1519:82:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13387:160;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;13387:160:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;11798:97;;;:::i;:::-;;;;;;;;;;;;;;;;;;;12239:112;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;12239:112:9;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;11515:84;;;:::i;:::-;;;;;;;;;;;;;;;;;;;9669:627;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;9669:627:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;12557:112;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;12557:112:9;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1699:75;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6707:379;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;6707:379:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;5889:194;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;5889:194:9;;;;;;;;;;;;;;;;;;;:::i;:::-;;5212:246;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;5212:246:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;11605:187;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;11605:187:9;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7703:652;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;7703:652:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1607:86;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1607:86:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8731:564;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;8731:564:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;10487:143;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;10487:143:9;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;13029:116;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;13029:116:9;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;10818:112;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;10818:112:9;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;13201:180;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;13201:180:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;11221:157;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;11221:157:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1519:82;1558:13;1590:4;1583:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1519:82;:::o;13387:160::-;13488:4;13508:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11798:97;11853:7;11879:9;;11872:16;;11798:97;:::o;12239:112::-;12293:7;12312:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11515:84;11559:7;11585;;11578:14;;11515:84;:::o;9669:627::-;9787:4;9811:14;9822:2;9811:10;:14::i;:::-;9803:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9874:16;9885:4;9874:10;:16::i;:::-;9866:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9973:5;9954:9;:15;9964:4;9954:15;;;;;;;;;;;;;;;;:24;;9933:117;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10066:27;10076:12;10090:2;10066:9;:27::i;:::-;10061:61;;10095:27;10105:12;10119:2;10095:9;:27::i;:::-;10061:61;10152:5;10133:9;:15;10143:4;10133:15;;;;;;;;;;;;;;;;:24;;;;;;;;;;;10184:5;10167:9;:13;10177:2;10167:13;;;;;;;;;;;;;;;;:22;;;;;;;;;;;10222:1;10204:9;:15;10214:4;10204:15;;;;;;;;;;;;;;;;:19;10200:89;;;10225:7;;:9;;;;;;;;;;;;;10200:89;;;10249:40;10262:12;10276;:10;:12::i;:::-;10249;:40::i;:::-;10200:89;9669:627;;;;;:::o;12557:112::-;12614:4;12630:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1699:75;1742:5;1766:1;1759:8;;1699:75;:::o;6707:379::-;4319:30;4329:5;4336:12;:10;:12::i;:::-;4319:9;:30::i;:::-;4298:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6792:16:::1;6803:4;6792:10;:16::i;:::-;:29;;;;;6820:1;6812:9:::0;::::1;:4;:9;;6792:29;6784:64;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;6886:4;6862:14;:20;6877:4;6862:20;;;;;;;;;;;;;;;;:28;6858:41;;;6892:7;;6858:41;7020:12;:10;:12::i;:::-;6914:128;;6950:4;6914:128;;;6968:14;:20;6983:4;6968:20;;;;;;;;;;;;;;;;7002:4;6914:128;;;;;;;;;;;;;;;;;;;;;;;;7075:4;7052:14;:20;7067:4;7052:20;;;;;;;;;;;;;;;:27;;;;4415:1;6707:379:::0;;:::o;5889:194::-;4319:30;4329:5;4336:12;:10;:12::i;:::-;4319:9;:30::i;:::-;4298:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5957:16:::1;5968:4;5957:10;:16::i;:::-;5952:30;;5975:7;;5952:30;5999:14;:20;6014:4;5999:20;;;;;;;;;;;;;;;5992:27;;;6063:12;:10;:12::i;:::-;6034:42;;6057:4;6034:42;;;;;;;;;;;;4415:1;5889:194:::0;:::o;5212:246::-;4319:30;4329:5;4336:12;:10;:12::i;:::-;4319:9;:30::i;:::-;4298:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5310:1:::1;5294:18;;:4;:18;;;;:31;;;;;5324:1;5316:9:::0;::::1;:4;:9;;5294:31;5286:66;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;5386:4;5363:14;:20;5378:4;5363:20;;;;;;;;;;;;;;;:27;;;;5438:12;:10;:12::i;:::-;5405:46;;5426:4;5405:46;;;5432:4;5405:46;;;;;;;;;;;;;;;;;;5212:246:::0;;:::o;11605:187::-;11737:7;11711;4514:12;:10;:12::i;:::-;4502:24;;:8;:24;;;4481:108;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4607:37;4617:12;4631;:10;:12::i;:::-;4607:9;:37::i;:::-;4599:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11767:9:::1;:18;11777:7;11767:18;;;;;;;;;;;;;;;;11760:25;;11605:187:::0;;;;:::o;7703:652::-;4319:30;4329:5;4336:12;:10;:12::i;:::-;4319:9;:30::i;:::-;4298:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7821:18:::1;7830:8;7821;:18::i;:::-;7813:63;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;7894:23;7905:11;7894:10;:23::i;:::-;7886:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7989:21;7998:11;7989:8;:21::i;:::-;7988:22;7967:122;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8100:36;8113:12;8127:8;8100:12;:36::i;:::-;8146;8156:12;8170:11;8146:9;:36::i;:::-;8218:9;:19;8228:8;8218:19;;;;;;;;;;;;;;;;8193:9;:22;8203:11;8193:22;;;;;;;;;;;;;;;:44;;;;8269:1;8247:9;:19;8257:8;8247:19;;;;;;;;;;;;;;;:23;;;;8335:12;:10;:12::i;:::-;8286:62;;8322:11;8286:62;;8312:8;8286:62;;;;;;;;;;;;7703:652:::0;;:::o;1607:86::-;1648:13;1680:6;1673:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1607:86;:::o;8731:564::-;8825:4;8853:14;8864:2;8853:10;:14::i;:::-;8845:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8956:5;8929:9;:23;8939:12;:10;:12::i;:::-;8929:23;;;;;;;;;;;;;;;;:32;;8908:125;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9049:27;9059:12;9073:2;9049:9;:27::i;:::-;9044:61;;9078:27;9088:12;9102:2;9078:9;:27::i;:::-;9044:61;9143:5;9116:9;:23;9126:12;:10;:12::i;:::-;9116:23;;;;;;;;;;;;;;;;:32;;;;;;;;;;;9175:5;9158:9;:13;9168:2;9158:13;;;;;;;;;;;;;;;;:22;;;;;;;;;;;9221:1;9195:9;:23;9205:12;:10;:12::i;:::-;9195:23;;;;;;;;;;;;;;;;:27;9191:97;;;9224:7;;:9;;;;;;;;;;;;;9191:97;;;9248:40;9261:12;9275;:10;:12::i;:::-;9248;:40::i;:::-;9191:97;8731:564;;;;:::o;10487:143::-;10542:4;10586:1;10562:25;;:14;:20;10577:4;10562:20;;;;;;;;;;;;;;;;:25;10558:42;;10596:4;10589:11;;;;10558:42;10618:5;10611:12;;10487:143;;;;:::o;13029:116::-;13087:7;13106:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10818:112;10871:4;10894:29;10904:12;10918:4;10894:9;:29::i;:::-;10887:36;;10818:112;;;:::o;13201:180::-;13319:7;13342:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11221:157;11287:4;11331;11307:14;:20;11322:4;11307:20;;;;;;;;;;;;;;;;:28;11303:45;;;11344:4;11337:11;;;;11303:45;11366:5;11359:12;;11221:157;;;;;:::o;302:175:5:-;379:18;383:4;389:7;379:3;:18::i;:::-;378:19;370:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;466:4;443;:11;;:20;455:7;443:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;302:175;;:::o;821:200::-;893:4;936:1;917:21;;:7;:21;;;;909:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;994:4;:11;;:20;1006:7;994:20;;;;;;;;;;;;;;;;;;;;;;;;;987:27;;821:200;;;;:::o;599:104:1:-;652:15;686:10;679:17;;599:104;:::o;552:180:5:-;631:18;635:4;641:7;631:3;:18::i;:::-;623:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;720:5;697:4;:11;;:20;709:7;697:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;552:180;;:::o",
        "source": "pragma solidity ^0.6.8;\n\nimport \"./Imports/Context.sol\";\nimport \"./Imports/SafeMath.sol\";\nimport \"./Imports/IERC20.sol\";\nimport {Roles} from \"./Imports/Roles.sol\";\n\n\n// Forked from ETH standards\n// https://github.com/davesag/ERC884-reference-implementation/blob/develop/contracts/token/ERC884/ERC884.sol\n\n/**\n *  An `ERC20` compatible token that conforms to Delaware State Senate,\n *  149th General Assembly, Senate Bill No. 69: An act to Amend Title 8\n *  of the Delaware Code Relating to the General Corporation Law.\n *\n *  Implementation Details.\n *\n *  An implementation of this token standard SHOULD provide the following:\n *\n *  `name` - for use by wallets and exchanges.\n *  `symbol` - for use by wallets and exchanges.\n *\n *  The implementation MUST take care not to allow unauthorised access to share\n *  transfer functions.\n *\n *  In addition to the above the following optional `ERC20` function MUST be defined.\n *\n *  `decimals` — MUST return `0` as each token represents a single Share and Shares are non-divisible.\n *\n *  @dev Ref https://github.com/ethereum/EIPs/pull/884\n */\ncontract SecureToken is IERC20, Context {\n    using Roles for address;\n\n    // Security Variables\n    string private NAME;\n    string private SYMBOL;\n\n    // Roles of users\n    Roles.Role owner;\n    Roles.Role shareholders;\n    Roles.Role admin;\n\n    // State Variables\n    mapping(address => bytes32) private verifiedHashes;\n    mapping(address => uint256) private holderAmt;\n    uint256 holders;\n    uint256 sharesOut;\n\n    function name() external view returns (string memory) {\n        return NAME;\n    }\n\n    function symbol() external view returns (string memory) {\n        return SYMBOL;\n    }\n\n    function decimals() external pure returns (uint8) {\n        return 0;\n    }\n\n    /**\n     *  This event is emitted when a verified address and associated identity hash are\n     *  added to the contract.\n     *  @param addr The address that was added.\n     *  @param hash The identity hash associated with the address.\n     *  @param sender The address that caused the address to be added.\n     */\n    event VerifiedAddressAdded(\n        address indexed addr,\n        bytes32 hash,\n        address indexed sender\n    );\n\n    /**\n     *  This event is emitted when a verified address its associated identity hash are\n     *  removed from the contract.\n     *  @param addr The address that was removed.\n     *  @param sender The address that caused the address to be removed.\n     */\n    event VerifiedAddressRemoved(address indexed addr, address indexed sender);\n\n    /**\n     *  This event is emitted when the identity hash associated with a verified address is updated.\n     *  @param addr The address whose hash was updated.\n     *  @param oldHash The identity hash that was associated with the address.\n     *  @param hash The hash now associated with the address.\n     *  @param sender The address that caused the hash to be updated.\n     */\n    event VerifiedAddressUpdated(\n        address indexed addr,\n        bytes32 oldHash,\n        bytes32 hash,\n        address indexed sender\n    );\n\n    /**\n     *  This event is emitted when an address is cancelled and replaced with\n     *  a new address.  This happens in the case where a shareholder has\n     *  lost access to their original address and needs to have their share\n     *  reissued to a new address.  This is the equivalent of issuing replacement\n     *  share certificates.\n     *  @param original The address being superseded.\n     *  @param replacement The new address.\n     *  @param sender The address that caused the address to be superseded.\n     */\n    event VerifiedAddressSuperseded(\n        address indexed original,\n        address indexed replacement,\n        address indexed sender\n    );\n\n    constructor(\n        address owner_in,\n        bytes32 hash,\n        uint256 numShares,\n        string memory name_in,\n        string memory symbol_in\n    ) public {\n        NAME = name_in;\n        SYMBOL = symbol_in;\n\n        Roles.add(admin, _msgSender());\n        Roles.add(owner, owner_in);\n        Roles.add(shareholders, owner_in);\n\n        holderAmt[owner_in] = numShares;\n        sharesOut = numShares;\n\n        holders = 1;\n        addVerified(owner_in, hash);\n    }\n\n    // Modifiers\n    modifier isAdmin() {\n        require(\n            Roles.has(admin, _msgSender()),\n            \"User must be admin of contract\"\n        );\n        _;\n    }\n\n    modifier personalShares(address userAddr) {\n        require(\n            userAddr == _msgSender(),\n            \"Cannot view different person's shares\"\n        );\n        require(Roles.has(shareholders, _msgSender()), \"User must own shares\");\n        _;\n    }\n\n    /**\n     *  Add a verified address, along with an associated verification hash to the contract.\n     *  Upon successful addition of a verified address, the contract must emit\n     *  `VerifiedAddressAdded(addr, hash, msg.sender)`.\n     *  It MUST throw if the supplied address or hash are zero, or if the address has already been supplied.\n     *  @param addr The address of the person represented by the supplied hash.\n     *  @param hash A cryptographic hash of the address holder's verified information.\n     */\n    function addVerified(address addr, bytes32 hash) public isAdmin {\n        require(addr != address(0) && hash != 0, \"Inputs must be nonzero\");\n\n        verifiedHashes[addr] = hash;\n        emit VerifiedAddressAdded(addr, hash, _msgSender());\n    }\n\n    /**\n     *  Remove a verified address, and the associated verification hash. If the address is\n     *  unknown to the contract then this does nothing. If the address is successfully removed, this\n     *  function must emit `VerifiedAddressRemoved(addr, msg.sender)`.\n     *  It MUST throw if an attempt is made to remove a verifiedAddress that owns Tokens.\n     *  @param addr The verified address to be removed.\n     */\n    function removeVerified(address addr) public isAdmin {\n        if (!isVerified(addr)) return;\n\n        delete verifiedHashes[addr];\n        emit VerifiedAddressRemoved(addr, _msgSender());\n    }\n\n    /**\n     *  Update the hash for a verified address known to the contract.\n     *  Upon successful update of a verified address the contract must emit\n     *  `VerifiedAddressUpdated(addr, oldHash, hash, msg.sender)`.\n     *  If the hash is the same as the value already stored then\n     *  no `VerifiedAddressUpdated` event is to be emitted.\n     *  It MUST throw if the hash is zero, or if the address is unverified.\n     *  @param addr The verified address of the person represented by the supplied hash.\n     *  @param hash A new cryptographic hash of the address holder's updated verified information.\n     */\n    function updateVerified(address addr, bytes32 hash) public isAdmin {\n        require(isVerified(addr) && hash != 0, \"Inputs must be nonzero\");\n        if (verifiedHashes[addr] == hash) return;\n\n        emit VerifiedAddressUpdated(\n            addr,\n            verifiedHashes[addr],\n            hash,\n            _msgSender()\n        );\n        verifiedHashes[addr] = hash;\n    }\n\n    /**\n     *  Cancel the original address and reissue the Tokens to the replacement address.\n     *  Access to this function MUST be strictly controlled.\n     *  The `original` address MUST be removed from the set of verified addresses.\n     *  Throw if the `original` address supplied is not a shareholder.\n     *  Throw if the `replacement` address is not a verified address.\n     *  Throw if the `replacement` address already holds Tokens.\n     *  This function MUST emit the `VerifiedAddressSuperseded` event.\n     *  @param original The address to be superseded. This address MUST NOT be reused.\n     */\n    function cancelAndReissue(address original, address replacement)\n        public\n        isAdmin\n    {\n        require(isHolder(original), \"Original address not shareholder\");\n        require(isVerified(replacement), \"Replacement address is not verified\");\n        require(\n            !isHolder(replacement),\n            \"Replacement address is not allowed to hold any tokens\"\n        );\n\n        Roles.remove(shareholders, original);\n        Roles.add(shareholders, replacement);\n\n        holderAmt[replacement] = holderAmt[original];\n        holderAmt[original] = 0;\n\n        emit VerifiedAddressSuperseded(original, replacement, _msgSender());\n    }\n\n    /**\n     *  The `transfer` function MUST NOT allow transfers to addresses that\n     *  have not been verified and added to the contract.\n     *  If the `to` address is not currently a shareholder then it MUST become one.\n     *  If the transfer will reduce `msg.sender`'s balance to 0 then that address\n     *  MUST be removed from the list of shareholders.\n     */\n    function transfer(address to, uint256 value)\n        public\n        override\n        returns (bool)\n    {\n        require(isVerified(to), \"To address is not verified\");\n        require(\n            holderAmt[_msgSender()] >= value,\n            \"Sender does not have enough tokens to transfer\"\n        );\n\n        if (!Roles.has(shareholders, to)) Roles.add(shareholders, to);\n\n        holderAmt[_msgSender()] -= value;\n        holderAmt[to] += value;\n\n        if (holderAmt[_msgSender()] > 0) holders++;\n        else Roles.remove(shareholders, _msgSender());\n    }\n\n    /**\n     *  The `transferFrom` function MUST NOT allow transfers to addresses that\n     *  have not been verified and added to the contract.\n     *  If the `to` address is not currently a shareholder then it MUST become one.\n     *  If the transfer will reduce `from`'s balance to 0 then that address\n     *  MUST be removed from the list of shareholders.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 value\n    ) public override returns (bool) {\n        require(isVerified(to), \"To address is not verified\");\n        require(isVerified(from), \"From address is not verified\");\n        require(\n            holderAmt[from] >= value,\n            \"Sender does not have enough tokens to transfer\"\n        );\n\n        if (!Roles.has(shareholders, to)) Roles.add(shareholders, to);\n\n        holderAmt[from] -= value;\n        holderAmt[to] += value;\n\n        if (holderAmt[from] > 0) holders++;\n        else Roles.remove(shareholders, _msgSender());\n    }\n\n    /**\n     *  Tests that the supplied address is known to the contract.\n     *  @param addr The address to test.\n     *  @return true if the address is known to the contract.\n     */\n    function isVerified(address addr) public view returns (bool) {\n        if (verifiedHashes[addr] != 0) return true;\n\n        return false;\n    }\n\n    /**\n     *  Checks to see if the supplied address is a share holder.\n     *  @param addr The address to check.\n     *  @return true if the supplied address owns a token.\n     */\n    function isHolder(address addr) public view returns (bool) {\n        return Roles.has(shareholders, addr);\n    }\n\n    /**\n     *  Checks that the supplied hash is associated with the given address.\n     *  @param addr The address to test.\n     *  @param hash The hash to test.\n     *  @return true if the hash matches the one supplied with the address in `addVerified`, or `updateVerified`.\n     */\n    function hasHash(address addr, bytes32 hash) public view returns (bool) {\n        if (verifiedHashes[addr] == hash) return true;\n\n        return false;\n    }\n\n    /**\n     *  The number of addresses that hold tokens.\n     *  @return the number of unique addresses that hold tokens.\n     */\n    function holderCount() public view returns (uint256) {\n        return holders;\n    }\n\n    function balanceOf(address account)\n        external\n        override\n        view\n        personalShares(account)\n        returns (uint256)\n    {\n        return holderAmt[account];\n    }\n\n    function totalSupply() external override view returns (uint256) {\n        return sharesOut;\n    }\n\n    /**\n     *  By counting the number of token holders using `holderCount`\n     *  you can retrieve the complete list of token holders, one at a time.\n     *  It MUST throw if `index >= holderCount()`.\n     *  @param index The zero-based index of the holder.\n     *  @return the address of the token holder with the given index.\n     */\n    function holderAt(uint256 index) public view returns (address) {\n        revert(\"Function not supported\");\n    }\n\n    /**\n     *  Checks to see if the supplied address was superseded.\n     *  @param addr The address to check.\n     *  @return true if the supplied address was superseded by another address.\n     */\n    function isSuperseded(address addr) public view returns (bool) {\n        revert(\"Function not supported\");\n    }\n\n    /**\n     *  Gets the most recent address, given a superseded one.\n     *  Addresses may be superseded multiple times, so this function needs to\n     *  follow the chain of addresses until it reaches the final, verified address.\n     *  @param addr The superseded address.\n     *  @return the verified address that ultimately holds the share.\n     */\n    function getCurrentFor(address addr) public view returns (address) {\n        revert(\"Function not supported\");\n    }\n\n    // Functions that rea not allowed to be used.\n    function allowance(address owner_in, address spender)\n        external\n        override\n        view\n        returns (uint256)\n    {\n        revert(\"Function not supported\");\n    }\n\n    function approve(address spender, uint256 amount)\n        external\n        override\n        returns (bool)\n    {\n        revert(\"Function not supported\");\n    }\n}\n",
        "sourcePath": "/root/blockchain/MeldxContract/online-platform/contracts/SecureToken.sol",
        "ast": {
          "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/SecureToken.sol",
          "exportedSymbols": {
            "SecureToken": [
              1769
            ]
          },
          "id": 1770,
          "license": null,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 1083,
              "literals": [
                "solidity",
                "^",
                "0.6",
                ".8"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:23:9"
            },
            {
              "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/Imports/Context.sol",
              "file": "./Imports/Context.sol",
              "id": 1084,
              "nodeType": "ImportDirective",
              "scope": 1770,
              "sourceUnit": 87,
              "src": "25:31:9",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/Imports/SafeMath.sol",
              "file": "./Imports/SafeMath.sol",
              "id": 1085,
              "nodeType": "ImportDirective",
              "scope": 1770,
              "sourceUnit": 663,
              "src": "57:32:9",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/Imports/IERC20.sol",
              "file": "./Imports/IERC20.sol",
              "id": 1086,
              "nodeType": "ImportDirective",
              "scope": 1770,
              "sourceUnit": 165,
              "src": "90:30:9",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/Imports/Roles.sol",
              "file": "./Imports/Roles.sol",
              "id": 1088,
              "nodeType": "ImportDirective",
              "scope": 1770,
              "sourceUnit": 467,
              "src": "121:42:9",
              "symbolAliases": [
                {
                  "foreign": {
                    "argumentTypes": null,
                    "id": 1087,
                    "name": "Roles",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": null,
                    "src": "129:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": null,
                      "typeString": null
                    }
                  },
                  "local": null
                }
              ],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [
                {
                  "arguments": null,
                  "baseName": {
                    "contractScope": null,
                    "id": 1090,
                    "name": "IERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 164,
                    "src": "1117:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$164",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 1091,
                  "nodeType": "InheritanceSpecifier",
                  "src": "1117:6:9"
                },
                {
                  "arguments": null,
                  "baseName": {
                    "contractScope": null,
                    "id": 1092,
                    "name": "Context",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 86,
                    "src": "1125:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Context_$86",
                      "typeString": "contract Context"
                    }
                  },
                  "id": 1093,
                  "nodeType": "InheritanceSpecifier",
                  "src": "1125:7:9"
                }
              ],
              "contractDependencies": [
                86,
                164
              ],
              "contractKind": "contract",
              "documentation": {
                "id": 1089,
                "nodeType": "StructuredDocumentation",
                "src": "305:787:9",
                "text": " An `ERC20` compatible token that conforms to Delaware State Senate,\n 149th General Assembly, Senate Bill No. 69: An act to Amend Title 8\n of the Delaware Code Relating to the General Corporation Law.\n *  Implementation Details.\n *  An implementation of this token standard SHOULD provide the following:\n *  `name` - for use by wallets and exchanges.\n `symbol` - for use by wallets and exchanges.\n *  The implementation MUST take care not to allow unauthorised access to share\n transfer functions.\n *  In addition to the above the following optional `ERC20` function MUST be defined.\n *  `decimals` — MUST return `0` as each token represents a single Share and Shares are non-divisible.\n *  @dev Ref https://github.com/ethereum/EIPs/pull/884"
              },
              "fullyImplemented": true,
              "id": 1769,
              "linearizedBaseContracts": [
                1769,
                86,
                164
              ],
              "name": "SecureToken",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "id": 1096,
                  "libraryName": {
                    "contractScope": null,
                    "id": 1094,
                    "name": "Roles",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 466,
                    "src": "1145:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Roles_$466",
                      "typeString": "library Roles"
                    }
                  },
                  "nodeType": "UsingForDirective",
                  "src": "1139:24:9",
                  "typeName": {
                    "id": 1095,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1155:7:9",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                },
                {
                  "constant": false,
                  "id": 1098,
                  "mutability": "mutable",
                  "name": "NAME",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1195:19:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1097,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1195:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 1100,
                  "mutability": "mutable",
                  "name": "SYMBOL",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1220:21:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1099,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1220:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 1102,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1270:16:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$388_storage",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1101,
                    "name": "Roles.Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 388,
                    "src": "1270:10:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$388_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1104,
                  "mutability": "mutable",
                  "name": "shareholders",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1292:23:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$388_storage",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1103,
                    "name": "Roles.Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 388,
                    "src": "1292:10:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$388_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1106,
                  "mutability": "mutable",
                  "name": "admin",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1321:16:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$388_storage",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1105,
                    "name": "Roles.Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 388,
                    "src": "1321:10:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$388_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1110,
                  "mutability": "mutable",
                  "name": "verifiedHashes",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1367:50:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                    "typeString": "mapping(address => bytes32)"
                  },
                  "typeName": {
                    "id": 1109,
                    "keyType": {
                      "id": 1107,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1375:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1367:27:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                      "typeString": "mapping(address => bytes32)"
                    },
                    "valueType": {
                      "id": 1108,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1386:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 1114,
                  "mutability": "mutable",
                  "name": "holderAmt",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1423:45:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "typeName": {
                    "id": 1113,
                    "keyType": {
                      "id": 1111,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1431:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1423:27:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 1112,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1442:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 1116,
                  "mutability": "mutable",
                  "name": "holders",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1474:15:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1474:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1118,
                  "mutability": "mutable",
                  "name": "sharesOut",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1495:17:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1495:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "body": {
                    "id": 1125,
                    "nodeType": "Block",
                    "src": "1573:28:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1123,
                          "name": "NAME",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1098,
                          "src": "1590:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "functionReturnParameters": 1122,
                        "id": 1124,
                        "nodeType": "Return",
                        "src": "1583:11:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "06fdde03",
                  "id": 1126,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "name",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1119,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1532:2:9"
                  },
                  "returnParameters": {
                    "id": 1122,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1121,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1126,
                        "src": "1558:13:9",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 1120,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1558:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1557:15:9"
                  },
                  "scope": 1769,
                  "src": "1519:82:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "body": {
                    "id": 1133,
                    "nodeType": "Block",
                    "src": "1663:30:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1131,
                          "name": "SYMBOL",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1100,
                          "src": "1680:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "functionReturnParameters": 1130,
                        "id": 1132,
                        "nodeType": "Return",
                        "src": "1673:13:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "95d89b41",
                  "id": 1134,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "symbol",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1127,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1622:2:9"
                  },
                  "returnParameters": {
                    "id": 1130,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1129,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1134,
                        "src": "1648:13:9",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 1128,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1648:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1647:15:9"
                  },
                  "scope": 1769,
                  "src": "1607:86:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "body": {
                    "id": 1141,
                    "nodeType": "Block",
                    "src": "1749:25:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1766:1:9",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1138,
                        "id": 1140,
                        "nodeType": "Return",
                        "src": "1759:8:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "313ce567",
                  "id": 1142,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "decimals",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1135,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1716:2:9"
                  },
                  "returnParameters": {
                    "id": 1138,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1137,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1142,
                        "src": "1742:5:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "typeName": {
                          "id": 1136,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "1742:5:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1741:7:9"
                  },
                  "scope": 1769,
                  "src": "1699:75:9",
                  "stateMutability": "pure",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "anonymous": false,
                  "documentation": {
                    "id": 1143,
                    "nodeType": "StructuredDocumentation",
                    "src": "1780:315:9",
                    "text": " This event is emitted when a verified address and associated identity hash are\n added to the contract.\n @param addr The address that was added.\n @param hash The identity hash associated with the address.\n @param sender The address that caused the address to be added."
                  },
                  "id": 1151,
                  "name": "VerifiedAddressAdded",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 1150,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1145,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1151,
                        "src": "2136:20:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1144,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2136:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1147,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1151,
                        "src": "2166:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1146,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "2166:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1149,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "sender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1151,
                        "src": "2188:22:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1148,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2188:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2126:90:9"
                  },
                  "src": "2100:117:9"
                },
                {
                  "anonymous": false,
                  "documentation": {
                    "id": 1152,
                    "nodeType": "StructuredDocumentation",
                    "src": "2223:256:9",
                    "text": " This event is emitted when a verified address its associated identity hash are\n removed from the contract.\n @param addr The address that was removed.\n @param sender The address that caused the address to be removed."
                  },
                  "id": 1158,
                  "name": "VerifiedAddressRemoved",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 1157,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1154,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1158,
                        "src": "2513:20:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1153,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2513:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1156,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "sender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1158,
                        "src": "2535:22:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1155,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2535:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2512:46:9"
                  },
                  "src": "2484:75:9"
                },
                {
                  "anonymous": false,
                  "documentation": {
                    "id": 1159,
                    "nodeType": "StructuredDocumentation",
                    "src": "2565:378:9",
                    "text": " This event is emitted when the identity hash associated with a verified address is updated.\n @param addr The address whose hash was updated.\n @param oldHash The identity hash that was associated with the address.\n @param hash The hash now associated with the address.\n @param sender The address that caused the hash to be updated."
                  },
                  "id": 1169,
                  "name": "VerifiedAddressUpdated",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 1168,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1161,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1169,
                        "src": "2986:20:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1160,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2986:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1163,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "oldHash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1169,
                        "src": "3016:15:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1162,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "3016:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1165,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1169,
                        "src": "3041:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1164,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "3041:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1167,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "sender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1169,
                        "src": "3063:22:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1166,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3063:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2976:115:9"
                  },
                  "src": "2948:144:9"
                },
                {
                  "anonymous": false,
                  "documentation": {
                    "id": 1170,
                    "nodeType": "StructuredDocumentation",
                    "src": "3098:521:9",
                    "text": " This event is emitted when an address is cancelled and replaced with\n a new address.  This happens in the case where a shareholder has\n lost access to their original address and needs to have their share\n reissued to a new address.  This is the equivalent of issuing replacement\n share certificates.\n @param original The address being superseded.\n @param replacement The new address.\n @param sender The address that caused the address to be superseded."
                  },
                  "id": 1178,
                  "name": "VerifiedAddressSuperseded",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 1177,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1172,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "original",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1178,
                        "src": "3665:24:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1171,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3665:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1174,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "replacement",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1178,
                        "src": "3699:27:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1173,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3699:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1176,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "sender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1178,
                        "src": "3736:22:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1175,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3736:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "3655:109:9"
                  },
                  "src": "3624:141:9"
                },
                {
                  "body": {
                    "id": 1240,
                    "nodeType": "Block",
                    "src": "3935:311:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1191,
                            "name": "NAME",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1098,
                            "src": "3945:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1192,
                            "name": "name_in",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1186,
                            "src": "3952:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3945:14:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 1194,
                        "nodeType": "ExpressionStatement",
                        "src": "3945:14:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1197,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1195,
                            "name": "SYMBOL",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1100,
                            "src": "3969:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1196,
                            "name": "symbol_in",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1188,
                            "src": "3978:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3969:18:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 1198,
                        "nodeType": "ExpressionStatement",
                        "src": "3969:18:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1202,
                              "name": "admin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1106,
                              "src": "4008:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1203,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "4015:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1204,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4015:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1199,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "3998:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1201,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 414,
                            "src": "3998:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3998:30:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1206,
                        "nodeType": "ExpressionStatement",
                        "src": "3998:30:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1210,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1102,
                              "src": "4048:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1211,
                              "name": "owner_in",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1180,
                              "src": "4055:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1207,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "4038:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 414,
                            "src": "4038:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4038:26:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1213,
                        "nodeType": "ExpressionStatement",
                        "src": "4038:26:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1217,
                              "name": "shareholders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1104,
                              "src": "4084:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1218,
                              "name": "owner_in",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1180,
                              "src": "4098:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1214,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "4074:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 414,
                            "src": "4074:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1219,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4074:33:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1220,
                        "nodeType": "ExpressionStatement",
                        "src": "4074:33:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1221,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "4118:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1223,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1222,
                              "name": "owner_in",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1180,
                              "src": "4128:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4118:19:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1224,
                            "name": "numShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1184,
                            "src": "4140:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4118:31:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1226,
                        "nodeType": "ExpressionStatement",
                        "src": "4118:31:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1227,
                            "name": "sharesOut",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1118,
                            "src": "4159:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1228,
                            "name": "numShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1184,
                            "src": "4171:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4159:21:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1230,
                        "nodeType": "ExpressionStatement",
                        "src": "4159:21:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1231,
                            "name": "holders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1116,
                            "src": "4191:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 1232,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4201:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "4191:11:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1234,
                        "nodeType": "ExpressionStatement",
                        "src": "4191:11:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1236,
                              "name": "owner_in",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1180,
                              "src": "4224:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1237,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1182,
                              "src": "4234:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 1235,
                            "name": "addVerified",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1317,
                            "src": "4212:11:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes32_$returns$__$",
                              "typeString": "function (address,bytes32)"
                            }
                          },
                          "id": 1238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4212:27:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1239,
                        "nodeType": "ExpressionStatement",
                        "src": "4212:27:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 1241,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1189,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1180,
                        "mutability": "mutable",
                        "name": "owner_in",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3792:16:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1179,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3792:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1182,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3818:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1181,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "3818:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1184,
                        "mutability": "mutable",
                        "name": "numShares",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3840:17:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1183,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3840:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1186,
                        "mutability": "mutable",
                        "name": "name_in",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3867:21:9",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 1185,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "3867:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1188,
                        "mutability": "mutable",
                        "name": "symbol_in",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3898:23:9",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 1187,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "3898:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "3782:145:9"
                  },
                  "returnParameters": {
                    "id": 1190,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "3935:0:9"
                  },
                  "scope": 1769,
                  "src": "3771:475:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1254,
                    "nodeType": "Block",
                    "src": "4288:135:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1246,
                                  "name": "admin",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1106,
                                  "src": "4329:5:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Role_$388_storage",
                                    "typeString": "struct Roles.Role storage ref"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 1247,
                                    "name": "_msgSender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 74,
                                    "src": "4336:10:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                      "typeString": "function () view returns (address payable)"
                                    }
                                  },
                                  "id": 1248,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4336:12:9",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_struct$_Role_$388_storage",
                                    "typeString": "struct Roles.Role storage ref"
                                  },
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1244,
                                  "name": "Roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 466,
                                  "src": "4319:5:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                    "typeString": "type(library Roles)"
                                  }
                                },
                                "id": 1245,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "has",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 465,
                                "src": "4319:9:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                                }
                              },
                              "id": 1249,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4319:30:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "55736572206d7573742062652061646d696e206f6620636f6e7472616374",
                              "id": 1250,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4363:32:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ca1ca25e484623e0090654c2b525c7033916883be008219cb241ef1af7502e19",
                                "typeString": "literal_string \"User must be admin of contract\""
                              },
                              "value": "User must be admin of contract"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ca1ca25e484623e0090654c2b525c7033916883be008219cb241ef1af7502e19",
                                "typeString": "literal_string \"User must be admin of contract\""
                              }
                            ],
                            "id": 1243,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "4298:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4298:107:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1252,
                        "nodeType": "ExpressionStatement",
                        "src": "4298:107:9"
                      },
                      {
                        "id": 1253,
                        "nodeType": "PlaceholderStatement",
                        "src": "4415:1:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 1255,
                  "name": "isAdmin",
                  "nodeType": "ModifierDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1242,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "4285:2:9"
                  },
                  "src": "4269:154:9",
                  "virtual": false,
                  "visibility": "internal"
                },
                {
                  "body": {
                    "id": 1278,
                    "nodeType": "Block",
                    "src": "4471:216:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 1263,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 1260,
                                "name": "userAddr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1257,
                                "src": "4502:8:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 1261,
                                  "name": "_msgSender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 74,
                                  "src": "4514:10:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                    "typeString": "function () view returns (address payable)"
                                  }
                                },
                                "id": 1262,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4514:12:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "src": "4502:24:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "43616e6e6f74207669657720646966666572656e7420706572736f6e277320736861726573",
                              "id": 1264,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4540:39:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_eda2bfef6c9e97705aa1cf25b4d9d1a45dacece59bb8b70c08208aeaa5a05f4e",
                                "typeString": "literal_string \"Cannot view different person's shares\""
                              },
                              "value": "Cannot view different person's shares"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_eda2bfef6c9e97705aa1cf25b4d9d1a45dacece59bb8b70c08208aeaa5a05f4e",
                                "typeString": "literal_string \"Cannot view different person's shares\""
                              }
                            ],
                            "id": 1259,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "4481:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1265,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4481:108:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1266,
                        "nodeType": "ExpressionStatement",
                        "src": "4481:108:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1270,
                                  "name": "shareholders",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1104,
                                  "src": "4617:12:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Role_$388_storage",
                                    "typeString": "struct Roles.Role storage ref"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 1271,
                                    "name": "_msgSender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 74,
                                    "src": "4631:10:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                      "typeString": "function () view returns (address payable)"
                                    }
                                  },
                                  "id": 1272,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4631:12:9",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_struct$_Role_$388_storage",
                                    "typeString": "struct Roles.Role storage ref"
                                  },
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1268,
                                  "name": "Roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 466,
                                  "src": "4607:5:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                    "typeString": "type(library Roles)"
                                  }
                                },
                                "id": 1269,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "has",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 465,
                                "src": "4607:9:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                                }
                              },
                              "id": 1273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4607:37:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "55736572206d757374206f776e20736861726573",
                              "id": 1274,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4646:22:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ce49767f90dd8d0cdcc270b31e896c5cf12c2189a7644f4069dda98d05c65bfe",
                                "typeString": "literal_string \"User must own shares\""
                              },
                              "value": "User must own shares"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ce49767f90dd8d0cdcc270b31e896c5cf12c2189a7644f4069dda98d05c65bfe",
                                "typeString": "literal_string \"User must own shares\""
                              }
                            ],
                            "id": 1267,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "4599:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4599:70:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1276,
                        "nodeType": "ExpressionStatement",
                        "src": "4599:70:9"
                      },
                      {
                        "id": 1277,
                        "nodeType": "PlaceholderStatement",
                        "src": "4679:1:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 1279,
                  "name": "personalShares",
                  "nodeType": "ModifierDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1258,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1257,
                        "mutability": "mutable",
                        "name": "userAddr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1279,
                        "src": "4453:16:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1256,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4453:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "4452:18:9"
                  },
                  "src": "4429:258:9",
                  "virtual": false,
                  "visibility": "internal"
                },
                {
                  "body": {
                    "id": 1316,
                    "nodeType": "Block",
                    "src": "5276:182:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 1299,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "id": 1295,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 1290,
                                  "name": "addr",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1282,
                                  "src": "5294:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "!=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "30",
                                      "id": 1293,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5310:1:9",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      },
                                      "value": "0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      }
                                    ],
                                    "id": 1292,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5302:7:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 1291,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5302:7:9",
                                      "typeDescriptions": {
                                        "typeIdentifier": null,
                                        "typeString": null
                                      }
                                    }
                                  },
                                  "id": 1294,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5302:10:9",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "src": "5294:18:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                "id": 1298,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 1296,
                                  "name": "hash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1284,
                                  "src": "5316:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "!=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1297,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5324:1:9",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "src": "5316:9:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "5294:31:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "496e70757473206d757374206265206e6f6e7a65726f",
                              "id": 1300,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5327:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ed0c08ad2ef5f86a5a5bed89282b9c67c7db6eb792f48ef2b225432781bb3cd7",
                                "typeString": "literal_string \"Inputs must be nonzero\""
                              },
                              "value": "Inputs must be nonzero"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ed0c08ad2ef5f86a5a5bed89282b9c67c7db6eb792f48ef2b225432781bb3cd7",
                                "typeString": "literal_string \"Inputs must be nonzero\""
                              }
                            ],
                            "id": 1289,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "5286:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5286:66:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1302,
                        "nodeType": "ExpressionStatement",
                        "src": "5286:66:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1303,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "5363:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1305,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1304,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1282,
                              "src": "5378:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "5363:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1306,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1284,
                            "src": "5386:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "5363:27:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 1308,
                        "nodeType": "ExpressionStatement",
                        "src": "5363:27:9"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1310,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1282,
                              "src": "5426:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1311,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1284,
                              "src": "5432:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1312,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "5438:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1313,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5438:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 1309,
                            "name": "VerifiedAddressAdded",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1151,
                            "src": "5405:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes32_$_t_address_$returns$__$",
                              "typeString": "function (address,bytes32,address)"
                            }
                          },
                          "id": 1314,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5405:46:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1315,
                        "nodeType": "EmitStatement",
                        "src": "5400:51:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1280,
                    "nodeType": "StructuredDocumentation",
                    "src": "4693:514:9",
                    "text": " Add a verified address, along with an associated verification hash to the contract.\n Upon successful addition of a verified address, the contract must emit\n `VerifiedAddressAdded(addr, hash, msg.sender)`.\n It MUST throw if the supplied address or hash are zero, or if the address has already been supplied.\n @param addr The address of the person represented by the supplied hash.\n @param hash A cryptographic hash of the address holder's verified information."
                  },
                  "functionSelector": "47089f62",
                  "id": 1317,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 1287,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1286,
                        "name": "isAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1255,
                        "src": "5268:7:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "5268:7:9"
                    }
                  ],
                  "name": "addVerified",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1285,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1282,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1317,
                        "src": "5233:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1281,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5233:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1284,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1317,
                        "src": "5247:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1283,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "5247:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5232:28:9"
                  },
                  "returnParameters": {
                    "id": 1288,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "5276:0:9"
                  },
                  "scope": 1769,
                  "src": "5212:246:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1342,
                    "nodeType": "Block",
                    "src": "5942:141:9",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 1328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "5956:17:9",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1326,
                                "name": "addr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1320,
                                "src": "5968:4:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 1325,
                              "name": "isVerified",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1629,
                              "src": "5957:10:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address) view returns (bool)"
                              }
                            },
                            "id": 1327,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5957:16:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1330,
                        "nodeType": "IfStatement",
                        "src": "5952:30:9",
                        "trueBody": {
                          "expression": null,
                          "functionReturnParameters": 1324,
                          "id": 1329,
                          "nodeType": "Return",
                          "src": "5975:7:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1334,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "5992:27:9",
                          "subExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1331,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "5999:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1333,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1332,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1320,
                              "src": "6014:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "5999:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1335,
                        "nodeType": "ExpressionStatement",
                        "src": "5992:27:9"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1337,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1320,
                              "src": "6057:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1338,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "6063:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1339,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6063:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 1336,
                            "name": "VerifiedAddressRemoved",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1158,
                            "src": "6034:22:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (address,address)"
                            }
                          },
                          "id": 1340,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6034:42:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1341,
                        "nodeType": "EmitStatement",
                        "src": "6029:47:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1318,
                    "nodeType": "StructuredDocumentation",
                    "src": "5464:420:9",
                    "text": " Remove a verified address, and the associated verification hash. If the address is\n unknown to the contract then this does nothing. If the address is successfully removed, this\n function must emit `VerifiedAddressRemoved(addr, msg.sender)`.\n It MUST throw if an attempt is made to remove a verifiedAddress that owns Tokens.\n @param addr The verified address to be removed."
                  },
                  "functionSelector": "4487b392",
                  "id": 1343,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 1323,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1322,
                        "name": "isAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1255,
                        "src": "5934:7:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "5934:7:9"
                    }
                  ],
                  "name": "removeVerified",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1321,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1320,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1343,
                        "src": "5913:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1319,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5913:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5912:14:9"
                  },
                  "returnParameters": {
                    "id": 1324,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "5942:0:9"
                  },
                  "scope": 1769,
                  "src": "5889:194:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1387,
                    "nodeType": "Block",
                    "src": "6774:312:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 1360,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 1355,
                                    "name": "addr",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1346,
                                    "src": "6803:4:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 1354,
                                  "name": "isVerified",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1629,
                                  "src": "6792:10:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                    "typeString": "function (address) view returns (bool)"
                                  }
                                },
                                "id": 1356,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6792:16:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                "id": 1359,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 1357,
                                  "name": "hash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1348,
                                  "src": "6812:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "!=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1358,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6820:1:9",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "src": "6812:9:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "6792:29:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "496e70757473206d757374206265206e6f6e7a65726f",
                              "id": 1361,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6823:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ed0c08ad2ef5f86a5a5bed89282b9c67c7db6eb792f48ef2b225432781bb3cd7",
                                "typeString": "literal_string \"Inputs must be nonzero\""
                              },
                              "value": "Inputs must be nonzero"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ed0c08ad2ef5f86a5a5bed89282b9c67c7db6eb792f48ef2b225432781bb3cd7",
                                "typeString": "literal_string \"Inputs must be nonzero\""
                              }
                            ],
                            "id": 1353,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "6784:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6784:64:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1363,
                        "nodeType": "ExpressionStatement",
                        "src": "6784:64:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 1368,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1364,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "6862:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1366,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1365,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1346,
                              "src": "6877:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6862:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1367,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1348,
                            "src": "6886:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "6862:28:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1370,
                        "nodeType": "IfStatement",
                        "src": "6858:41:9",
                        "trueBody": {
                          "expression": null,
                          "functionReturnParameters": 1352,
                          "id": 1369,
                          "nodeType": "Return",
                          "src": "6892:7:9"
                        }
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1372,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1346,
                              "src": "6950:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 1373,
                                "name": "verifiedHashes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1110,
                                "src": "6968:14:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                  "typeString": "mapping(address => bytes32)"
                                }
                              },
                              "id": 1375,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 1374,
                                "name": "addr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1346,
                                "src": "6983:4:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "6968:20:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1376,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1348,
                              "src": "7002:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1377,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "7020:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1378,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7020:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 1371,
                            "name": "VerifiedAddressUpdated",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1169,
                            "src": "6914:22:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$_t_address_$returns$__$",
                              "typeString": "function (address,bytes32,bytes32,address)"
                            }
                          },
                          "id": 1379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6914:128:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1380,
                        "nodeType": "EmitStatement",
                        "src": "6909:133:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1385,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1381,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "7052:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1383,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1382,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1346,
                              "src": "7067:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "7052:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1384,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1348,
                            "src": "7075:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "7052:27:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 1386,
                        "nodeType": "ExpressionStatement",
                        "src": "7052:27:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1344,
                    "nodeType": "StructuredDocumentation",
                    "src": "6089:613:9",
                    "text": " Update the hash for a verified address known to the contract.\n Upon successful update of a verified address the contract must emit\n `VerifiedAddressUpdated(addr, oldHash, hash, msg.sender)`.\n If the hash is the same as the value already stored then\n no `VerifiedAddressUpdated` event is to be emitted.\n It MUST throw if the hash is zero, or if the address is unverified.\n @param addr The verified address of the person represented by the supplied hash.\n @param hash A new cryptographic hash of the address holder's updated verified information."
                  },
                  "functionSelector": "354b7b1d",
                  "id": 1388,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 1351,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1350,
                        "name": "isAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1255,
                        "src": "6766:7:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "6766:7:9"
                    }
                  ],
                  "name": "updateVerified",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1349,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1346,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1388,
                        "src": "6731:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1345,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6731:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1348,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1388,
                        "src": "6745:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1347,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "6745:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "6730:28:9"
                  },
                  "returnParameters": {
                    "id": 1352,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "6774:0:9"
                  },
                  "scope": 1769,
                  "src": "6707:379:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1455,
                    "nodeType": "Block",
                    "src": "7803:552:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1400,
                                  "name": "original",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1391,
                                  "src": "7830:8:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1399,
                                "name": "isHolder",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1644,
                                "src": "7821:8:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1401,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7821:18:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "4f726967696e616c2061646472657373206e6f74207368617265686f6c646572",
                              "id": 1402,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7841:34:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_fd9976e2a07684304d4f388aa2b09754db7cac0d1276492fe6c46e42d6f5a15f",
                                "typeString": "literal_string \"Original address not shareholder\""
                              },
                              "value": "Original address not shareholder"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_fd9976e2a07684304d4f388aa2b09754db7cac0d1276492fe6c46e42d6f5a15f",
                                "typeString": "literal_string \"Original address not shareholder\""
                              }
                            ],
                            "id": 1398,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "7813:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1403,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7813:63:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1404,
                        "nodeType": "ExpressionStatement",
                        "src": "7813:63:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1407,
                                  "name": "replacement",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1393,
                                  "src": "7905:11:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1406,
                                "name": "isVerified",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1629,
                                "src": "7894:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1408,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7894:23:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "5265706c6163656d656e742061646472657373206973206e6f74207665726966696564",
                              "id": 1409,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7919:37:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d49882fab10c00aeba16f9c033bf3b3f9e205ad981dd2f9ed4df961d5895c021",
                                "typeString": "literal_string \"Replacement address is not verified\""
                              },
                              "value": "Replacement address is not verified"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_d49882fab10c00aeba16f9c033bf3b3f9e205ad981dd2f9ed4df961d5895c021",
                                "typeString": "literal_string \"Replacement address is not verified\""
                              }
                            ],
                            "id": 1405,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "7886:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1410,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7886:71:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1411,
                        "nodeType": "ExpressionStatement",
                        "src": "7886:71:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1416,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "!",
                              "prefix": true,
                              "src": "7988:22:9",
                              "subExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 1414,
                                    "name": "replacement",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1393,
                                    "src": "7998:11:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 1413,
                                  "name": "isHolder",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1644,
                                  "src": "7989:8:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                    "typeString": "function (address) view returns (bool)"
                                  }
                                },
                                "id": 1415,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7989:21:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "5265706c6163656d656e742061646472657373206973206e6f7420616c6c6f77656420746f20686f6c6420616e7920746f6b656e73",
                              "id": 1417,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8024:55:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_40a904b3dbd22e18465474aa37aebf4da1a7d81fef47ce701b64973cda788928",
                                "typeString": "literal_string \"Replacement address is not allowed to hold any tokens\""
                              },
                              "value": "Replacement address is not allowed to hold any tokens"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_40a904b3dbd22e18465474aa37aebf4da1a7d81fef47ce701b64973cda788928",
                                "typeString": "literal_string \"Replacement address is not allowed to hold any tokens\""
                              }
                            ],
                            "id": 1412,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "7967:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1418,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7967:122:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1419,
                        "nodeType": "ExpressionStatement",
                        "src": "7967:122:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1423,
                              "name": "shareholders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1104,
                              "src": "8113:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1424,
                              "name": "original",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1391,
                              "src": "8127:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1420,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "8100:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "remove",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 439,
                            "src": "8100:12:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1425,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8100:36:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1426,
                        "nodeType": "ExpressionStatement",
                        "src": "8100:36:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1430,
                              "name": "shareholders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1104,
                              "src": "8156:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1431,
                              "name": "replacement",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1393,
                              "src": "8170:11:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1427,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "8146:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1429,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 414,
                            "src": "8146:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8146:36:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1433,
                        "nodeType": "ExpressionStatement",
                        "src": "8146:36:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1440,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1434,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "8193:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1436,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1435,
                              "name": "replacement",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1393,
                              "src": "8203:11:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "8193:22:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1437,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "8218:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1439,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1438,
                              "name": "original",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1391,
                              "src": "8228:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8218:19:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8193:44:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1441,
                        "nodeType": "ExpressionStatement",
                        "src": "8193:44:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1442,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "8247:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1444,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1443,
                              "name": "original",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1391,
                              "src": "8257:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "8247:19:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1445,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8269:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "8247:23:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1447,
                        "nodeType": "ExpressionStatement",
                        "src": "8247:23:9"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1449,
                              "name": "original",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1391,
                              "src": "8312:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1450,
                              "name": "replacement",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1393,
                              "src": "8322:11:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1451,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "8335:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1452,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8335:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 1448,
                            "name": "VerifiedAddressSuperseded",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1178,
                            "src": "8286:25:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (address,address,address)"
                            }
                          },
                          "id": 1453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8286:62:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1454,
                        "nodeType": "EmitStatement",
                        "src": "8281:67:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1389,
                    "nodeType": "StructuredDocumentation",
                    "src": "7092:606:9",
                    "text": " Cancel the original address and reissue the Tokens to the replacement address.\n Access to this function MUST be strictly controlled.\n The `original` address MUST be removed from the set of verified addresses.\n Throw if the `original` address supplied is not a shareholder.\n Throw if the `replacement` address is not a verified address.\n Throw if the `replacement` address already holds Tokens.\n This function MUST emit the `VerifiedAddressSuperseded` event.\n @param original The address to be superseded. This address MUST NOT be reused."
                  },
                  "functionSelector": "79f64720",
                  "id": 1456,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 1396,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1395,
                        "name": "isAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1255,
                        "src": "7791:7:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "7791:7:9"
                    }
                  ],
                  "name": "cancelAndReissue",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1394,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1391,
                        "mutability": "mutable",
                        "name": "original",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1456,
                        "src": "7729:16:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1390,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "7729:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1393,
                        "mutability": "mutable",
                        "name": "replacement",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1456,
                        "src": "7747:19:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1392,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "7747:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "7728:39:9"
                  },
                  "returnParameters": {
                    "id": 1397,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "7803:0:9"
                  },
                  "scope": 1769,
                  "src": "7703:652:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "baseFunctions": [
                    113
                  ],
                  "body": {
                    "id": 1529,
                    "nodeType": "Block",
                    "src": "8835:460:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1469,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1459,
                                  "src": "8864:2:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1468,
                                "name": "isVerified",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1629,
                                "src": "8853:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1470,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8853:14:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "546f2061646472657373206973206e6f74207665726966696564",
                              "id": 1471,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8869:28:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3ba228b6838c4a52b6635eaaa1acb709d39745d2604c48cae2f51734135ddcb",
                                "typeString": "literal_string \"To address is not verified\""
                              },
                              "value": "To address is not verified"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_b3ba228b6838c4a52b6635eaaa1acb709d39745d2604c48cae2f51734135ddcb",
                                "typeString": "literal_string \"To address is not verified\""
                              }
                            ],
                            "id": 1467,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "8845:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8845:53:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1473,
                        "nodeType": "ExpressionStatement",
                        "src": "8845:53:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1480,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 1475,
                                  "name": "holderAmt",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1114,
                                  "src": "8929:9:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 1478,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 1476,
                                    "name": "_msgSender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 74,
                                    "src": "8939:10:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                      "typeString": "function () view returns (address payable)"
                                    }
                                  },
                                  "id": 1477,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8939:12:9",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "8929:23:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 1479,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1461,
                                "src": "8956:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "8929:32:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "53656e64657220646f6573206e6f74206861766520656e6f75676820746f6b656e7320746f207472616e73666572",
                              "id": 1481,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8975:48:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_14f9740936d31b05f98d280ecd5f9fc4ed144cf478a630c298bdc59cc7eb9c9b",
                                "typeString": "literal_string \"Sender does not have enough tokens to transfer\""
                              },
                              "value": "Sender does not have enough tokens to transfer"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_14f9740936d31b05f98d280ecd5f9fc4ed144cf478a630c298bdc59cc7eb9c9b",
                                "typeString": "literal_string \"Sender does not have enough tokens to transfer\""
                              }
                            ],
                            "id": 1474,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "8908:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1482,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8908:125:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1483,
                        "nodeType": "ExpressionStatement",
                        "src": "8908:125:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 1489,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "9048:28:9",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1486,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "9059:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1487,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1459,
                                "src": "9073:2:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1484,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "9049:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1485,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "has",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 465,
                              "src": "9049:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                                "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                              }
                            },
                            "id": 1488,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9049:27:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1497,
                        "nodeType": "IfStatement",
                        "src": "9044:61:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1493,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "9088:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1494,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1459,
                                "src": "9102:2:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1490,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "9078:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1492,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 414,
                              "src": "9078:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                                "typeString": "function (struct Roles.Role storage pointer,address)"
                              }
                            },
                            "id": 1495,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9078:27:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 1496,
                          "nodeType": "ExpressionStatement",
                          "src": "9078:27:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1503,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1498,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "9116:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1501,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1499,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "9126:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1500,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9126:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "9116:23:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1502,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1461,
                            "src": "9143:5:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9116:32:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1504,
                        "nodeType": "ExpressionStatement",
                        "src": "9116:32:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1505,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "9158:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1507,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1506,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1459,
                              "src": "9168:2:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "9158:13:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1508,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1461,
                            "src": "9175:5:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9158:22:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1510,
                        "nodeType": "ExpressionStatement",
                        "src": "9158:22:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1511,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "9195:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1514,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1512,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "9205:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1513,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9205:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9195:23:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9221:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "9195:27:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1523,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "9261:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 1524,
                                  "name": "_msgSender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 74,
                                  "src": "9275:10:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                    "typeString": "function () view returns (address payable)"
                                  }
                                },
                                "id": 1525,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9275:12:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1520,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "9248:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1522,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "remove",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 439,
                              "src": "9248:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                                "typeString": "function (struct Roles.Role storage pointer,address)"
                              }
                            },
                            "id": 1526,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9248:40:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 1527,
                          "nodeType": "ExpressionStatement",
                          "src": "9248:40:9"
                        },
                        "id": 1528,
                        "nodeType": "IfStatement",
                        "src": "9191:97:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 1518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "9224:9:9",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 1517,
                              "name": "holders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1116,
                              "src": "9224:7:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1519,
                          "nodeType": "ExpressionStatement",
                          "src": "9224:9:9"
                        }
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1457,
                    "nodeType": "StructuredDocumentation",
                    "src": "8361:365:9",
                    "text": " The `transfer` function MUST NOT allow transfers to addresses that\n have not been verified and added to the contract.\n If the `to` address is not currently a shareholder then it MUST become one.\n If the transfer will reduce `msg.sender`'s balance to 0 then that address\n MUST be removed from the list of shareholders."
                  },
                  "functionSelector": "a9059cbb",
                  "id": 1530,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transfer",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1463,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "8799:8:9"
                  },
                  "parameters": {
                    "id": 1462,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1459,
                        "mutability": "mutable",
                        "name": "to",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1530,
                        "src": "8749:10:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1458,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "8749:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1461,
                        "mutability": "mutable",
                        "name": "value",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1530,
                        "src": "8761:13:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1460,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8761:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "8748:27:9"
                  },
                  "returnParameters": {
                    "id": 1466,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1465,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1530,
                        "src": "8825:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1464,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "8825:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "8824:6:9"
                  },
                  "scope": 1769,
                  "src": "8731:564:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "baseFunctions": [
                    145
                  ],
                  "body": {
                    "id": 1609,
                    "nodeType": "Block",
                    "src": "9793:503:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1545,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1535,
                                  "src": "9822:2:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1544,
                                "name": "isVerified",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1629,
                                "src": "9811:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1546,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9811:14:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "546f2061646472657373206973206e6f74207665726966696564",
                              "id": 1547,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9827:28:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3ba228b6838c4a52b6635eaaa1acb709d39745d2604c48cae2f51734135ddcb",
                                "typeString": "literal_string \"To address is not verified\""
                              },
                              "value": "To address is not verified"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_b3ba228b6838c4a52b6635eaaa1acb709d39745d2604c48cae2f51734135ddcb",
                                "typeString": "literal_string \"To address is not verified\""
                              }
                            ],
                            "id": 1543,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "9803:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1548,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9803:53:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1549,
                        "nodeType": "ExpressionStatement",
                        "src": "9803:53:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1552,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1533,
                                  "src": "9885:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1551,
                                "name": "isVerified",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1629,
                                "src": "9874:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1553,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9874:16:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "46726f6d2061646472657373206973206e6f74207665726966696564",
                              "id": 1554,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9892:30:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_01ebc0b921cba0fc2959786e234b103cae89aa016cec20dc8ac5b73729d615fb",
                                "typeString": "literal_string \"From address is not verified\""
                              },
                              "value": "From address is not verified"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_01ebc0b921cba0fc2959786e234b103cae89aa016cec20dc8ac5b73729d615fb",
                                "typeString": "literal_string \"From address is not verified\""
                              }
                            ],
                            "id": 1550,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "9866:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1555,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9866:57:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1556,
                        "nodeType": "ExpressionStatement",
                        "src": "9866:57:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1562,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 1558,
                                  "name": "holderAmt",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1114,
                                  "src": "9954:9:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 1560,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 1559,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1533,
                                  "src": "9964:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9954:15:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 1561,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1537,
                                "src": "9973:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "9954:24:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "53656e64657220646f6573206e6f74206861766520656e6f75676820746f6b656e7320746f207472616e73666572",
                              "id": 1563,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9992:48:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_14f9740936d31b05f98d280ecd5f9fc4ed144cf478a630c298bdc59cc7eb9c9b",
                                "typeString": "literal_string \"Sender does not have enough tokens to transfer\""
                              },
                              "value": "Sender does not have enough tokens to transfer"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_14f9740936d31b05f98d280ecd5f9fc4ed144cf478a630c298bdc59cc7eb9c9b",
                                "typeString": "literal_string \"Sender does not have enough tokens to transfer\""
                              }
                            ],
                            "id": 1557,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "9933:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9933:117:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1565,
                        "nodeType": "ExpressionStatement",
                        "src": "9933:117:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 1571,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "10065:28:9",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1568,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "10076:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1569,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1535,
                                "src": "10090:2:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1566,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "10066:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1567,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "has",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 465,
                              "src": "10066:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                                "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                              }
                            },
                            "id": 1570,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10066:27:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1579,
                        "nodeType": "IfStatement",
                        "src": "10061:61:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1575,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "10105:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1576,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1535,
                                "src": "10119:2:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1572,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "10095:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1574,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 414,
                              "src": "10095:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                                "typeString": "function (struct Roles.Role storage pointer,address)"
                              }
                            },
                            "id": 1577,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10095:27:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 1578,
                          "nodeType": "ExpressionStatement",
                          "src": "10095:27:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1580,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "10133:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1582,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1581,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1533,
                              "src": "10143:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "10133:15:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1583,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1537,
                            "src": "10152:5:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10133:24:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1585,
                        "nodeType": "ExpressionStatement",
                        "src": "10133:24:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1590,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1586,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "10167:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1588,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1587,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1535,
                              "src": "10177:2:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "10167:13:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1589,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1537,
                            "src": "10184:5:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10167:22:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1591,
                        "nodeType": "ExpressionStatement",
                        "src": "10167:22:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1596,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1592,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "10204:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1594,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1593,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1533,
                              "src": "10214:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "10204:15:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1595,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10222:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "10204:19:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1603,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "10262:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 1604,
                                  "name": "_msgSender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 74,
                                  "src": "10276:10:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                    "typeString": "function () view returns (address payable)"
                                  }
                                },
                                "id": 1605,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10276:12:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1600,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "10249:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1602,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "remove",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 439,
                              "src": "10249:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                                "typeString": "function (struct Roles.Role storage pointer,address)"
                              }
                            },
                            "id": 1606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10249:40:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 1607,
                          "nodeType": "ExpressionStatement",
                          "src": "10249:40:9"
                        },
                        "id": 1608,
                        "nodeType": "IfStatement",
                        "src": "10200:89:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 1598,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "10225:9:9",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 1597,
                              "name": "holders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1116,
                              "src": "10225:7:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1599,
                          "nodeType": "ExpressionStatement",
                          "src": "10225:9:9"
                        }
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1531,
                    "nodeType": "StructuredDocumentation",
                    "src": "9301:363:9",
                    "text": " The `transferFrom` function MUST NOT allow transfers to addresses that\n have not been verified and added to the contract.\n If the `to` address is not currently a shareholder then it MUST become one.\n If the transfer will reduce `from`'s balance to 0 then that address\n MUST be removed from the list of shareholders."
                  },
                  "functionSelector": "23b872dd",
                  "id": 1610,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transferFrom",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1539,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "9769:8:9"
                  },
                  "parameters": {
                    "id": 1538,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1533,
                        "mutability": "mutable",
                        "name": "from",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1610,
                        "src": "9700:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1532,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9700:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1535,
                        "mutability": "mutable",
                        "name": "to",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1610,
                        "src": "9722:10:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1534,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9722:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1537,
                        "mutability": "mutable",
                        "name": "value",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1610,
                        "src": "9742:13:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1536,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9742:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "9690:71:9"
                  },
                  "returnParameters": {
                    "id": 1542,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1541,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1610,
                        "src": "9787:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1540,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "9787:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "9786:6:9"
                  },
                  "scope": 1769,
                  "src": "9669:627:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1628,
                    "nodeType": "Block",
                    "src": "10548:82:9",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 1622,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1618,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "10562:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1620,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1619,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1613,
                              "src": "10577:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "10562:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1621,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10586:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "10562:25:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1625,
                        "nodeType": "IfStatement",
                        "src": "10558:42:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 1623,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10596:4:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "functionReturnParameters": 1617,
                          "id": 1624,
                          "nodeType": "Return",
                          "src": "10589:11:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 1626,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10618:5:9",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 1617,
                        "id": 1627,
                        "nodeType": "Return",
                        "src": "10611:12:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1611,
                    "nodeType": "StructuredDocumentation",
                    "src": "10302:180:9",
                    "text": " Tests that the supplied address is known to the contract.\n @param addr The address to test.\n @return true if the address is known to the contract."
                  },
                  "functionSelector": "b9209e33",
                  "id": 1629,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "isVerified",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1614,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1613,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1629,
                        "src": "10507:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1612,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10507:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "10506:14:9"
                  },
                  "returnParameters": {
                    "id": 1617,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1616,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1629,
                        "src": "10542:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1615,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "10542:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "10541:6:9"
                  },
                  "scope": 1769,
                  "src": "10487:143:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1643,
                    "nodeType": "Block",
                    "src": "10877:53:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1639,
                              "name": "shareholders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1104,
                              "src": "10904:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1640,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1632,
                              "src": "10918:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1637,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "10894:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1638,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "has",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 465,
                            "src": "10894:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                            }
                          },
                          "id": 1641,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10894:29:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "functionReturnParameters": 1636,
                        "id": 1642,
                        "nodeType": "Return",
                        "src": "10887:36:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1630,
                    "nodeType": "StructuredDocumentation",
                    "src": "10636:177:9",
                    "text": " Checks to see if the supplied address is a share holder.\n @param addr The address to check.\n @return true if the supplied address owns a token."
                  },
                  "functionSelector": "d4d7b19a",
                  "id": 1644,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "isHolder",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1633,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1632,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1644,
                        "src": "10836:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1631,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10836:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "10835:14:9"
                  },
                  "returnParameters": {
                    "id": 1636,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1635,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1644,
                        "src": "10871:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1634,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "10871:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "10870:6:9"
                  },
                  "scope": 1769,
                  "src": "10818:112:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1664,
                    "nodeType": "Block",
                    "src": "11293:85:9",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 1658,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1654,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "11307:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1656,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1655,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1647,
                              "src": "11322:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "11307:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1657,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1649,
                            "src": "11331:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "11307:28:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1661,
                        "nodeType": "IfStatement",
                        "src": "11303:45:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 1659,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11344:4:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "functionReturnParameters": 1653,
                          "id": 1660,
                          "nodeType": "Return",
                          "src": "11337:11:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 1662,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11366:5:9",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 1653,
                        "id": 1663,
                        "nodeType": "Return",
                        "src": "11359:12:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1645,
                    "nodeType": "StructuredDocumentation",
                    "src": "10936:280:9",
                    "text": " Checks that the supplied hash is associated with the given address.\n @param addr The address to test.\n @param hash The hash to test.\n @return true if the hash matches the one supplied with the address in `addVerified`, or `updateVerified`."
                  },
                  "functionSelector": "f3221c7f",
                  "id": 1665,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "hasHash",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1650,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1647,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1665,
                        "src": "11238:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1646,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11238:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1649,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1665,
                        "src": "11252:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1648,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "11252:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11237:28:9"
                  },
                  "returnParameters": {
                    "id": 1653,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1652,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1665,
                        "src": "11287:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1651,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "11287:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11286:6:9"
                  },
                  "scope": 1769,
                  "src": "11221:157:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1673,
                    "nodeType": "Block",
                    "src": "11568:31:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1671,
                          "name": "holders",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1116,
                          "src": "11585:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1670,
                        "id": 1672,
                        "nodeType": "Return",
                        "src": "11578:14:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1666,
                    "nodeType": "StructuredDocumentation",
                    "src": "11384:126:9",
                    "text": " The number of addresses that hold tokens.\n @return the number of unique addresses that hold tokens."
                  },
                  "functionSelector": "1aab9a9f",
                  "id": 1674,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "holderCount",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1667,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "11535:2:9"
                  },
                  "returnParameters": {
                    "id": 1670,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1669,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1674,
                        "src": "11559:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1668,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11559:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11558:9:9"
                  },
                  "scope": 1769,
                  "src": "11515:84:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "baseFunctions": [
                    103
                  ],
                  "body": {
                    "id": 1689,
                    "nodeType": "Block",
                    "src": "11750:42:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1685,
                            "name": "holderAmt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1114,
                            "src": "11767:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 1687,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1686,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1676,
                            "src": "11777:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "11767:18:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1684,
                        "id": 1688,
                        "nodeType": "Return",
                        "src": "11760:25:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "70a08231",
                  "id": 1690,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1680,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1676,
                          "src": "11711:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "id": 1681,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1679,
                        "name": "personalShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1279,
                        "src": "11696:14:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$_t_address_$",
                          "typeString": "modifier (address)"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "11696:23:9"
                    }
                  ],
                  "name": "balanceOf",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1678,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "11666:8:9"
                  },
                  "parameters": {
                    "id": 1677,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1676,
                        "mutability": "mutable",
                        "name": "account",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1690,
                        "src": "11624:15:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1675,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11624:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11623:17:9"
                  },
                  "returnParameters": {
                    "id": 1684,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1683,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1690,
                        "src": "11737:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1682,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11737:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11736:9:9"
                  },
                  "scope": 1769,
                  "src": "11605:187:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "baseFunctions": [
                    95
                  ],
                  "body": {
                    "id": 1698,
                    "nodeType": "Block",
                    "src": "11862:33:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1696,
                          "name": "sharesOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1118,
                          "src": "11879:9:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1695,
                        "id": 1697,
                        "nodeType": "Return",
                        "src": "11872:16:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "18160ddd",
                  "id": 1699,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "totalSupply",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1692,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "11830:8:9"
                  },
                  "parameters": {
                    "id": 1691,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "11818:2:9"
                  },
                  "returnParameters": {
                    "id": 1695,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1694,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1699,
                        "src": "11853:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1693,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11853:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11852:9:9"
                  },
                  "scope": 1769,
                  "src": "11798:97:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "body": {
                    "id": 1711,
                    "nodeType": "Block",
                    "src": "12302:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1708,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12319:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1707,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "12312:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1709,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12312:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1710,
                        "nodeType": "ExpressionStatement",
                        "src": "12312:32:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1700,
                    "nodeType": "StructuredDocumentation",
                    "src": "11901:333:9",
                    "text": " By counting the number of token holders using `holderCount`\n you can retrieve the complete list of token holders, one at a time.\n It MUST throw if `index >= holderCount()`.\n @param index The zero-based index of the holder.\n @return the address of the token holder with the given index."
                  },
                  "functionSelector": "197bc336",
                  "id": 1712,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "holderAt",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1703,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1702,
                        "mutability": "mutable",
                        "name": "index",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1712,
                        "src": "12257:13:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1701,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12257:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "12256:15:9"
                  },
                  "returnParameters": {
                    "id": 1706,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1705,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1712,
                        "src": "12293:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1704,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "12293:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "12292:9:9"
                  },
                  "scope": 1769,
                  "src": "12239:112:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1724,
                    "nodeType": "Block",
                    "src": "12620:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1721,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12637:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1720,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "12630:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12630:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1723,
                        "nodeType": "ExpressionStatement",
                        "src": "12630:32:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1713,
                    "nodeType": "StructuredDocumentation",
                    "src": "12357:195:9",
                    "text": " Checks to see if the supplied address was superseded.\n @param addr The address to check.\n @return true if the supplied address was superseded by another address."
                  },
                  "functionSelector": "2da7293e",
                  "id": 1725,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "isSuperseded",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1716,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1715,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1725,
                        "src": "12579:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1714,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "12579:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "12578:14:9"
                  },
                  "returnParameters": {
                    "id": 1719,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1718,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1725,
                        "src": "12614:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1717,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "12614:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "12613:6:9"
                  },
                  "scope": 1769,
                  "src": "12557:112:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1737,
                    "nodeType": "Block",
                    "src": "13096:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1734,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13113:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1733,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "13106:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1735,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13106:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1736,
                        "nodeType": "ExpressionStatement",
                        "src": "13106:32:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1726,
                    "nodeType": "StructuredDocumentation",
                    "src": "12675:349:9",
                    "text": " Gets the most recent address, given a superseded one.\n Addresses may be superseded multiple times, so this function needs to\n follow the chain of addresses until it reaches the final, verified address.\n @param addr The superseded address.\n @return the verified address that ultimately holds the share."
                  },
                  "functionSelector": "cc397ed3",
                  "id": 1738,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "getCurrentFor",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1729,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1728,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1738,
                        "src": "13052:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1727,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13052:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13051:14:9"
                  },
                  "returnParameters": {
                    "id": 1732,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1731,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1738,
                        "src": "13087:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1730,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13087:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13086:9:9"
                  },
                  "scope": 1769,
                  "src": "13029:116:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "baseFunctions": [
                    123
                  ],
                  "body": {
                    "id": 1752,
                    "nodeType": "Block",
                    "src": "13332:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1749,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13349:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1748,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "13342:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13342:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1751,
                        "nodeType": "ExpressionStatement",
                        "src": "13342:32:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "dd62ed3e",
                  "id": 1753,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "allowance",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1744,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "13280:8:9"
                  },
                  "parameters": {
                    "id": 1743,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1740,
                        "mutability": "mutable",
                        "name": "owner_in",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1753,
                        "src": "13220:16:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1739,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13220:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1742,
                        "mutability": "mutable",
                        "name": "spender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1753,
                        "src": "13238:15:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1741,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13238:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13219:35:9"
                  },
                  "returnParameters": {
                    "id": 1747,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1746,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1753,
                        "src": "13319:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1745,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13319:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13318:9:9"
                  },
                  "scope": 1769,
                  "src": "13201:180:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "baseFunctions": [
                    133
                  ],
                  "body": {
                    "id": 1767,
                    "nodeType": "Block",
                    "src": "13498:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1764,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13515:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1763,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "13508:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1765,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13508:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1766,
                        "nodeType": "ExpressionStatement",
                        "src": "13508:32:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "095ea7b3",
                  "id": 1768,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "approve",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1759,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "13462:8:9"
                  },
                  "parameters": {
                    "id": 1758,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1755,
                        "mutability": "mutable",
                        "name": "spender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1768,
                        "src": "13404:15:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1754,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13404:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1757,
                        "mutability": "mutable",
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1768,
                        "src": "13421:14:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1756,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13421:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13403:33:9"
                  },
                  "returnParameters": {
                    "id": 1762,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1761,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1768,
                        "src": "13488:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1760,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "13488:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13487:6:9"
                  },
                  "scope": 1769,
                  "src": "13387:160:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
                }
              ],
              "scope": 1770,
              "src": "1093:12456:9"
            }
          ],
          "src": "0:13550:9"
        },
        "legacyAST": {
          "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/SecureToken.sol",
          "exportedSymbols": {
            "SecureToken": [
              1769
            ]
          },
          "id": 1770,
          "license": null,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 1083,
              "literals": [
                "solidity",
                "^",
                "0.6",
                ".8"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:23:9"
            },
            {
              "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/Imports/Context.sol",
              "file": "./Imports/Context.sol",
              "id": 1084,
              "nodeType": "ImportDirective",
              "scope": 1770,
              "sourceUnit": 87,
              "src": "25:31:9",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/Imports/SafeMath.sol",
              "file": "./Imports/SafeMath.sol",
              "id": 1085,
              "nodeType": "ImportDirective",
              "scope": 1770,
              "sourceUnit": 663,
              "src": "57:32:9",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/Imports/IERC20.sol",
              "file": "./Imports/IERC20.sol",
              "id": 1086,
              "nodeType": "ImportDirective",
              "scope": 1770,
              "sourceUnit": 165,
              "src": "90:30:9",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "/root/blockchain/MeldxContract/online-platform/contracts/Imports/Roles.sol",
              "file": "./Imports/Roles.sol",
              "id": 1088,
              "nodeType": "ImportDirective",
              "scope": 1770,
              "sourceUnit": 467,
              "src": "121:42:9",
              "symbolAliases": [
                {
                  "foreign": {
                    "argumentTypes": null,
                    "id": 1087,
                    "name": "Roles",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": null,
                    "src": "129:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": null,
                      "typeString": null
                    }
                  },
                  "local": null
                }
              ],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [
                {
                  "arguments": null,
                  "baseName": {
                    "contractScope": null,
                    "id": 1090,
                    "name": "IERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 164,
                    "src": "1117:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$164",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 1091,
                  "nodeType": "InheritanceSpecifier",
                  "src": "1117:6:9"
                },
                {
                  "arguments": null,
                  "baseName": {
                    "contractScope": null,
                    "id": 1092,
                    "name": "Context",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 86,
                    "src": "1125:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Context_$86",
                      "typeString": "contract Context"
                    }
                  },
                  "id": 1093,
                  "nodeType": "InheritanceSpecifier",
                  "src": "1125:7:9"
                }
              ],
              "contractDependencies": [
                86,
                164
              ],
              "contractKind": "contract",
              "documentation": {
                "id": 1089,
                "nodeType": "StructuredDocumentation",
                "src": "305:787:9",
                "text": " An `ERC20` compatible token that conforms to Delaware State Senate,\n 149th General Assembly, Senate Bill No. 69: An act to Amend Title 8\n of the Delaware Code Relating to the General Corporation Law.\n *  Implementation Details.\n *  An implementation of this token standard SHOULD provide the following:\n *  `name` - for use by wallets and exchanges.\n `symbol` - for use by wallets and exchanges.\n *  The implementation MUST take care not to allow unauthorised access to share\n transfer functions.\n *  In addition to the above the following optional `ERC20` function MUST be defined.\n *  `decimals` — MUST return `0` as each token represents a single Share and Shares are non-divisible.\n *  @dev Ref https://github.com/ethereum/EIPs/pull/884"
              },
              "fullyImplemented": true,
              "id": 1769,
              "linearizedBaseContracts": [
                1769,
                86,
                164
              ],
              "name": "SecureToken",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "id": 1096,
                  "libraryName": {
                    "contractScope": null,
                    "id": 1094,
                    "name": "Roles",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 466,
                    "src": "1145:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Roles_$466",
                      "typeString": "library Roles"
                    }
                  },
                  "nodeType": "UsingForDirective",
                  "src": "1139:24:9",
                  "typeName": {
                    "id": 1095,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1155:7:9",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                },
                {
                  "constant": false,
                  "id": 1098,
                  "mutability": "mutable",
                  "name": "NAME",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1195:19:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1097,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1195:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 1100,
                  "mutability": "mutable",
                  "name": "SYMBOL",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1220:21:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1099,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1220:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 1102,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1270:16:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$388_storage",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1101,
                    "name": "Roles.Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 388,
                    "src": "1270:10:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$388_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1104,
                  "mutability": "mutable",
                  "name": "shareholders",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1292:23:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$388_storage",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1103,
                    "name": "Roles.Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 388,
                    "src": "1292:10:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$388_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1106,
                  "mutability": "mutable",
                  "name": "admin",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1321:16:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$388_storage",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1105,
                    "name": "Roles.Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 388,
                    "src": "1321:10:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$388_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1110,
                  "mutability": "mutable",
                  "name": "verifiedHashes",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1367:50:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                    "typeString": "mapping(address => bytes32)"
                  },
                  "typeName": {
                    "id": 1109,
                    "keyType": {
                      "id": 1107,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1375:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1367:27:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                      "typeString": "mapping(address => bytes32)"
                    },
                    "valueType": {
                      "id": 1108,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1386:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 1114,
                  "mutability": "mutable",
                  "name": "holderAmt",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1423:45:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "typeName": {
                    "id": 1113,
                    "keyType": {
                      "id": 1111,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1431:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1423:27:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 1112,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1442:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 1116,
                  "mutability": "mutable",
                  "name": "holders",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1474:15:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1474:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1118,
                  "mutability": "mutable",
                  "name": "sharesOut",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1769,
                  "src": "1495:17:9",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1495:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "body": {
                    "id": 1125,
                    "nodeType": "Block",
                    "src": "1573:28:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1123,
                          "name": "NAME",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1098,
                          "src": "1590:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "functionReturnParameters": 1122,
                        "id": 1124,
                        "nodeType": "Return",
                        "src": "1583:11:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "06fdde03",
                  "id": 1126,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "name",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1119,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1532:2:9"
                  },
                  "returnParameters": {
                    "id": 1122,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1121,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1126,
                        "src": "1558:13:9",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 1120,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1558:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1557:15:9"
                  },
                  "scope": 1769,
                  "src": "1519:82:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "body": {
                    "id": 1133,
                    "nodeType": "Block",
                    "src": "1663:30:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1131,
                          "name": "SYMBOL",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1100,
                          "src": "1680:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "functionReturnParameters": 1130,
                        "id": 1132,
                        "nodeType": "Return",
                        "src": "1673:13:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "95d89b41",
                  "id": 1134,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "symbol",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1127,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1622:2:9"
                  },
                  "returnParameters": {
                    "id": 1130,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1129,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1134,
                        "src": "1648:13:9",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 1128,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1648:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1647:15:9"
                  },
                  "scope": 1769,
                  "src": "1607:86:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "body": {
                    "id": 1141,
                    "nodeType": "Block",
                    "src": "1749:25:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1766:1:9",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1138,
                        "id": 1140,
                        "nodeType": "Return",
                        "src": "1759:8:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "313ce567",
                  "id": 1142,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "decimals",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1135,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1716:2:9"
                  },
                  "returnParameters": {
                    "id": 1138,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1137,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1142,
                        "src": "1742:5:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "typeName": {
                          "id": 1136,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "1742:5:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1741:7:9"
                  },
                  "scope": 1769,
                  "src": "1699:75:9",
                  "stateMutability": "pure",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "anonymous": false,
                  "documentation": {
                    "id": 1143,
                    "nodeType": "StructuredDocumentation",
                    "src": "1780:315:9",
                    "text": " This event is emitted when a verified address and associated identity hash are\n added to the contract.\n @param addr The address that was added.\n @param hash The identity hash associated with the address.\n @param sender The address that caused the address to be added."
                  },
                  "id": 1151,
                  "name": "VerifiedAddressAdded",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 1150,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1145,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1151,
                        "src": "2136:20:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1144,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2136:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1147,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1151,
                        "src": "2166:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1146,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "2166:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1149,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "sender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1151,
                        "src": "2188:22:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1148,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2188:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2126:90:9"
                  },
                  "src": "2100:117:9"
                },
                {
                  "anonymous": false,
                  "documentation": {
                    "id": 1152,
                    "nodeType": "StructuredDocumentation",
                    "src": "2223:256:9",
                    "text": " This event is emitted when a verified address its associated identity hash are\n removed from the contract.\n @param addr The address that was removed.\n @param sender The address that caused the address to be removed."
                  },
                  "id": 1158,
                  "name": "VerifiedAddressRemoved",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 1157,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1154,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1158,
                        "src": "2513:20:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1153,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2513:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1156,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "sender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1158,
                        "src": "2535:22:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1155,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2535:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2512:46:9"
                  },
                  "src": "2484:75:9"
                },
                {
                  "anonymous": false,
                  "documentation": {
                    "id": 1159,
                    "nodeType": "StructuredDocumentation",
                    "src": "2565:378:9",
                    "text": " This event is emitted when the identity hash associated with a verified address is updated.\n @param addr The address whose hash was updated.\n @param oldHash The identity hash that was associated with the address.\n @param hash The hash now associated with the address.\n @param sender The address that caused the hash to be updated."
                  },
                  "id": 1169,
                  "name": "VerifiedAddressUpdated",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 1168,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1161,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1169,
                        "src": "2986:20:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1160,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2986:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1163,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "oldHash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1169,
                        "src": "3016:15:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1162,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "3016:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1165,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1169,
                        "src": "3041:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1164,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "3041:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1167,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "sender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1169,
                        "src": "3063:22:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1166,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3063:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2976:115:9"
                  },
                  "src": "2948:144:9"
                },
                {
                  "anonymous": false,
                  "documentation": {
                    "id": 1170,
                    "nodeType": "StructuredDocumentation",
                    "src": "3098:521:9",
                    "text": " This event is emitted when an address is cancelled and replaced with\n a new address.  This happens in the case where a shareholder has\n lost access to their original address and needs to have their share\n reissued to a new address.  This is the equivalent of issuing replacement\n share certificates.\n @param original The address being superseded.\n @param replacement The new address.\n @param sender The address that caused the address to be superseded."
                  },
                  "id": 1178,
                  "name": "VerifiedAddressSuperseded",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 1177,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1172,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "original",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1178,
                        "src": "3665:24:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1171,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3665:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1174,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "replacement",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1178,
                        "src": "3699:27:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1173,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3699:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1176,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "sender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1178,
                        "src": "3736:22:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1175,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3736:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "3655:109:9"
                  },
                  "src": "3624:141:9"
                },
                {
                  "body": {
                    "id": 1240,
                    "nodeType": "Block",
                    "src": "3935:311:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1191,
                            "name": "NAME",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1098,
                            "src": "3945:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1192,
                            "name": "name_in",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1186,
                            "src": "3952:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3945:14:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 1194,
                        "nodeType": "ExpressionStatement",
                        "src": "3945:14:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1197,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1195,
                            "name": "SYMBOL",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1100,
                            "src": "3969:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1196,
                            "name": "symbol_in",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1188,
                            "src": "3978:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3969:18:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 1198,
                        "nodeType": "ExpressionStatement",
                        "src": "3969:18:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1202,
                              "name": "admin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1106,
                              "src": "4008:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1203,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "4015:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1204,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4015:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1199,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "3998:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1201,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 414,
                            "src": "3998:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3998:30:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1206,
                        "nodeType": "ExpressionStatement",
                        "src": "3998:30:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1210,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1102,
                              "src": "4048:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1211,
                              "name": "owner_in",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1180,
                              "src": "4055:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1207,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "4038:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 414,
                            "src": "4038:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4038:26:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1213,
                        "nodeType": "ExpressionStatement",
                        "src": "4038:26:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1217,
                              "name": "shareholders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1104,
                              "src": "4084:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1218,
                              "name": "owner_in",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1180,
                              "src": "4098:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1214,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "4074:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 414,
                            "src": "4074:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1219,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4074:33:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1220,
                        "nodeType": "ExpressionStatement",
                        "src": "4074:33:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1221,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "4118:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1223,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1222,
                              "name": "owner_in",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1180,
                              "src": "4128:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4118:19:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1224,
                            "name": "numShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1184,
                            "src": "4140:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4118:31:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1226,
                        "nodeType": "ExpressionStatement",
                        "src": "4118:31:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1227,
                            "name": "sharesOut",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1118,
                            "src": "4159:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1228,
                            "name": "numShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1184,
                            "src": "4171:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4159:21:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1230,
                        "nodeType": "ExpressionStatement",
                        "src": "4159:21:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 1231,
                            "name": "holders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1116,
                            "src": "4191:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 1232,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4201:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "4191:11:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1234,
                        "nodeType": "ExpressionStatement",
                        "src": "4191:11:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1236,
                              "name": "owner_in",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1180,
                              "src": "4224:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1237,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1182,
                              "src": "4234:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 1235,
                            "name": "addVerified",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1317,
                            "src": "4212:11:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes32_$returns$__$",
                              "typeString": "function (address,bytes32)"
                            }
                          },
                          "id": 1238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4212:27:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1239,
                        "nodeType": "ExpressionStatement",
                        "src": "4212:27:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 1241,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1189,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1180,
                        "mutability": "mutable",
                        "name": "owner_in",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3792:16:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1179,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3792:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1182,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3818:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1181,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "3818:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1184,
                        "mutability": "mutable",
                        "name": "numShares",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3840:17:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1183,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3840:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1186,
                        "mutability": "mutable",
                        "name": "name_in",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3867:21:9",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 1185,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "3867:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1188,
                        "mutability": "mutable",
                        "name": "symbol_in",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1241,
                        "src": "3898:23:9",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 1187,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "3898:6:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "3782:145:9"
                  },
                  "returnParameters": {
                    "id": 1190,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "3935:0:9"
                  },
                  "scope": 1769,
                  "src": "3771:475:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1254,
                    "nodeType": "Block",
                    "src": "4288:135:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1246,
                                  "name": "admin",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1106,
                                  "src": "4329:5:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Role_$388_storage",
                                    "typeString": "struct Roles.Role storage ref"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 1247,
                                    "name": "_msgSender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 74,
                                    "src": "4336:10:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                      "typeString": "function () view returns (address payable)"
                                    }
                                  },
                                  "id": 1248,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4336:12:9",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_struct$_Role_$388_storage",
                                    "typeString": "struct Roles.Role storage ref"
                                  },
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1244,
                                  "name": "Roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 466,
                                  "src": "4319:5:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                    "typeString": "type(library Roles)"
                                  }
                                },
                                "id": 1245,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "has",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 465,
                                "src": "4319:9:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                                }
                              },
                              "id": 1249,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4319:30:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "55736572206d7573742062652061646d696e206f6620636f6e7472616374",
                              "id": 1250,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4363:32:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ca1ca25e484623e0090654c2b525c7033916883be008219cb241ef1af7502e19",
                                "typeString": "literal_string \"User must be admin of contract\""
                              },
                              "value": "User must be admin of contract"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ca1ca25e484623e0090654c2b525c7033916883be008219cb241ef1af7502e19",
                                "typeString": "literal_string \"User must be admin of contract\""
                              }
                            ],
                            "id": 1243,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "4298:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4298:107:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1252,
                        "nodeType": "ExpressionStatement",
                        "src": "4298:107:9"
                      },
                      {
                        "id": 1253,
                        "nodeType": "PlaceholderStatement",
                        "src": "4415:1:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 1255,
                  "name": "isAdmin",
                  "nodeType": "ModifierDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1242,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "4285:2:9"
                  },
                  "src": "4269:154:9",
                  "virtual": false,
                  "visibility": "internal"
                },
                {
                  "body": {
                    "id": 1278,
                    "nodeType": "Block",
                    "src": "4471:216:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 1263,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 1260,
                                "name": "userAddr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1257,
                                "src": "4502:8:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 1261,
                                  "name": "_msgSender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 74,
                                  "src": "4514:10:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                    "typeString": "function () view returns (address payable)"
                                  }
                                },
                                "id": 1262,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4514:12:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "src": "4502:24:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "43616e6e6f74207669657720646966666572656e7420706572736f6e277320736861726573",
                              "id": 1264,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4540:39:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_eda2bfef6c9e97705aa1cf25b4d9d1a45dacece59bb8b70c08208aeaa5a05f4e",
                                "typeString": "literal_string \"Cannot view different person's shares\""
                              },
                              "value": "Cannot view different person's shares"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_eda2bfef6c9e97705aa1cf25b4d9d1a45dacece59bb8b70c08208aeaa5a05f4e",
                                "typeString": "literal_string \"Cannot view different person's shares\""
                              }
                            ],
                            "id": 1259,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "4481:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1265,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4481:108:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1266,
                        "nodeType": "ExpressionStatement",
                        "src": "4481:108:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1270,
                                  "name": "shareholders",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1104,
                                  "src": "4617:12:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Role_$388_storage",
                                    "typeString": "struct Roles.Role storage ref"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 1271,
                                    "name": "_msgSender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 74,
                                    "src": "4631:10:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                      "typeString": "function () view returns (address payable)"
                                    }
                                  },
                                  "id": 1272,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4631:12:9",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_struct$_Role_$388_storage",
                                    "typeString": "struct Roles.Role storage ref"
                                  },
                                  {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1268,
                                  "name": "Roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 466,
                                  "src": "4607:5:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                    "typeString": "type(library Roles)"
                                  }
                                },
                                "id": 1269,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "has",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 465,
                                "src": "4607:9:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                                }
                              },
                              "id": 1273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4607:37:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "55736572206d757374206f776e20736861726573",
                              "id": 1274,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4646:22:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ce49767f90dd8d0cdcc270b31e896c5cf12c2189a7644f4069dda98d05c65bfe",
                                "typeString": "literal_string \"User must own shares\""
                              },
                              "value": "User must own shares"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ce49767f90dd8d0cdcc270b31e896c5cf12c2189a7644f4069dda98d05c65bfe",
                                "typeString": "literal_string \"User must own shares\""
                              }
                            ],
                            "id": 1267,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "4599:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4599:70:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1276,
                        "nodeType": "ExpressionStatement",
                        "src": "4599:70:9"
                      },
                      {
                        "id": 1277,
                        "nodeType": "PlaceholderStatement",
                        "src": "4679:1:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 1279,
                  "name": "personalShares",
                  "nodeType": "ModifierDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1258,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1257,
                        "mutability": "mutable",
                        "name": "userAddr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1279,
                        "src": "4453:16:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1256,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4453:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "4452:18:9"
                  },
                  "src": "4429:258:9",
                  "virtual": false,
                  "visibility": "internal"
                },
                {
                  "body": {
                    "id": 1316,
                    "nodeType": "Block",
                    "src": "5276:182:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 1299,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "id": 1295,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 1290,
                                  "name": "addr",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1282,
                                  "src": "5294:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "!=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "30",
                                      "id": 1293,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5310:1:9",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      },
                                      "value": "0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      }
                                    ],
                                    "id": 1292,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5302:7:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 1291,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5302:7:9",
                                      "typeDescriptions": {
                                        "typeIdentifier": null,
                                        "typeString": null
                                      }
                                    }
                                  },
                                  "id": 1294,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5302:10:9",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "src": "5294:18:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                "id": 1298,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 1296,
                                  "name": "hash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1284,
                                  "src": "5316:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "!=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1297,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5324:1:9",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "src": "5316:9:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "5294:31:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "496e70757473206d757374206265206e6f6e7a65726f",
                              "id": 1300,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5327:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ed0c08ad2ef5f86a5a5bed89282b9c67c7db6eb792f48ef2b225432781bb3cd7",
                                "typeString": "literal_string \"Inputs must be nonzero\""
                              },
                              "value": "Inputs must be nonzero"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ed0c08ad2ef5f86a5a5bed89282b9c67c7db6eb792f48ef2b225432781bb3cd7",
                                "typeString": "literal_string \"Inputs must be nonzero\""
                              }
                            ],
                            "id": 1289,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "5286:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5286:66:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1302,
                        "nodeType": "ExpressionStatement",
                        "src": "5286:66:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1303,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "5363:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1305,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1304,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1282,
                              "src": "5378:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "5363:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1306,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1284,
                            "src": "5386:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "5363:27:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 1308,
                        "nodeType": "ExpressionStatement",
                        "src": "5363:27:9"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1310,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1282,
                              "src": "5426:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1311,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1284,
                              "src": "5432:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1312,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "5438:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1313,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5438:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 1309,
                            "name": "VerifiedAddressAdded",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1151,
                            "src": "5405:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes32_$_t_address_$returns$__$",
                              "typeString": "function (address,bytes32,address)"
                            }
                          },
                          "id": 1314,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5405:46:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1315,
                        "nodeType": "EmitStatement",
                        "src": "5400:51:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1280,
                    "nodeType": "StructuredDocumentation",
                    "src": "4693:514:9",
                    "text": " Add a verified address, along with an associated verification hash to the contract.\n Upon successful addition of a verified address, the contract must emit\n `VerifiedAddressAdded(addr, hash, msg.sender)`.\n It MUST throw if the supplied address or hash are zero, or if the address has already been supplied.\n @param addr The address of the person represented by the supplied hash.\n @param hash A cryptographic hash of the address holder's verified information."
                  },
                  "functionSelector": "47089f62",
                  "id": 1317,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 1287,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1286,
                        "name": "isAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1255,
                        "src": "5268:7:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "5268:7:9"
                    }
                  ],
                  "name": "addVerified",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1285,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1282,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1317,
                        "src": "5233:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1281,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5233:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1284,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1317,
                        "src": "5247:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1283,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "5247:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5232:28:9"
                  },
                  "returnParameters": {
                    "id": 1288,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "5276:0:9"
                  },
                  "scope": 1769,
                  "src": "5212:246:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1342,
                    "nodeType": "Block",
                    "src": "5942:141:9",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 1328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "5956:17:9",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1326,
                                "name": "addr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1320,
                                "src": "5968:4:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 1325,
                              "name": "isVerified",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1629,
                              "src": "5957:10:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address) view returns (bool)"
                              }
                            },
                            "id": 1327,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5957:16:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1330,
                        "nodeType": "IfStatement",
                        "src": "5952:30:9",
                        "trueBody": {
                          "expression": null,
                          "functionReturnParameters": 1324,
                          "id": 1329,
                          "nodeType": "Return",
                          "src": "5975:7:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1334,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "5992:27:9",
                          "subExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1331,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "5999:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1333,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1332,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1320,
                              "src": "6014:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "5999:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1335,
                        "nodeType": "ExpressionStatement",
                        "src": "5992:27:9"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1337,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1320,
                              "src": "6057:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1338,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "6063:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1339,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6063:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 1336,
                            "name": "VerifiedAddressRemoved",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1158,
                            "src": "6034:22:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (address,address)"
                            }
                          },
                          "id": 1340,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6034:42:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1341,
                        "nodeType": "EmitStatement",
                        "src": "6029:47:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1318,
                    "nodeType": "StructuredDocumentation",
                    "src": "5464:420:9",
                    "text": " Remove a verified address, and the associated verification hash. If the address is\n unknown to the contract then this does nothing. If the address is successfully removed, this\n function must emit `VerifiedAddressRemoved(addr, msg.sender)`.\n It MUST throw if an attempt is made to remove a verifiedAddress that owns Tokens.\n @param addr The verified address to be removed."
                  },
                  "functionSelector": "4487b392",
                  "id": 1343,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 1323,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1322,
                        "name": "isAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1255,
                        "src": "5934:7:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "5934:7:9"
                    }
                  ],
                  "name": "removeVerified",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1321,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1320,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1343,
                        "src": "5913:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1319,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5913:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5912:14:9"
                  },
                  "returnParameters": {
                    "id": 1324,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "5942:0:9"
                  },
                  "scope": 1769,
                  "src": "5889:194:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1387,
                    "nodeType": "Block",
                    "src": "6774:312:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 1360,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 1355,
                                    "name": "addr",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1346,
                                    "src": "6803:4:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 1354,
                                  "name": "isVerified",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1629,
                                  "src": "6792:10:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                    "typeString": "function (address) view returns (bool)"
                                  }
                                },
                                "id": 1356,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6792:16:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                "id": 1359,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 1357,
                                  "name": "hash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1348,
                                  "src": "6812:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "!=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1358,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6820:1:9",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "src": "6812:9:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "6792:29:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "496e70757473206d757374206265206e6f6e7a65726f",
                              "id": 1361,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6823:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ed0c08ad2ef5f86a5a5bed89282b9c67c7db6eb792f48ef2b225432781bb3cd7",
                                "typeString": "literal_string \"Inputs must be nonzero\""
                              },
                              "value": "Inputs must be nonzero"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ed0c08ad2ef5f86a5a5bed89282b9c67c7db6eb792f48ef2b225432781bb3cd7",
                                "typeString": "literal_string \"Inputs must be nonzero\""
                              }
                            ],
                            "id": 1353,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "6784:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6784:64:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1363,
                        "nodeType": "ExpressionStatement",
                        "src": "6784:64:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 1368,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1364,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "6862:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1366,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1365,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1346,
                              "src": "6877:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6862:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1367,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1348,
                            "src": "6886:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "6862:28:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1370,
                        "nodeType": "IfStatement",
                        "src": "6858:41:9",
                        "trueBody": {
                          "expression": null,
                          "functionReturnParameters": 1352,
                          "id": 1369,
                          "nodeType": "Return",
                          "src": "6892:7:9"
                        }
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1372,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1346,
                              "src": "6950:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 1373,
                                "name": "verifiedHashes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1110,
                                "src": "6968:14:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                  "typeString": "mapping(address => bytes32)"
                                }
                              },
                              "id": 1375,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 1374,
                                "name": "addr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1346,
                                "src": "6983:4:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "6968:20:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1376,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1348,
                              "src": "7002:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1377,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "7020:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1378,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7020:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 1371,
                            "name": "VerifiedAddressUpdated",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1169,
                            "src": "6914:22:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$_t_address_$returns$__$",
                              "typeString": "function (address,bytes32,bytes32,address)"
                            }
                          },
                          "id": 1379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6914:128:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1380,
                        "nodeType": "EmitStatement",
                        "src": "6909:133:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1385,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1381,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "7052:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1383,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1382,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1346,
                              "src": "7067:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "7052:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1384,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1348,
                            "src": "7075:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "7052:27:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 1386,
                        "nodeType": "ExpressionStatement",
                        "src": "7052:27:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1344,
                    "nodeType": "StructuredDocumentation",
                    "src": "6089:613:9",
                    "text": " Update the hash for a verified address known to the contract.\n Upon successful update of a verified address the contract must emit\n `VerifiedAddressUpdated(addr, oldHash, hash, msg.sender)`.\n If the hash is the same as the value already stored then\n no `VerifiedAddressUpdated` event is to be emitted.\n It MUST throw if the hash is zero, or if the address is unverified.\n @param addr The verified address of the person represented by the supplied hash.\n @param hash A new cryptographic hash of the address holder's updated verified information."
                  },
                  "functionSelector": "354b7b1d",
                  "id": 1388,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 1351,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1350,
                        "name": "isAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1255,
                        "src": "6766:7:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "6766:7:9"
                    }
                  ],
                  "name": "updateVerified",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1349,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1346,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1388,
                        "src": "6731:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1345,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6731:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1348,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1388,
                        "src": "6745:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1347,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "6745:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "6730:28:9"
                  },
                  "returnParameters": {
                    "id": 1352,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "6774:0:9"
                  },
                  "scope": 1769,
                  "src": "6707:379:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1455,
                    "nodeType": "Block",
                    "src": "7803:552:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1400,
                                  "name": "original",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1391,
                                  "src": "7830:8:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1399,
                                "name": "isHolder",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1644,
                                "src": "7821:8:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1401,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7821:18:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "4f726967696e616c2061646472657373206e6f74207368617265686f6c646572",
                              "id": 1402,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7841:34:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_fd9976e2a07684304d4f388aa2b09754db7cac0d1276492fe6c46e42d6f5a15f",
                                "typeString": "literal_string \"Original address not shareholder\""
                              },
                              "value": "Original address not shareholder"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_fd9976e2a07684304d4f388aa2b09754db7cac0d1276492fe6c46e42d6f5a15f",
                                "typeString": "literal_string \"Original address not shareholder\""
                              }
                            ],
                            "id": 1398,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "7813:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1403,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7813:63:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1404,
                        "nodeType": "ExpressionStatement",
                        "src": "7813:63:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1407,
                                  "name": "replacement",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1393,
                                  "src": "7905:11:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1406,
                                "name": "isVerified",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1629,
                                "src": "7894:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1408,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7894:23:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "5265706c6163656d656e742061646472657373206973206e6f74207665726966696564",
                              "id": 1409,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7919:37:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d49882fab10c00aeba16f9c033bf3b3f9e205ad981dd2f9ed4df961d5895c021",
                                "typeString": "literal_string \"Replacement address is not verified\""
                              },
                              "value": "Replacement address is not verified"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_d49882fab10c00aeba16f9c033bf3b3f9e205ad981dd2f9ed4df961d5895c021",
                                "typeString": "literal_string \"Replacement address is not verified\""
                              }
                            ],
                            "id": 1405,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "7886:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1410,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7886:71:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1411,
                        "nodeType": "ExpressionStatement",
                        "src": "7886:71:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1416,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "!",
                              "prefix": true,
                              "src": "7988:22:9",
                              "subExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 1414,
                                    "name": "replacement",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1393,
                                    "src": "7998:11:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 1413,
                                  "name": "isHolder",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1644,
                                  "src": "7989:8:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                    "typeString": "function (address) view returns (bool)"
                                  }
                                },
                                "id": 1415,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7989:21:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "5265706c6163656d656e742061646472657373206973206e6f7420616c6c6f77656420746f20686f6c6420616e7920746f6b656e73",
                              "id": 1417,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8024:55:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_40a904b3dbd22e18465474aa37aebf4da1a7d81fef47ce701b64973cda788928",
                                "typeString": "literal_string \"Replacement address is not allowed to hold any tokens\""
                              },
                              "value": "Replacement address is not allowed to hold any tokens"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_40a904b3dbd22e18465474aa37aebf4da1a7d81fef47ce701b64973cda788928",
                                "typeString": "literal_string \"Replacement address is not allowed to hold any tokens\""
                              }
                            ],
                            "id": 1412,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "7967:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1418,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7967:122:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1419,
                        "nodeType": "ExpressionStatement",
                        "src": "7967:122:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1423,
                              "name": "shareholders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1104,
                              "src": "8113:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1424,
                              "name": "original",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1391,
                              "src": "8127:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1420,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "8100:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "remove",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 439,
                            "src": "8100:12:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1425,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8100:36:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1426,
                        "nodeType": "ExpressionStatement",
                        "src": "8100:36:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1430,
                              "name": "shareholders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1104,
                              "src": "8156:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1431,
                              "name": "replacement",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1393,
                              "src": "8170:11:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1427,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "8146:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1429,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 414,
                            "src": "8146:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                              "typeString": "function (struct Roles.Role storage pointer,address)"
                            }
                          },
                          "id": 1432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8146:36:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1433,
                        "nodeType": "ExpressionStatement",
                        "src": "8146:36:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1440,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1434,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "8193:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1436,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1435,
                              "name": "replacement",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1393,
                              "src": "8203:11:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "8193:22:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1437,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "8218:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1439,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1438,
                              "name": "original",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1391,
                              "src": "8228:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8218:19:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8193:44:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1441,
                        "nodeType": "ExpressionStatement",
                        "src": "8193:44:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1442,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "8247:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1444,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1443,
                              "name": "original",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1391,
                              "src": "8257:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "8247:19:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1445,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8269:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "8247:23:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1447,
                        "nodeType": "ExpressionStatement",
                        "src": "8247:23:9"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1449,
                              "name": "original",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1391,
                              "src": "8312:8:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1450,
                              "name": "replacement",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1393,
                              "src": "8322:11:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1451,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "8335:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1452,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8335:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 1448,
                            "name": "VerifiedAddressSuperseded",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1178,
                            "src": "8286:25:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (address,address,address)"
                            }
                          },
                          "id": 1453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8286:62:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1454,
                        "nodeType": "EmitStatement",
                        "src": "8281:67:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1389,
                    "nodeType": "StructuredDocumentation",
                    "src": "7092:606:9",
                    "text": " Cancel the original address and reissue the Tokens to the replacement address.\n Access to this function MUST be strictly controlled.\n The `original` address MUST be removed from the set of verified addresses.\n Throw if the `original` address supplied is not a shareholder.\n Throw if the `replacement` address is not a verified address.\n Throw if the `replacement` address already holds Tokens.\n This function MUST emit the `VerifiedAddressSuperseded` event.\n @param original The address to be superseded. This address MUST NOT be reused."
                  },
                  "functionSelector": "79f64720",
                  "id": 1456,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 1396,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1395,
                        "name": "isAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1255,
                        "src": "7791:7:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "7791:7:9"
                    }
                  ],
                  "name": "cancelAndReissue",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1394,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1391,
                        "mutability": "mutable",
                        "name": "original",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1456,
                        "src": "7729:16:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1390,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "7729:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1393,
                        "mutability": "mutable",
                        "name": "replacement",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1456,
                        "src": "7747:19:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1392,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "7747:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "7728:39:9"
                  },
                  "returnParameters": {
                    "id": 1397,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "7803:0:9"
                  },
                  "scope": 1769,
                  "src": "7703:652:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "baseFunctions": [
                    113
                  ],
                  "body": {
                    "id": 1529,
                    "nodeType": "Block",
                    "src": "8835:460:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1469,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1459,
                                  "src": "8864:2:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1468,
                                "name": "isVerified",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1629,
                                "src": "8853:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1470,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8853:14:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "546f2061646472657373206973206e6f74207665726966696564",
                              "id": 1471,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8869:28:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3ba228b6838c4a52b6635eaaa1acb709d39745d2604c48cae2f51734135ddcb",
                                "typeString": "literal_string \"To address is not verified\""
                              },
                              "value": "To address is not verified"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_b3ba228b6838c4a52b6635eaaa1acb709d39745d2604c48cae2f51734135ddcb",
                                "typeString": "literal_string \"To address is not verified\""
                              }
                            ],
                            "id": 1467,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "8845:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8845:53:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1473,
                        "nodeType": "ExpressionStatement",
                        "src": "8845:53:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1480,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 1475,
                                  "name": "holderAmt",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1114,
                                  "src": "8929:9:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 1478,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 1476,
                                    "name": "_msgSender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 74,
                                    "src": "8939:10:9",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                      "typeString": "function () view returns (address payable)"
                                    }
                                  },
                                  "id": 1477,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8939:12:9",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "8929:23:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 1479,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1461,
                                "src": "8956:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "8929:32:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "53656e64657220646f6573206e6f74206861766520656e6f75676820746f6b656e7320746f207472616e73666572",
                              "id": 1481,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8975:48:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_14f9740936d31b05f98d280ecd5f9fc4ed144cf478a630c298bdc59cc7eb9c9b",
                                "typeString": "literal_string \"Sender does not have enough tokens to transfer\""
                              },
                              "value": "Sender does not have enough tokens to transfer"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_14f9740936d31b05f98d280ecd5f9fc4ed144cf478a630c298bdc59cc7eb9c9b",
                                "typeString": "literal_string \"Sender does not have enough tokens to transfer\""
                              }
                            ],
                            "id": 1474,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "8908:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1482,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8908:125:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1483,
                        "nodeType": "ExpressionStatement",
                        "src": "8908:125:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 1489,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "9048:28:9",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1486,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "9059:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1487,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1459,
                                "src": "9073:2:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1484,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "9049:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1485,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "has",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 465,
                              "src": "9049:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                                "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                              }
                            },
                            "id": 1488,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9049:27:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1497,
                        "nodeType": "IfStatement",
                        "src": "9044:61:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1493,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "9088:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1494,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1459,
                                "src": "9102:2:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1490,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "9078:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1492,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 414,
                              "src": "9078:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                                "typeString": "function (struct Roles.Role storage pointer,address)"
                              }
                            },
                            "id": 1495,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9078:27:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 1496,
                          "nodeType": "ExpressionStatement",
                          "src": "9078:27:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1503,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1498,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "9116:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1501,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1499,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "9126:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1500,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9126:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "9116:23:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1502,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1461,
                            "src": "9143:5:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9116:32:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1504,
                        "nodeType": "ExpressionStatement",
                        "src": "9116:32:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1505,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "9158:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1507,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1506,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1459,
                              "src": "9168:2:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "9158:13:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1508,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1461,
                            "src": "9175:5:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9158:22:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1510,
                        "nodeType": "ExpressionStatement",
                        "src": "9158:22:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1511,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "9195:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1514,
                            "indexExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1512,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 74,
                                "src": "9205:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                  "typeString": "function () view returns (address payable)"
                                }
                              },
                              "id": 1513,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9205:12:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9195:23:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9221:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "9195:27:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1523,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "9261:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 1524,
                                  "name": "_msgSender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 74,
                                  "src": "9275:10:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                    "typeString": "function () view returns (address payable)"
                                  }
                                },
                                "id": 1525,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9275:12:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1520,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "9248:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1522,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "remove",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 439,
                              "src": "9248:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                                "typeString": "function (struct Roles.Role storage pointer,address)"
                              }
                            },
                            "id": 1526,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9248:40:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 1527,
                          "nodeType": "ExpressionStatement",
                          "src": "9248:40:9"
                        },
                        "id": 1528,
                        "nodeType": "IfStatement",
                        "src": "9191:97:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 1518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "9224:9:9",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 1517,
                              "name": "holders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1116,
                              "src": "9224:7:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1519,
                          "nodeType": "ExpressionStatement",
                          "src": "9224:9:9"
                        }
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1457,
                    "nodeType": "StructuredDocumentation",
                    "src": "8361:365:9",
                    "text": " The `transfer` function MUST NOT allow transfers to addresses that\n have not been verified and added to the contract.\n If the `to` address is not currently a shareholder then it MUST become one.\n If the transfer will reduce `msg.sender`'s balance to 0 then that address\n MUST be removed from the list of shareholders."
                  },
                  "functionSelector": "a9059cbb",
                  "id": 1530,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transfer",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1463,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "8799:8:9"
                  },
                  "parameters": {
                    "id": 1462,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1459,
                        "mutability": "mutable",
                        "name": "to",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1530,
                        "src": "8749:10:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1458,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "8749:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1461,
                        "mutability": "mutable",
                        "name": "value",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1530,
                        "src": "8761:13:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1460,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8761:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "8748:27:9"
                  },
                  "returnParameters": {
                    "id": 1466,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1465,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1530,
                        "src": "8825:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1464,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "8825:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "8824:6:9"
                  },
                  "scope": 1769,
                  "src": "8731:564:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "baseFunctions": [
                    145
                  ],
                  "body": {
                    "id": 1609,
                    "nodeType": "Block",
                    "src": "9793:503:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1545,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1535,
                                  "src": "9822:2:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1544,
                                "name": "isVerified",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1629,
                                "src": "9811:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1546,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9811:14:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "546f2061646472657373206973206e6f74207665726966696564",
                              "id": 1547,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9827:28:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3ba228b6838c4a52b6635eaaa1acb709d39745d2604c48cae2f51734135ddcb",
                                "typeString": "literal_string \"To address is not verified\""
                              },
                              "value": "To address is not verified"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_b3ba228b6838c4a52b6635eaaa1acb709d39745d2604c48cae2f51734135ddcb",
                                "typeString": "literal_string \"To address is not verified\""
                              }
                            ],
                            "id": 1543,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "9803:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1548,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9803:53:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1549,
                        "nodeType": "ExpressionStatement",
                        "src": "9803:53:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1552,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1533,
                                  "src": "9885:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 1551,
                                "name": "isVerified",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1629,
                                "src": "9874:10:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) view returns (bool)"
                                }
                              },
                              "id": 1553,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9874:16:9",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "46726f6d2061646472657373206973206e6f74207665726966696564",
                              "id": 1554,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9892:30:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_01ebc0b921cba0fc2959786e234b103cae89aa016cec20dc8ac5b73729d615fb",
                                "typeString": "literal_string \"From address is not verified\""
                              },
                              "value": "From address is not verified"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_01ebc0b921cba0fc2959786e234b103cae89aa016cec20dc8ac5b73729d615fb",
                                "typeString": "literal_string \"From address is not verified\""
                              }
                            ],
                            "id": 1550,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "9866:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1555,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9866:57:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1556,
                        "nodeType": "ExpressionStatement",
                        "src": "9866:57:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1562,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 1558,
                                  "name": "holderAmt",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1114,
                                  "src": "9954:9:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 1560,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 1559,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1533,
                                  "src": "9964:4:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9954:15:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 1561,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1537,
                                "src": "9973:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "9954:24:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "53656e64657220646f6573206e6f74206861766520656e6f75676820746f6b656e7320746f207472616e73666572",
                              "id": 1563,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9992:48:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_14f9740936d31b05f98d280ecd5f9fc4ed144cf478a630c298bdc59cc7eb9c9b",
                                "typeString": "literal_string \"Sender does not have enough tokens to transfer\""
                              },
                              "value": "Sender does not have enough tokens to transfer"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_14f9740936d31b05f98d280ecd5f9fc4ed144cf478a630c298bdc59cc7eb9c9b",
                                "typeString": "literal_string \"Sender does not have enough tokens to transfer\""
                              }
                            ],
                            "id": 1557,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "9933:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 1564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9933:117:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1565,
                        "nodeType": "ExpressionStatement",
                        "src": "9933:117:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 1571,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "10065:28:9",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1568,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "10076:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1569,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1535,
                                "src": "10090:2:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1566,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "10066:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1567,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "has",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 465,
                              "src": "10066:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                                "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                              }
                            },
                            "id": 1570,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10066:27:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1579,
                        "nodeType": "IfStatement",
                        "src": "10061:61:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1575,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "10105:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1576,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1535,
                                "src": "10119:2:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1572,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "10095:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1574,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 414,
                              "src": "10095:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                                "typeString": "function (struct Roles.Role storage pointer,address)"
                              }
                            },
                            "id": 1577,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10095:27:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 1578,
                          "nodeType": "ExpressionStatement",
                          "src": "10095:27:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1580,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "10133:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1582,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1581,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1533,
                              "src": "10143:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "10133:15:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1583,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1537,
                            "src": "10152:5:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10133:24:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1585,
                        "nodeType": "ExpressionStatement",
                        "src": "10133:24:9"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1590,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1586,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "10167:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1588,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1587,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1535,
                              "src": "10177:2:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "10167:13:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 1589,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1537,
                            "src": "10184:5:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10167:22:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1591,
                        "nodeType": "ExpressionStatement",
                        "src": "10167:22:9"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1596,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1592,
                              "name": "holderAmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1114,
                              "src": "10204:9:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1594,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1593,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1533,
                              "src": "10214:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "10204:15:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1595,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10222:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "10204:19:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1603,
                                "name": "shareholders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1104,
                                "src": "10262:12:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 1604,
                                  "name": "_msgSender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 74,
                                  "src": "10276:10:9",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                    "typeString": "function () view returns (address payable)"
                                  }
                                },
                                "id": 1605,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10276:12:9",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Role_$388_storage",
                                  "typeString": "struct Roles.Role storage ref"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 1600,
                                "name": "Roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 466,
                                "src": "10249:5:9",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                  "typeString": "type(library Roles)"
                                }
                              },
                              "id": 1602,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "remove",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 439,
                              "src": "10249:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$__$",
                                "typeString": "function (struct Roles.Role storage pointer,address)"
                              }
                            },
                            "id": 1606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10249:40:9",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 1607,
                          "nodeType": "ExpressionStatement",
                          "src": "10249:40:9"
                        },
                        "id": 1608,
                        "nodeType": "IfStatement",
                        "src": "10200:89:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 1598,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "10225:9:9",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 1597,
                              "name": "holders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1116,
                              "src": "10225:7:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1599,
                          "nodeType": "ExpressionStatement",
                          "src": "10225:9:9"
                        }
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1531,
                    "nodeType": "StructuredDocumentation",
                    "src": "9301:363:9",
                    "text": " The `transferFrom` function MUST NOT allow transfers to addresses that\n have not been verified and added to the contract.\n If the `to` address is not currently a shareholder then it MUST become one.\n If the transfer will reduce `from`'s balance to 0 then that address\n MUST be removed from the list of shareholders."
                  },
                  "functionSelector": "23b872dd",
                  "id": 1610,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transferFrom",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1539,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "9769:8:9"
                  },
                  "parameters": {
                    "id": 1538,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1533,
                        "mutability": "mutable",
                        "name": "from",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1610,
                        "src": "9700:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1532,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9700:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1535,
                        "mutability": "mutable",
                        "name": "to",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1610,
                        "src": "9722:10:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1534,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9722:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1537,
                        "mutability": "mutable",
                        "name": "value",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1610,
                        "src": "9742:13:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1536,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9742:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "9690:71:9"
                  },
                  "returnParameters": {
                    "id": 1542,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1541,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1610,
                        "src": "9787:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1540,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "9787:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "9786:6:9"
                  },
                  "scope": 1769,
                  "src": "9669:627:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1628,
                    "nodeType": "Block",
                    "src": "10548:82:9",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 1622,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1618,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "10562:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1620,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1619,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1613,
                              "src": "10577:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "10562:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1621,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10586:1:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "10562:25:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1625,
                        "nodeType": "IfStatement",
                        "src": "10558:42:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 1623,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10596:4:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "functionReturnParameters": 1617,
                          "id": 1624,
                          "nodeType": "Return",
                          "src": "10589:11:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 1626,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10618:5:9",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 1617,
                        "id": 1627,
                        "nodeType": "Return",
                        "src": "10611:12:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1611,
                    "nodeType": "StructuredDocumentation",
                    "src": "10302:180:9",
                    "text": " Tests that the supplied address is known to the contract.\n @param addr The address to test.\n @return true if the address is known to the contract."
                  },
                  "functionSelector": "b9209e33",
                  "id": 1629,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "isVerified",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1614,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1613,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1629,
                        "src": "10507:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1612,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10507:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "10506:14:9"
                  },
                  "returnParameters": {
                    "id": 1617,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1616,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1629,
                        "src": "10542:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1615,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "10542:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "10541:6:9"
                  },
                  "scope": 1769,
                  "src": "10487:143:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1643,
                    "nodeType": "Block",
                    "src": "10877:53:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1639,
                              "name": "shareholders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1104,
                              "src": "10904:12:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1640,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1632,
                              "src": "10918:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Role_$388_storage",
                                "typeString": "struct Roles.Role storage ref"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1637,
                              "name": "Roles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 466,
                              "src": "10894:5:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Roles_$466_$",
                                "typeString": "type(library Roles)"
                              }
                            },
                            "id": 1638,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "has",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 465,
                            "src": "10894:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$388_storage_ptr_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                            }
                          },
                          "id": 1641,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10894:29:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "functionReturnParameters": 1636,
                        "id": 1642,
                        "nodeType": "Return",
                        "src": "10887:36:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1630,
                    "nodeType": "StructuredDocumentation",
                    "src": "10636:177:9",
                    "text": " Checks to see if the supplied address is a share holder.\n @param addr The address to check.\n @return true if the supplied address owns a token."
                  },
                  "functionSelector": "d4d7b19a",
                  "id": 1644,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "isHolder",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1633,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1632,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1644,
                        "src": "10836:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1631,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10836:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "10835:14:9"
                  },
                  "returnParameters": {
                    "id": 1636,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1635,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1644,
                        "src": "10871:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1634,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "10871:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "10870:6:9"
                  },
                  "scope": 1769,
                  "src": "10818:112:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1664,
                    "nodeType": "Block",
                    "src": "11293:85:9",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 1658,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1654,
                              "name": "verifiedHashes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1110,
                              "src": "11307:14:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 1656,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1655,
                              "name": "addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1647,
                              "src": "11322:4:9",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "11307:20:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1657,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1649,
                            "src": "11331:4:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "11307:28:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 1661,
                        "nodeType": "IfStatement",
                        "src": "11303:45:9",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 1659,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11344:4:9",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "functionReturnParameters": 1653,
                          "id": 1660,
                          "nodeType": "Return",
                          "src": "11337:11:9"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 1662,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11366:5:9",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 1653,
                        "id": 1663,
                        "nodeType": "Return",
                        "src": "11359:12:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1645,
                    "nodeType": "StructuredDocumentation",
                    "src": "10936:280:9",
                    "text": " Checks that the supplied hash is associated with the given address.\n @param addr The address to test.\n @param hash The hash to test.\n @return true if the hash matches the one supplied with the address in `addVerified`, or `updateVerified`."
                  },
                  "functionSelector": "f3221c7f",
                  "id": 1665,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "hasHash",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1650,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1647,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1665,
                        "src": "11238:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1646,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11238:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1649,
                        "mutability": "mutable",
                        "name": "hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1665,
                        "src": "11252:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 1648,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "11252:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11237:28:9"
                  },
                  "returnParameters": {
                    "id": 1653,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1652,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1665,
                        "src": "11287:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1651,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "11287:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11286:6:9"
                  },
                  "scope": 1769,
                  "src": "11221:157:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1673,
                    "nodeType": "Block",
                    "src": "11568:31:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1671,
                          "name": "holders",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1116,
                          "src": "11585:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1670,
                        "id": 1672,
                        "nodeType": "Return",
                        "src": "11578:14:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1666,
                    "nodeType": "StructuredDocumentation",
                    "src": "11384:126:9",
                    "text": " The number of addresses that hold tokens.\n @return the number of unique addresses that hold tokens."
                  },
                  "functionSelector": "1aab9a9f",
                  "id": 1674,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "holderCount",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1667,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "11535:2:9"
                  },
                  "returnParameters": {
                    "id": 1670,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1669,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1674,
                        "src": "11559:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1668,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11559:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11558:9:9"
                  },
                  "scope": 1769,
                  "src": "11515:84:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "baseFunctions": [
                    103
                  ],
                  "body": {
                    "id": 1689,
                    "nodeType": "Block",
                    "src": "11750:42:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1685,
                            "name": "holderAmt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1114,
                            "src": "11767:9:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 1687,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1686,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1676,
                            "src": "11777:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "11767:18:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1684,
                        "id": 1688,
                        "nodeType": "Return",
                        "src": "11760:25:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "70a08231",
                  "id": 1690,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1680,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1676,
                          "src": "11711:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "id": 1681,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 1679,
                        "name": "personalShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1279,
                        "src": "11696:14:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$_t_address_$",
                          "typeString": "modifier (address)"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "11696:23:9"
                    }
                  ],
                  "name": "balanceOf",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1678,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "11666:8:9"
                  },
                  "parameters": {
                    "id": 1677,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1676,
                        "mutability": "mutable",
                        "name": "account",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1690,
                        "src": "11624:15:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1675,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11624:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11623:17:9"
                  },
                  "returnParameters": {
                    "id": 1684,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1683,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1690,
                        "src": "11737:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1682,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11737:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11736:9:9"
                  },
                  "scope": 1769,
                  "src": "11605:187:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "baseFunctions": [
                    95
                  ],
                  "body": {
                    "id": 1698,
                    "nodeType": "Block",
                    "src": "11862:33:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1696,
                          "name": "sharesOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1118,
                          "src": "11879:9:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1695,
                        "id": 1697,
                        "nodeType": "Return",
                        "src": "11872:16:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "18160ddd",
                  "id": 1699,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "totalSupply",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1692,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "11830:8:9"
                  },
                  "parameters": {
                    "id": 1691,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "11818:2:9"
                  },
                  "returnParameters": {
                    "id": 1695,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1694,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1699,
                        "src": "11853:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1693,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11853:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "11852:9:9"
                  },
                  "scope": 1769,
                  "src": "11798:97:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "body": {
                    "id": 1711,
                    "nodeType": "Block",
                    "src": "12302:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1708,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12319:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1707,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "12312:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1709,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12312:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1710,
                        "nodeType": "ExpressionStatement",
                        "src": "12312:32:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1700,
                    "nodeType": "StructuredDocumentation",
                    "src": "11901:333:9",
                    "text": " By counting the number of token holders using `holderCount`\n you can retrieve the complete list of token holders, one at a time.\n It MUST throw if `index >= holderCount()`.\n @param index The zero-based index of the holder.\n @return the address of the token holder with the given index."
                  },
                  "functionSelector": "197bc336",
                  "id": 1712,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "holderAt",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1703,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1702,
                        "mutability": "mutable",
                        "name": "index",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1712,
                        "src": "12257:13:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1701,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12257:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "12256:15:9"
                  },
                  "returnParameters": {
                    "id": 1706,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1705,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1712,
                        "src": "12293:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1704,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "12293:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "12292:9:9"
                  },
                  "scope": 1769,
                  "src": "12239:112:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1724,
                    "nodeType": "Block",
                    "src": "12620:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1721,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12637:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1720,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "12630:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12630:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1723,
                        "nodeType": "ExpressionStatement",
                        "src": "12630:32:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1713,
                    "nodeType": "StructuredDocumentation",
                    "src": "12357:195:9",
                    "text": " Checks to see if the supplied address was superseded.\n @param addr The address to check.\n @return true if the supplied address was superseded by another address."
                  },
                  "functionSelector": "2da7293e",
                  "id": 1725,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "isSuperseded",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1716,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1715,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1725,
                        "src": "12579:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1714,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "12579:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "12578:14:9"
                  },
                  "returnParameters": {
                    "id": 1719,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1718,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1725,
                        "src": "12614:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1717,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "12614:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "12613:6:9"
                  },
                  "scope": 1769,
                  "src": "12557:112:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 1737,
                    "nodeType": "Block",
                    "src": "13096:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1734,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13113:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1733,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "13106:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1735,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13106:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1736,
                        "nodeType": "ExpressionStatement",
                        "src": "13106:32:9"
                      }
                    ]
                  },
                  "documentation": {
                    "id": 1726,
                    "nodeType": "StructuredDocumentation",
                    "src": "12675:349:9",
                    "text": " Gets the most recent address, given a superseded one.\n Addresses may be superseded multiple times, so this function needs to\n follow the chain of addresses until it reaches the final, verified address.\n @param addr The superseded address.\n @return the verified address that ultimately holds the share."
                  },
                  "functionSelector": "cc397ed3",
                  "id": 1738,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "getCurrentFor",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 1729,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1728,
                        "mutability": "mutable",
                        "name": "addr",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1738,
                        "src": "13052:12:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1727,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13052:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13051:14:9"
                  },
                  "returnParameters": {
                    "id": 1732,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1731,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1738,
                        "src": "13087:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1730,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13087:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13086:9:9"
                  },
                  "scope": 1769,
                  "src": "13029:116:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "baseFunctions": [
                    123
                  ],
                  "body": {
                    "id": 1752,
                    "nodeType": "Block",
                    "src": "13332:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1749,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13349:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1748,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "13342:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13342:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1751,
                        "nodeType": "ExpressionStatement",
                        "src": "13342:32:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "dd62ed3e",
                  "id": 1753,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "allowance",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1744,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "13280:8:9"
                  },
                  "parameters": {
                    "id": 1743,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1740,
                        "mutability": "mutable",
                        "name": "owner_in",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1753,
                        "src": "13220:16:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1739,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13220:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1742,
                        "mutability": "mutable",
                        "name": "spender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1753,
                        "src": "13238:15:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1741,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13238:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13219:35:9"
                  },
                  "returnParameters": {
                    "id": 1747,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1746,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1753,
                        "src": "13319:7:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1745,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13319:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13318:9:9"
                  },
                  "scope": 1769,
                  "src": "13201:180:9",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "baseFunctions": [
                    133
                  ],
                  "body": {
                    "id": 1767,
                    "nodeType": "Block",
                    "src": "13498:49:9",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "46756e6374696f6e206e6f7420737570706f72746564",
                              "id": 1764,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13515:24:9",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              },
                              "value": "Function not supported"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_dd9978cf5d0832003ab5c4acffccb4de9725f4122a0f3252d5ea3a092a0e63f7",
                                "typeString": "literal_string \"Function not supported\""
                              }
                            ],
                            "id": 1763,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "13508:6:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 1765,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13508:32:9",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1766,
                        "nodeType": "ExpressionStatement",
                        "src": "13508:32:9"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "095ea7b3",
                  "id": 1768,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "approve",
                  "nodeType": "FunctionDefinition",
                  "overrides": {
                    "id": 1759,
                    "nodeType": "OverrideSpecifier",
                    "overrides": [],
                    "src": "13462:8:9"
                  },
                  "parameters": {
                    "id": 1758,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1755,
                        "mutability": "mutable",
                        "name": "spender",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1768,
                        "src": "13404:15:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 1754,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13404:7:9",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 1757,
                        "mutability": "mutable",
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1768,
                        "src": "13421:14:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1756,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13421:7:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13403:33:9"
                  },
                  "returnParameters": {
                    "id": 1762,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 1761,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1768,
                        "src": "13488:4:9",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 1760,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "13488:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "13487:6:9"
                  },
                  "scope": 1769,
                  "src": "13387:160:9",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
                }
              ],
              "scope": 1770,
              "src": "1093:12456:9"
            }
          ],
          "src": "0:13550:9"
        },
        "compiler": {
          "name": "solc",
          "version": "0.6.8+commit.0bbfe453.Emscripten.clang"
        },
        "networks": {},
        "schemaVersion": "3.1.0",
        "updatedAt": "2020-06-02T00:55:09.568Z",
        "devdoc": {
          "details": "Ref https://github.com/ethereum/EIPs/pull/884",
          "methods": {
            "addVerified(address,bytes32)": {
              "params": {
                "addr": "The address of the person represented by the supplied hash.",
                "hash": "A cryptographic hash of the address holder's verified information."
              }
            },
            "cancelAndReissue(address,address)": {
              "params": {
                "original": "The address to be superseded. This address MUST NOT be reused."
              }
            },
            "getCurrentFor(address)": {
              "params": {
                "addr": "The superseded address."
              },
              "returns": {
                "_0": "the verified address that ultimately holds the share."
              }
            },
            "hasHash(address,bytes32)": {
              "params": {
                "addr": "The address to test.",
                "hash": "The hash to test."
              },
              "returns": {
                "_0": "true if the hash matches the one supplied with the address in `addVerified`, or `updateVerified`."
              }
            },
            "holderAt(uint256)": {
              "params": {
                "index": "The zero-based index of the holder."
              },
              "returns": {
                "_0": "the address of the token holder with the given index."
              }
            },
            "holderCount()": {
              "returns": {
                "_0": "the number of unique addresses that hold tokens."
              }
            },
            "isHolder(address)": {
              "params": {
                "addr": "The address to check."
              },
              "returns": {
                "_0": "true if the supplied address owns a token."
              }
            },
            "isSuperseded(address)": {
              "params": {
                "addr": "The address to check."
              },
              "returns": {
                "_0": "true if the supplied address was superseded by another address."
              }
            },
            "isVerified(address)": {
              "params": {
                "addr": "The address to test."
              },
              "returns": {
                "_0": "true if the address is known to the contract."
              }
            },
            "removeVerified(address)": {
              "params": {
                "addr": "The verified address to be removed."
              }
            },
            "updateVerified(address,bytes32)": {
              "params": {
                "addr": "The verified address of the person represented by the supplied hash.",
                "hash": "A new cryptographic hash of the address holder's updated verified information."
              }
            }
          }
        },
        "userdoc": {
          "methods": {
            "addVerified(address,bytes32)": {
              "notice": "Add a verified address, along with an associated verification hash to the contract. Upon successful addition of a verified address, the contract must emit `VerifiedAddressAdded(addr, hash, msg.sender)`. It MUST throw if the supplied address or hash are zero, or if the address has already been supplied."
            },
            "cancelAndReissue(address,address)": {
              "notice": "Cancel the original address and reissue the Tokens to the replacement address. Access to this function MUST be strictly controlled. The `original` address MUST be removed from the set of verified addresses. Throw if the `original` address supplied is not a shareholder. Throw if the `replacement` address is not a verified address. Throw if the `replacement` address already holds Tokens. This function MUST emit the `VerifiedAddressSuperseded` event."
            },
            "getCurrentFor(address)": {
              "notice": "Gets the most recent address, given a superseded one. Addresses may be superseded multiple times, so this function needs to follow the chain of addresses until it reaches the final, verified address."
            },
            "hasHash(address,bytes32)": {
              "notice": "Checks that the supplied hash is associated with the given address."
            },
            "holderAt(uint256)": {
              "notice": "By counting the number of token holders using `holderCount` you can retrieve the complete list of token holders, one at a time. It MUST throw if `index >= holderCount()`."
            },
            "holderCount()": {
              "notice": "The number of addresses that hold tokens."
            },
            "isHolder(address)": {
              "notice": "Checks to see if the supplied address is a share holder."
            },
            "isSuperseded(address)": {
              "notice": "Checks to see if the supplied address was superseded."
            },
            "isVerified(address)": {
              "notice": "Tests that the supplied address is known to the contract."
            },
            "removeVerified(address)": {
              "notice": "Remove a verified address, and the associated verification hash. If the address is unknown to the contract then this does nothing. If the address is successfully removed, this function must emit `VerifiedAddressRemoved(addr, msg.sender)`. It MUST throw if an attempt is made to remove a verifiedAddress that owns Tokens."
            },
            "transfer(address,uint256)": {
              "notice": "The `transfer` function MUST NOT allow transfers to addresses that have not been verified and added to the contract. If the `to` address is not currently a shareholder then it MUST become one. If the transfer will reduce `msg.sender`'s balance to 0 then that address MUST be removed from the list of shareholders."
            },
            "transferFrom(address,address,uint256)": {
              "notice": "The `transferFrom` function MUST NOT allow transfers to addresses that have not been verified and added to the contract. If the `to` address is not currently a shareholder then it MUST become one. If the transfer will reduce `from`'s balance to 0 then that address MUST be removed from the list of shareholders."
            },
            "updateVerified(address,bytes32)": {
              "notice": "Update the hash for a verified address known to the contract. Upon successful update of a verified address the contract must emit `VerifiedAddressUpdated(addr, oldHash, hash, msg.sender)`. If the hash is the same as the value already stored then no `VerifiedAddressUpdated` event is to be emitted. It MUST throw if the hash is zero, or if the address is unverified."
            }
          },
          "notice": "An `ERC20` compatible token that conforms to Delaware State Senate, 149th General Assembly, Senate Bill No. 69: An act to Amend Title 8 of the Delaware Code Relating to the General Corporation Law. *  Implementation Details. *  An implementation of this token standard SHOULD provide the following: *  `name` - for use by wallets and exchanges. `symbol` - for use by wallets and exchanges. *  The implementation MUST take care not to allow unauthorised access to share transfer functions. *  In addition to the above the following optional `ERC20` function MUST be defined. *  `decimals` — MUST return `0` as each token represents a single Share and Shares are non-divisible."
        }
      }
 ]

 module.exports = SecureTokenABI;