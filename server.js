const express = require('express');
const app = express();
const path = require('path');
const donut = require('./json');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', (request, response) => {
  response.status(200).json(donut);
});

app.use((request, response) => {
  response.status(404);
  response.render('404.jade', {title: '404: File Not Found' });
})

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});
