const express = require("express");
const app = express();
const mongoose = require("mongoose")
const UserModel = require('./models/Users')

mongoose.connect("mongodb+srv://sylvain:dipro0243@cluster1.gwadefh.mongodb.net/mern-stack?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });
// app.post()
app.listen(3001, () => {
    console.log('Premier test réussi parfectement');
})