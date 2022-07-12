import express from "express"
import morgan from 'morgan'
import path from 'path'
import { create } from "express-handlebars";
const keys = require('./config/keys')
const session = require('express-session')
const passport = require ('passport')
const authRoutes = require('./routes/auth')
const formr = require('./routes/index')


import indexRoute from './routes/index'
import blogRoute from './routes/blogs'



class Application{
    app:express.Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port',3000);
        this.app.set("views", path.join(__dirname, "views"));
    this.app.engine(
      ".hbs",
      create({
        layoutsDir: path.join(this.app.get("views"), "layouts"),
        partialsDir: path.join(this.app.get("views"), "partials"),
        defaultLayout: "main",
        extname: ".hbs",
      }).engine
    );
    this.app.set("view engine", ".hbs");
    }

    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }

    routes(){
        this.app.use(indexRoute);
        this.app.use('/blogs',blogRoute);
        // this.app.use('/auth',authRoutes);
        // this.app.use('/formPage', formr);
        this.app.use(express.static(path.join(__dirname,'p')));
    }

    start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log('server is running on port',this.app.get('port'))
        });
    }
}

export default Application;