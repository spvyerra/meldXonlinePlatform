const express = require('express');
const fs = require('fs');

const mc = require('./meldCoin');
const verify = require('./verfied');
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

app.post('/user/add', async (req, res) => {
    let address;

    address = await mc.addVerify(req.body);

    res.status(200).json(address);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Running on port " + port));
