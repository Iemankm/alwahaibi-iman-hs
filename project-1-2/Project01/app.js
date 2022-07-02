const express = require ('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const formr = require('./routes/form')
const passportSetup = require('./config/passport')
const keys = require('./config/keys')
const session = require('express-session')
const passport = require ('passport')

const app = express()

//set up view engine
app.set('view engine', 'ejs')

//encrypt the cookie (id)
app.use(session({
    maxAge:24 * 60 * 60 *1000, // a day 
    secret:[keys.session.cookieKey],
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

//connecting to mongodb
mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('connected')
})


//routes
app.use('/auth',authRoutes);
app.use('/formPage', formr);


//home route
app.get('/',(req,res)=>{
    res.render('home',{User:req.User});
})



const PORT = process.env.PORT|| 3000

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})
