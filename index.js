const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');

require('./models/user');  
const passportConfig = require('./services/passport');

mongoose.connect(keys.mongoURI);


const app = express(); //All the route handlers we are going to create over time will be associated
// or somehow registered with "app" obj here



authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);   
