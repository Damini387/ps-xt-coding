const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const express = require("express");
const app = express();

const axios = require("axios");
const cors = require('cors');

app.use(cors({ origin: true }));

app.get("/allDetails", (req, res) => {
    axios.get('https://api.spacexdata.com/v3/launches?limit=100')
        .then(response => {
            return res.send({ data: response.data });
        })
        .catch(err => {
            console.log(err);
        });
});

app.get("/", (req, res) => {
    res.send("Hurray!!!!! It's working!")
});

exports.api = functions.https.onRequest(app);

exports.all = functions.https.onRequest((req, res) => {
    axios.get('https://api.spacexdata.com/v3/launches?limit=100')
        .then(response => {
            return res.send({ data: response.data });
        })
        .catch(err => {
            console.log(err);
        });
});