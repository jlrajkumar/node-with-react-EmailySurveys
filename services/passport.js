const passport =  require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy ; 
const mongoose = require('mongoose');
 const keys =require('../config/keys');


 const User = mongoose.model('users');

//Passport
passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'http://localhost:5000/auth/google/callback'
   
}, 
 (accessToken, refreshToken, profile, done) => {
   new User({ googleId:profile.id })
    console.log('Profile:', profile);
})
); 