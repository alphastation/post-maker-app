
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('./models/post.js')
const Post = require('./models/post.js')

const app = express();
const dbName = 'posts';
const connectionString = `mongodb://localhost:27017/${dbName}`;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  // autoIndex: false
}).then(() => {
  console.log('db connection is fine!')
}).catch(() => {
  console.log('db connection  failed')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  // const post = req.body;
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  // console.log(post);
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get("/api/posts", (req, res, next) => {
  // const posts = [
  //   {
  //     id: "fadf12421l",
  //     title: "First server-side post",
  //     content: "This is coming from the server"
  //   },
  //   {
  //     id: "ksajflaj132",
  //     title: "Second server-side post",
  //     content: "This is coming from the server!"
  //   }
  // ];
  Post.find().then((documents) => {
    // console.log(documents)
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  })

});

module.exports = app;

