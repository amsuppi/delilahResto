const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const $sequelize = require('sequelize');
const sequelize = new $sequelize('mysql://mari:suppi@localhost:8889/data_base');

const jwt = require('jsonwebtoken');

app.use(bodyParser.json());

(sequelize, $equelize) => {
    const User = sequelize.define("users", {
      email: {
        type: $equelize.STRING
      },
      pass: {
        type: $equelize.STRING
      }
    });
  
    return User;
  };