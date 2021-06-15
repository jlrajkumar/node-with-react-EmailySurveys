const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const bodyParser = require('body-parser');

require('./models/user');  
const passportConfig = require('./services/passport');
const dev = require('./config/dev');
const billingRoutes = require('./routes/billingRoutes');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect(dev.mongoURI , options)
        .then(()=>{console.log("connected to JLR Surveys MongoDB")})
        .catch(err => console.log(err));
        

const app = express(); //All the route handlers we are going to create over time will be associated
// or somehow registered with "app" obj here

app.use(bodyParser.json());

 app.use( 
     cookieSession({
         maxAge: 30 * 24 * 60 *60 * 1000,
         keys:[keys.cookieKey]
     })
 );

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){

  app.use(express.static('client/build')); //To serve prod assets like main.js, main.css

  const path =require('path'); //Express to serve indexedDB.html if it doesn't recognize the route

  app.get('*', (req, res) =>{ 
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}

const PORT = process.env.PORT || 5000;

app.listen(PORT);   
