const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();
mongoose.connect(
  'mongodb+srv://atanas:' + process.env.MONGO_ATLAS_PW + '@cluster0.iexxm.mongodb.net/postsDb?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Success. Connected to db.");
  })
  .catch(() => {
    console.log("Connection to db failed!");
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-MEthods',
                  'GET, POST, PATCH, DELETE, PUT, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")));
app.use("/", express.static(path.join(__dirname, "agnular")));

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__direname, "angular", "index.html"));
}); // taken by angular

module.exports = app;
