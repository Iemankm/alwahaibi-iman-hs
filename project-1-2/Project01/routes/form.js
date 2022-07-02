const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(req.User===false){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('formPage', { User: req.User });
});

module.exports = router;