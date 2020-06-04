const express = require('express');
const fs = require('fs');

const overall = './server/assets/bus.json';
const breakDown = './server/assets/busBreak';
const verifyOverall = './server/assets/verified.json';

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

app.post('/bus/add', (req, res) => {
    const raw = fs.readFileSync(overall);
    let general = JSON.parse(raw);

    let newBus = req.body;
    newBus.id = general.length;

    console.log(newBus);

    general.push({
        "id": newBus.id,
        "busName": newBus.busName,
        "symbol": newBus.symbol,
        "type": newBus.type,
        "originalShares": newBus.numShares,
        "description": newBus.description
    });

    const newRaw = JSON.stringify(newBus, null, 4);
    fs.writeFileSync(breakDown + `/${newBus.id}.json`, newRaw);

    const newOverall = JSON.stringify(general, null, 4);
    fs.writeFileSync(overall, newOverall);


    res.status(200).json(newBus);
});
////// Verfication GET
app.get('/verify', (req, res) => {
    const raw = fs.readFileSync(verifyOverall);
    const data = JSON.parse(raw);

    res.status(200).json(data);
});

app.post('/verify/add', (req, res) => {
    const raw = fs.readFileSync(verifyOverall);
    let general = JSON.parse(raw);


    let newVer = req.body;
    newVer.id = general.length;

    console.log(newVer);

    general.push({
        "id": newVer.id,
        "fullName": newVer.fullName,
        "email": newVer.email,
        "address": newVer.address,
        "ssn": newVer.ssn
    });

    const newOverall = JSON.stringify(general, null, 4);
    fs.writeFileSync(verifyOverall, newOverall);

    res.status(200).json(newVer);
});


const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Running on port " + port));

