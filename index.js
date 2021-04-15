const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const connectDB = require ('./services/db_js');
require('./models/user');  
const passportConfig = require('./services/passport');
const dev = require('./config/dev');

const keys_params = {
  googleClientID: '68250754070-leb3b9l6llkjt4kcm88n3335ejac7s5o.apps.googleusercontent.com',
  googleClientSecret: 'tUnIvYL4ALar5TiUzWV6VdQd' ,
  mongoURI: 'mongodb+srv://jlrsurveys:Logmein1@jlrsurveys.6zsht.mongodb.net/Emaily?retryWrites=true&w=majority',
  cookieKey:'lrjaddu@soltex'
};

/*mongoose.connect(keys_params.mongoURI , 
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });*/

  connectDB();

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
