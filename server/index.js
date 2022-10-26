const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

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
  // console.log(db);
  const animalsColl = db.collection("animals");
  let animalsCollection = await animalsColl.find({}).toArray();
  console.log(animalsCollection);

  res.send("Welcome to the homepage");
});

async function start() {
  // await client.connect();
  // const db = client.db(dbName);

  //  const animalsColl = db.collection('animals');
  //  let animalsCollection = await animalsColl.find({}).toArray()
  //  console.log(animalsCollection);

  app.listen(3000);
}

start();
