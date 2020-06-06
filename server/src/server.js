const express = require('express');
const fs = require('fs');

const mc = require('./meldCoin');
const order = require('./orders');
const bus = require('./businessSide');

const overall = './server/assets/bus.json';
const breakDown = './server/assets/busBreak';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/list', (req, res) => {
    const raw = fs.readFileSync(overall);
    const data = JSON.parse(raw);

    res.status(200).json(data);
});

app.get('/list/:id', (req, res) => {
    const id = req.params.id;

    const raw = fs.readFileSync(breakDown + `/${id}.json`);
    const data = JSON.parse(raw);

    res.status(200).json(data);
});

app.post('/bus/add', async (req, res) => {
    const raw = fs.readFileSync(overall);
    let general = JSON.parse(raw);

    let newBus = req.body.busObj;
    newBus.id = general.length;
    console.log(newBus);

    let address = await bus.deploySecureToken(newBus);
    console.log(`Deployed at ${address}`);

    newBus.address = address;
    general.push({
        "id": newBus.id,
        "busName": newBus.busName,
        "symbol": newBus.symbol,
        "numShares": newBus.numShares,
        "pricePerShare": newBus.pricePerShare
    });

    const newRaw = JSON.stringify(newBus, null, 4);
    fs.writeFileSync(breakDown + `/${newBus.id}.json`, newRaw);

    const newOverall = JSON.stringify(general, null, 4);
    fs.writeFileSync(overall, newOverall);


    res.status(200).json(newBus);
});

// New Users
app.post('/user/add', async (req, res) => {
    let address;

    address = await mc.addVerify(req.body);

    res.status(200).json(address);
});

// Minting tokens to user
app.post('/user/deposit', async (req, res) => {
    let address = req.body.userAddress;
    let amt = req.body.amt;

    let stableAddress = await mc.mintTokens(address, amt);

    res.status(200).json(stableAddress);
});

// Transfer requests
// When user wants to buy tokens this request is called
app.post('/transfer/buy', async (req, res) => {
    let buyer = req.body;
    order.orderMatch(buyer.contract, "sell", buyer.amount, buyer.price)
        .then(async (seller) => {
            if (seller == null) {
                order.addBuy(buyer);
                console.log("Placing buy order")

                buyer.status = "Placed";
                res.status(200).json(buyer);
            } else {
                await mc.transfer(seller.userAddress, buyer.userAddress, buyer.price * buyer.amount);
                await bus.transfer(buyer.userAddress, seller.userAddress, seller.amount, buyer.contract);
                console.log("Completing order");

                buyer.status = "Completed";
                res.status(200).json(buyer);
            }
        });
});

// When user wants to sell tokens this request is called
app.post("/transfer/sell", async (req, res) => {
    let seller = req.body;
    order.orderMatch(seller.contract, "buy", seller.amount, seller.price)
        .then(async (buyer) => {
            if (buyer == null) {
                seller.status = "Placed";
                order.addSell(seller);

                console.log("Placing sell order");
                res.status(200).json(seller);
            } else {
                await mc.transfer(seller.userAddress, buyer.userAddress, buyer.price * buyer.amount);
                await bus.transfer(buyer.userAddress, seller.userAddress, seller.amount, seller.contract);
                console.log("Completing order");

                seller.status = "Completed";
                res.status(200).json(seller);
            }
        });
});

// Pending orders of specific user
app.put('/transfer/pending', (req, res) => {
    let list = order.pendingOrders(req.body.userAddress);

    req.body.pending = list;
    res.status(200).json(req.body);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Running on port " + port));
