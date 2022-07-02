
const passport =require('passport')
const GoogleStrategy = require
('passport-google-oauth20').Strategy;

const keys = require('./keys')
const User = require('../models/user');

passport.serializeUser((User,done)=>{
    //user id created by mondodb
    done(null,User.id) 
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((User)=>{
        done(null,User)
    })
})

passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  },
  
  (accessToken,refreshToken,profile,done)=>{
    //checks if the user exists in the db
    User.findOne({
        googleId:profile.id
    }).then((crntUser)=>{ 
        if(crntUser){
            //exists
            console.log('user is:', crntUser)
            done(null,crntUser)
        }
        else{
            // doesnt exists = creates new user
            new User({
                username:profile.displayName,
                googleId: profile.id
            }).save().then((newUser)=>{
                console.log('user created'+newUser)
                done(null,newUser)
            })
        }
    })
  })
)
