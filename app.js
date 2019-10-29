const express = require("express")
const bodyParser = require('body-parser');

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/v1', (req, res, next) => {
    const massage = {
        message: "welcome to Teamwork"
    }
    res.status(200).json(massage);
});
module.exports = app