const router = require('express').Router();
const passport = require('passport')

// login
router.get('/login', (req, res) => {
    res.render('login', { User: req.User });
});

// logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logout();
    res.redirect('/');
});

// google
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

//callback for google
router.get('/google/redirect',passport.authenticate('google'), (req,res)=>{
    res.redirect('/formPage/');
})

module.exports = router;
