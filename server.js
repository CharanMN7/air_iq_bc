const express = require("express");
const precautions = require("./precautions.js");

const app = express();

app.use(express.json());

let personData = {};
app.post("/precautions/short", async (req, res) => {
  personData["lat"] = req.body["lat"];
  personData["lon"] = req.body["lon"];
  personData["pData"] = req.body["data"];
  console.log(personData);
  next();
  const response = await precautions.short(personData);
  console.log(req.socket.address());
  res.send(JSON.parse(response.text()));
});

app.post("/precautions/long", async (req, res) => {
  personData["lat"] = req.body["lat"];
  personData["lon"] = req.body["lon"];
  personData["pData"] = req.body["data"];
  console.log(personData);
  const response = await precautions.long(personData);
  console.log(req.socket.address());
  res.send(JSON.parse(response.text()));
});

app.listen(3000);
