import {Router, Request, Response} from 'express'

const router = Router();

const authCheck = (req, res, next) => {
    if(req.user===false){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('index', { User: req.user });
});

export default router;





// router.get('/',(req:Request,res:Response)=>{
//     res.render('index');
// });


