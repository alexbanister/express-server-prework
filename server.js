const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', (request, response) => {
  response.status(200).json({"name": "Robbie"});
});

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});
