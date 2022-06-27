const passport =require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID='301945864302-ss4ela9dmb804dllp8tsm6q08uj331d7.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET= '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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback : true
  },
  function(request,accessToken, refreshToken, profile, done) {
      return done(err, profile);
    
  }
));

passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})