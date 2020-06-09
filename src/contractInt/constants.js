import Web3 from "web3";
import { meldCoinAbi } from '../assets/meldCoinAbi';
import { secureTokenAbi } from "../assets/secureTokenAbi";
import axios from 'axios';

export let web3;

export const ethEnabled = () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    } else {
        alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
    }
}
ethEnabled();

export let contractInit = async () => {
    const url = '/Meld/Address';
    
    let res = await axios.get(url);
    
    console.log(res.data);
    
    meldCoin.options.address = res.data;
}

export let meldCoin = new web3.eth.Contract(meldCoinAbi);
export let secureToken = new web3.eth.Contract(secureTokenAbi);

contractInit();
