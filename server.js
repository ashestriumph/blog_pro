const express = require('express'); // import express
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
  }
}

// Initialize middleware
// Middleware to parse JSON bodies
app.use(express.json({extended: false})); // parse JSON bodies
// app.use(express.urlencoded({ extended: false })); // parse URL-encoded bodies

// Test route
// app.get('/', (req, res) => {
//   res.send('Hello World!'); // send a response
// });
// app.post('/', (req, res) => {
//   res.send(`Hello ${req.body.name}`); // send a response
// });
// app.get('/hello/:name', (req, res) => {
//   res.send(`Hello ${req.params.name} from params name`); // send a response
// });


app.post('/api/articles/:name/add-comments', (req, res) => {
  const {username, text} = req.body; // destructure the request body
  const articleName = req.params.name; // destructure the request params
  articleInfo[articleName].comments.push({username, text}); // push the comment to the article
  res.status(200).send(articleInfo[articleName]); // send a response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // log the server start
});