const express = require('express');
const fs = require('fs');

const overall = './server/bus.json';

const app = express();
app.use(express.json());

app.get('/list', (req, res) => {
    const raw = fs.readFileSync(overall);
    const data = JSON.parse(raw);

    res.status(500).json(data);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Running on port " + port));
