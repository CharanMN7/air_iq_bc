const express = require("express");
const precautions = require("./precautions.js");

const app = express();

app.use(express.json());

let personData = {};

const handlePost = async (data, type) => {
  personData["lat"] = data["lat"];
  personData["lon"] = data["lon"];
  personData["pData"] = data["pData"];

  let response;
  if (type == "short") {
    response = await precautions.short(personData);
  }
  if (type == "long") {
    response = await precautions.long(personData);
  }
  let finalData = {};
  try {
    finalData = JSON.parse(response.text());
  } catch (err) {
    console.log("Take a look: ", err);
  }
  return finalData;
};

app.post("/precautions/short", async (req, res) => {
  console.log(req.socket.address());
  res.send(await handlePost(req.body, "short"));
});

app.post("/precautions/long", async (req, res) => {
  console.log(req.socket.address());
  res.send(await handlePost(req.body, "long"));
});

app.listen(3000);
