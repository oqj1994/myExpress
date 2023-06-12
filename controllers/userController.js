const fs = require('fs');
const config = require('../config');
const readFile = (name) =>
  fs.readFileSync(`${config.FILE_PATH}${name}`, 'utf-8');
const usersData = readFile('/users.json');
const users = JSON.parse(usersData);
exports.getAllUsers = (req, res) => {
  return res.status(200).json({
    status: 'success',
    requestTime: req.requestTime,
    result: users.length,
    data: {
      users,
    },
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'not yet defind ',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'not yet defind ',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'not yet defind ',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'not yet defind ',
  });
};
