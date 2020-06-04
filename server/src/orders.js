const fs = require('fs');

const orderPath = "../assets/orders.json";

let addBuy = (obj) => {
    let master = JSON.parse(fs.readFileSync(orderPath));
    obj.id = master["buy"].length;
    master["buy"].push(obj);

    fs.writeFileSync(orderPath, JSON.stringify(master, null, 4));
}

let addSell = (obj) => {
    let master = JSON.parse(fs.readFileSync(orderPath));
    obj.id = master["sell"].length;
    master["sell"].push(obj);

    fs.writeFileSync(orderPath, JSON.stringify(master, null, 4));
}

let checkRequests = async (_contract, _orderType, _amount, price) => {
    const master = JSON.parse(fs.readFileSync(orderPath));
    const list = master[_orderType];

    for (let i in list) {
        if (list[i].contract == _contract && list[i].amount == _amount && list[i].price == price) {
            let tmp = list[i];
            delete list[i];

            master[_orderType] = list.filter((obj) => obj);
            fs.writeFileSync(orderPath, JSON.stringify(master, null, 4));
            return tmp;
        }
    }

    return null;
}

let pendingOrders = (address) => {
    const master = JSON.parse(fs.readFileSync(orderPath));
    let list = {
        "buy": [],
        "sell": []
    };

    for (let i in master.buy) {
        if (master.buy[i].userAddress == address)
            list["buy"].push(master.buy[i]);
    }

    for (let i in master.sell) {
        if (master.sell[i].userAddress == address)
            list["sell"].push(master.sell[i]);
    }

    return list;
}

module.exports = {
    addBuy,
    addSell,
    checkRequests,
    pendingOrders
};