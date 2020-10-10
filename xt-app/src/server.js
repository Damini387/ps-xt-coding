
const express = require("express");
// import compression from "compression";
const axios = require("axios");
const cors = require("cors");

const app = express();

// app.use(compression());
app.use(express.static("public"));
app.use(cors());


app.get('/allDetails', (req, res) => {
    axios.get('https://api.spacexdata.com/v3/launches?limit=100')
        .then(response => {
            res.send(response.data);
        });
});

// const port = process.env.PORT || 3030;
const port = 3030;
app.listen(port, function listenHandler() {
    console.info(`Running on ${port}...`);
});