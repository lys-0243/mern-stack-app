const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
app.set("view engine", "ejs");
app.set("views", "./views");

async function connectDb() {
  const url = "mongodb://localhost:27017";
  const client = new MongoClient(url);
  const dbName = "mern_stack";
  await client.connect();
  const db = client.db(dbName);

  return db;
}

app.get("/", async (req, res) => {
  db = await connectDb();
  const animalsCollection = await db.collection("animals").find({}).toArray();
  res.render("home", {animalsCollection});
});

async function start() {
  app.listen(3000);
}

start();
