
const passport =require('passport')
const GoogleStrategy = require
('passport-google-oauth20').Strategy;

const keys = require('./keys')
const User = require('../models/user');

passport.serializeUser((User,done)=>{
    //user id created by mondodb
   return done(null,User.id) 
})

passport.deserializeUser((id,done)=>{
        User.findById(id, (err,User)=>done(err.User))
    
})

passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  },
  
  async (accessToken, refreshToken, profile, done) => {
    const newUser = {
      googleId: profile.id,
      name: profile.name,
    }

    try {
      let user = await User.findOne({ googleId: profile.id })

      if (user) {
        done(null, user)
      } else {
        user = await User.create(newUser)
        done(null, user)
      }
    } catch (err) {
      console.error(err)
    }
  }
)
)

