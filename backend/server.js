const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3000;
const mongoConnection = new MongoClient.MongoClient(
  `mongodb+srv://tsapintrading:${process.env.MONGO_PW}@pin-trading.tjbt9jx.mongodb.net/?retryWrites=true&w=majority&appName=Pin-Trading`
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post("/getPinInfo", async (req, res) => {
  const pinInfo = await findPinInfo();
  try {
    res.status(200).json({ message: pinInfo });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//Get Pin Info for Main Page
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

app.post("/getNavAmounts", async (req, res) => {
  const user = req.body.user;
  const [cartAmount, notificationAmount] = await findNavAmounts(user);
  try {
    res.status(200).json({ message: "Success", cart: cartAmount, notification: notificationAmount });
  } catch (error) {
    res.status(500).json({ message: "Server error", cart: 0, notification: 0 });
  }
});

//Get Amount of Cart Items for Navbar
async function findNavAmounts(username) {
  try {
    await mongoConnection.connect();
    let db = mongoConnection.db("User-Info");
    let collection = db.collection("Users");
    let user = await collection.findOne({ username: username });
    db = mongoConnection.db("Notifications");
    collection = db.collection("Notifications");
    let notifications = await collection.find({ user: username, status: "Unread" }, { projection: { notification: 1, _id: 0 } }).toArray();
    user.notification = [...notifications];
    return [user.cart.length, user.notification.length];
  }
  catch (error) {
    return `Error: ${error}`;
  }
}
findNavAmounts("Z-Money");