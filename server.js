const express = require('express'); // import express
const app = express(); // create an express app
const PORT = process.env.PORT || 8000; // set the port

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!'); // send a response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // log the server start
});