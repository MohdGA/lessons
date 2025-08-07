const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const JwtRouter = require('./controllers/test-jwt');
const authController = require('./controllers/auth');
const verifyToken = require('./middleware/verify-token')
const userRouter = require('./controllers/users');
const hootsRouter = require('./controllers/hoot');


mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Public Routes
app.get('/', (req,res) => {
  res.json('home page')
});

app.use('/auth', authController);
app.use('/jwt', JwtRouter);
app.use('/users', userRouter);
app.use('/hoots',hootsRouter)


const port = process.env.port ? process.env.port : 3000;
app.listen(port, () => {
  console.log('The express app is ready!');
});
