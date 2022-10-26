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
  const animalsCollection = await db.collection("animals").find({}).toArray();

  res.send(`<h1>Bienvenu sur la page</h1> ${animalsCollection.map(animal =>`<p>${animal.name} - ${animal.espece}</p>`).join('')}`);
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
