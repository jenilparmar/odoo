const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
PORT = 8000;
const app = express();
let url = process.env.url;
const dbName = "Vertual_Police";
let db;
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected successfully to MongoDB server");
    db = client.db(dbName);
  })
  .catch((error) => console.error("MongoDB connection error:", error));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("ji");
});
app.post("/CrimeReport", (req, res) => {
  const formData = req.body;
  db.collection("CrimeReport")
    .insertOne(formData)
    .then((data) => {
      res.send("Report Submitted!!");
    })
    .catch((e) => {
      res.send(e);
    });
});
app.post("/UserData", (req, res) => {
  const formData = req.body;
  db.collection("UserData")
    .insertOne(formData)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
