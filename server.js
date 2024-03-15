const express = require("express");
const precautions = require("./precautions.js");

const app = express();
let personData = {};
app
  .route("/precautions/short")
  .post(async (req, res) => {
    personData.lat = req.body["lat"];
    personData.lon = req.body["lon"];
    personData.pData = req.body["data"];
    console.log(personData);
    next();
  })
  .get(async (req, res) => {
    const response = await precautions.short(personData);
    console.log(req.socket.address());
    res.send(JSON.parse(response.text()));
  });

app
  .route("/precautions/long")
  .post(async (req, res) => {
    personData.lat = req.body["lat"];
    personData.lon = req.body["lon"];
    personData.pData = req.body["data"];
    console.log(personData);
    next();
  })
  .get(async (req, res) => {
    const response = await precautions.long(personData);
    console.log(req.socket.address());
    res.send(JSON.parse(response.text()));
  });

app.listen(3000);
