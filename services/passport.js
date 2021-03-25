const passport =  require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy ; 
const mongoose = require('mongoose');
const keys = require('../config/keys');


 const User = mongoose.model('users');

 passport.serializeUser((user, done) => {
        done(null, user.id);
 });


 passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});


//Passport
passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    //proxy: true
   
}, 
 (accessToken, refreshToken, profile, done) => {

User.findOne({ googleId:profile.id }) //Looks through user collection and find the 1st record inside that colln with googleid of profile id.
      .then((existingUser) =>  {
        if(existingUser){
          //we already have user with google id  
          done(null, existingUser);
        }
        else{
          //no  user found with this google id , we need to create a new record. 
          new User({ googleId:profile.id })
              .save()
              .then(user => done(null, user));
        }
      } );
   
})
); 