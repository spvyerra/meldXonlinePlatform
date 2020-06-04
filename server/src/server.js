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

    let newBus = req.body;
    newBus.id = general.length;
    console.log(newBus);

    let address = await bus.deploySecureToken(newBus);
    console.log(`Deployed at ${address}`);

    newBus.address = address;
    general.push({
        "id": newBus.id,
        "busName": newBus.busName,
        "symbol": newBus.symbol
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
    let thing = order.checkRequests();

    if (thing == null) {
        order.addBuy();
    } else {
        mc.transfer();
        bus.transfer();
    }

    // Remove order from orders.json
});

// When user wants to sell tokens this request is called
app.post("/transfer/sell", async (req, res) => {

});

// Pending orders of specific user
app.get('transfer/pending', (req, res) => {

});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Running on port " + port));
