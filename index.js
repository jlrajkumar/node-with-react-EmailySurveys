const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');

require('./models/user');  
const passportConfig = require('./services/passport');

mongoose.connect(keys.mongoURI);


const app = express(); //All the route handlers we are going to create over time will be associated
// or somehow registered with "app" obj here

 app.use( 
     cookieSession({
         maxAge: 30 * 24 * 60 *60 * 1000,
         keys:[keys.cookieKey]
     })
 );

 app.use(passport.initialize());
 app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);   
