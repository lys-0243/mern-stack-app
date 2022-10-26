const express = require("express");
const app = express();
const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client =  new MongoClient(url);
const dbName = 'mern_stack';

async function getData () {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const usersColl = db.collection('users');
    let usersCollection = await usersColl.find({}).toArray()
    const animalsColl = db.collection('animals');
    let animalsCollection = await animalsColl.find({}).toArray()

    console.log( usersCollection );
}

getData()
    // .then(console.log)
    // .catch(console.error)
    // .finally(() => client.close());


// app.listen(3001, () => {
//     console.log('Premier test réussi parfectement');
// })