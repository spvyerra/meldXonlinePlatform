const fs = require('fs');
const mc = require('./meldCoin');
const bus = require('./businessSide');

const orderPath = "../assets/orders.json";

let addBuy = () => { 

}

let addSell = () => { }

let checkRequests = async (_contract, _orderType, _amount) => {
    const master = JSON.parse(fs.readFileSync(orderPath));
    const list = master[_orderType];

    for (let i in list) {
        if (list[i].contract == _contract && list[i].amount == _amount) {
            let tmp = list[i];
            console.log("Supposed to delete entry");

            master[_orderType] = list.filter((obj) => obj);
            fs.writeFileSync(orderPath, JSON.stringify(master, null, 4));
            return tmp;
        }
    }


}

let pendingOrders = () => {

}

module.exports = {
    addBuy,
    addSell,
    checkRequests
};