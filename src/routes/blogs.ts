import { Router, Request,Response, request, response } from "express";
import blogs from '../models/blogs'
const router = Router();


 
router.route('/new').get((reg:Request, res:Response)=>{
    res.render('blogs/new')
})
.post(async(req:Request,res:Response)=>{
    const {title,Blog} = req.body;
    const newBlog = new blogs({title,Blog});
    await newBlog.save();
    res.redirect('/blogs/list')
});


router.route('/list').get(async(req:Request,res:Response)=>{
    const bblogs = await blogs.find({}).lean();
    res.render('blogs/list', {bblogs});
})

router.route('/delete/:id').get(async(req:Request,res:Response)=>{
    const {id} = req.params;
    await blogs.findByIdAndDelete(id).lean();
    res.redirect('/blogs/list')
})


router.route('/edit/:id').get(async(req:Request,res:Response)=>{
    const {id} = req.params;
    const bblogs = await blogs.findById(id).lean();    
    res.render('blogs/edit',{bblogs})
})
.post(async(req:Request,res:Response)=>{
    const {id} = req.params;
    const {title,Blog} = req.body;
   await blogs.findByIdAndUpdate(id,{title,Blog}).lean();
   res.redirect('/blogs/list');
});


export default router;