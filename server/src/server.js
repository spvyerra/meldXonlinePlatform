const express = require('express');
const fs = require('fs');

const mc = require('./meldCoin');
const order = require('./orders');
const bus = require('./businessSide');
const port = require('./portfolio');

const overall = './server/assets/bus.json';
const breakDown = './server/assets/busBreak';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/Meld/Address', (req, res) => {
    res.status(200).json(mc.stableAddress);
});

app.get('/list', (req, res) => {
    const raw = fs.readFileSync(overall);
    const data = JSON.parse(raw);

    res.status(200).json(data);
});

app.get('/list/:id', (req, res) => {
    try {
        const id = req.params.id;

        const raw = fs.readFileSync(breakDown + `/${id}.json`);
        const data = JSON.parse(raw);

        res.status(200).json(data);
    } catch (err) {
        res.status(409).json("Error occured");
        res.status(409).json(err);
    }
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
        "pricePerShare": newBus.pricePerShare,
    });

    port.addShares(newBus.ownerAddress, newBus.id, newBus.numShares);

    const newRaw = JSON.stringify(newBus, null, 4);
    fs.writeFileSync(breakDown + `/${newBus.id}.json`, newRaw);
    
    fs.writeFileSync(overall, JSON.stringify(general, null, 4));

    res.status(200).json(newBus);
});

// New Users
app.post('/user/add', async (req, res) => {
    try {
        let address;

        address = await mc.addVerify(req.body);

        res.status(200).json(address);
    } catch (err) {
        res.status(409).json("Error occured");
        res.status(409).json(err);
    }
});

// Minting tokens to user
app.post('/user/deposit', async (req, res) => {
    try {
        let address = req.body.userAddress;
        let amt = req.body.amt;

        let stableAddress = await mc.mintTokens(address, amt);

        res.status(200).json(stableAddress);
    } catch (err) {
        res.status(409).json("Error occured");
        res.status(409).json(err);
    }
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
                await bus.addVerify(buyer);
                await mc.transfer(seller.userAddress, buyer.userAddress, buyer.price * buyer.amount);
                await bus.transfer(buyer.userAddress, seller.userAddress, seller.amount, buyer.contract);
                
                port.removeShares(seller.userAddress, buyer.id, seller.amount);
                port.addShares(buyer.userAddress, buyer.id, buyer.amount);

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
                
                port.removeShares(seller.userAddress, seller.id, seller.amount);
                port.addShares(buyer.userAddress, seller.id, buyer.amount);

                console.log("Completing order");

                seller.status = "Completed";
                res.status(200).json(seller);
            }
        });
});

// Pending orders of specific user
app.put('/transfer/pending', (req, res) => {
    try {
        let list = order.pendingOrders(req.body.userAddress);

        req.body.pending = list;
        res.status(200).json(req.body);
    } catch (err) {
        res.status(409).json("Error occured");
        res.status(409).json(err);
    }
});

app.get('/portfolio/:address', (req, res) => {
    const address = req.params.address;
    const portfolio = port.getPortfolio(address);

    res.status(200).json(portfolio);
});

const portRun = process.env.PORT || 8080;
app.listen(portRun, () => console.log("Running on port " + portRun));
