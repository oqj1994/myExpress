const express = require('express');
const userRouter = require('.\\router\\userRouter');
const tourRouter = require('.\\router\\tourRouter');

app = express();
const morgan = require('morgan');

//1.)middleware
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('mesage from middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//3)routes

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

//4)start server
module.exports = app;
