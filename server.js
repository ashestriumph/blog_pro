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

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("mernblog"); // connect to the database
    await operations(db); // perform the operations
    client.close(); // close the connection
  } catch (error) {
    res.status(500).json({ massage: "Error connecting to database", error }); // send an error response
  }
};

app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name; // destructure the request params

    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName }); // get article the collection
    res.status(200).json(articleInfo); // send the article
  }, res);
});

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body; // destructure the request body
  const articleName = req.params.name; // destructure the request params

  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    await db.collection('articles').updateOne({name: articleName}, {
      $set: {
        comments: articleInfo.comments.concat({ username, text }),
      },
    });
    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(updatedArticleInfo); // send the updated article
  }, res);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // log the server start
});
