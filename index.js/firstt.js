const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const bodyParser = require('body-parser');
const port = 3000;

const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB URI

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
    res.send('The response just came from backend!');
  });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
    });