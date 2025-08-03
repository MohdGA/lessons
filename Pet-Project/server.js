const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const petController = require('./controllers/pets');
const cors = require("cors");

// mongodb connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


// middleware
app.use(cors({ origin: 'http://localhost:5173' }));app.use(express.json());
app.use(logger('dev'));


// routes
app.get('/', (req,res) => {
  res.send('<h1> HELLO WORLD </h1>')
});

app.use('/pets', petController);


// server
const port = process.env.port ? process.env.port : 3000;
app.listen(port, () => {
  console.log('The express app is ready!');
});