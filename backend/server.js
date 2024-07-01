const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3000;
console.log(process.env.MONGO_PW);
const mongoConnection = new MongoClient.MongoClient(
  `mongodb+srv://tsapintrading:${process.env.MONGO_PW}@pin-trading.tjbt9jx.mongodb.net/?retryWrites=true&w=majority&appName=Pin-Trading`
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post("/getPinInfo", async (req, res) => {
  const pinInfo = await findPinInfo();
  try {
    res.status(200).json({message: pinInfo});
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

async function findPinInfo() {
  try {
    await mongoConnection.connect();
    const db = mongoConnection.db("Conferences");
    const conference = db.collection("Florida 2024");
    const pin = await conference.find({}).toArray();
    return pin;
  }
  catch (error) {
    return `Error: ${error}`;
  }
}
