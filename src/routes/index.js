const express = require('express');
const storyRoutes = require('./storyRoutes');
const playerRoutes = require('./playerRoutes');

const v1Router = express.Router();

v1Router.use('/stories', storyRoutes);
v1Router.use('/players', playerRoutes);

module.exports = v1Router;
