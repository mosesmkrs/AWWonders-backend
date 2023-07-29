
const express = require('express');
const workoutRoutes = require('../routes/workouts');
const app = express();
app.use(express.json());
app.use(workoutRoutes);
module.exports = app;
