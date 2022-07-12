"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_1 = __importDefault(require("../models/blog"));
const router = (0, express_1.Router)();
router.route('/new').get((req, res) => {
    res.render('blogs/new');
})
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body.title;
    const Blog = req.body.Blog;
    const newBlog = new blog_1.default({ title, Blog });
    yield newBlog.save();
    res.redirect('/blogs/list');
}));
router.route('/list').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blog_1.default.find();
    res.render('blogs/list', { blogs: blogs });
}));
router.route('/delete/:id').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield blog_1.default.findByIdAndDelete(id);
    res.redirect('/blogs/list');
}));
router.route('/edit/:id').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Blog = yield blog_1.default.findById(id);
    res.render('blogs/edit', { Blog });
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const title = req.body.title;
    const Blog = req.body.Blog;
    blog_1.default.findByIdAndUpdate(id, { title, Blog });
    res.redirect('/blogs/list');
}));
exports.default = router;
