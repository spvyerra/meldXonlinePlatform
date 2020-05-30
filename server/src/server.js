const express = require('express');
const fs = require('fs');

const overall = './server/assets/bus.json';
const breakDown = './server/assets/busBreak';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/list', (req, res) => {
    const raw = fs.readFileSync(overall);
    const data = JSON.parse(raw);

    res.status(500).json(data);
});

app.get('/list/:id', (req, res) => {
    const id = req.params.id;

    const raw = fs.readFileSync(breakDown + `/${id}.json`);
    const data = JSON.parse(raw);

    res.status(500).json(data);
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
        "symbol": newBus.symbol
    });

    const newRaw = JSON.stringify(newBus, null, 4);
    fs.writeFileSync(breakDown + `/${newBus.id}.json`, newRaw);

    const newOverall = JSON.stringify(general, null, 4);
    fs.writeFileSync(overall, newOverall);


    res.status(200).json(newBus);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Running on port " + port));
