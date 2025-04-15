const { count } = require("console");
const express = require("express"); // import express
const { MongoClient } = require("mongodb");
const app = express(); // create an express app
const PORT = process.env.PORT || 8000; // set the port

const articleInfo = {
  "learn-react": {
    comments: [],
  },
  "learn-node": {
    comments: [],
  },
  "my-thoughts-on-learning-react": {
    comments: [],
  },
};

// Initialize middleware
// Middleware to parse JSON bodies
app.use(express.json({ extended: false })); // parse JSON bodies

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name; // destructure the request params
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("mernblog"); // connect to the database
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName }); // get article the collection
    res.status(200).json(articleInfo); // send the article
    client.close(); // close the connection
  } catch (error) {
    res.status(500).json({ massage: "Error connecting to database", error }); // send an error response
  }
});

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body; // destructure the request body
  const articleName = req.params.name; // destructure the request params
  articleInfo[articleName].comments.push({ username, text }); // push the comment to the article
  res.status(200).send(articleInfo[articleName]); // send a response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // log the server start
});
