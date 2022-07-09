import {Router, Request, Response} from 'express'
import blog from '../models/blogs';
const router = Router();


router.route('/new').get((req:Request,res:Response)=>{
    res.render('blogs/new')
})
.post(async(req:Request,res:Response)=>{
    const title = req.body.title;
    const Blog = req.body.Blog;
    const newBlog = new blog({title,Blog});
    await newBlog.save();
    res.redirect('/blogs/list')
})

router.route('/list').get(async(req:Request,res:Response)=>{
    const blogs = await blog.find();
    res.render('blogs/list', {blogs:blogs});
})

router.route('/delete/:id').get(async(req:Request,res:Response)=>{
    const {id} = req.params;
    await blog.findByIdAndDelete(id);
    res.redirect('/blogs/list');
})

router.route('/edit/:id').get(async(req:Request,res:Response)=>{
    const {id} = req.params;
    const Blog = await blog.findById(id);
    res.render('blogs/edit',{Blog})
})
.post(async(req:Request,res:Response)=>{
    const {id} = req.params;
    const title = req.body.title;
    const Blog = req.body.Blog;
    blog.findByIdAndUpdate(id,{title,Blog});
    res.redirect('/blogs/list');
})

export default router;