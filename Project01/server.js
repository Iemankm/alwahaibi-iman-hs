const express= require('express')
const swaggerUI = require('swagger-ui-express')

// const mongoose = require('mongoose')
// const morgan = require('morgan')
// const bodyParser = require('body-parser')
const swaggerJSDoc = require('swagger-jsdoc')

const app = express();
app.get('/',(req1,res1)=>{
    res1.send('<a href="/auth/google">Authenticate with Google</a>')
});

 app.get('/protected',(req2,res2)=>{
    res2.send("hello");
 });

 


const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Library API",
        version: '1.0.0',
      },
    },
    apis: ["server.js"],
  };
  
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  
  /**
   * @swagger
   * /users:
   *   get:
   *     description: Get all users
   *     responses:
   *       200:
   *         description: Success
   * 
   */
  app.get('/users', (req, res) => {
    res.send([
      {
        id: 1,
        name: "Iman",
        password: "123"
      }
    ])
  });
  
  /**
   * @swagger
   * /users:
   *   post:
   *     description: Get all users
   *     parameters:
   *      - name: name
   *        description: name of the user
   *        in: formData
   *        required: true
   *        type: string
   *      - name: password
   *        description: password of the user
   *        in: formData
   *        required: true
   *        type: password
   *     responses:
   *       201:
   *         description: Created
   */
  app.post('/users', (req, res) => {
    res.status(201).send();
  });
  

  /**
   * @swagger
   * /blogs:
   *   get:
   *     description: Get all blogs
   *     responses:
   *       202:
   *         description: Success
   * 
   */
   app.get('/blogs', (req, res) => {
    res.send([
      {
        id: 1,
        BlogTitle: "Blog01",
        Detailes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      }
    ])
  });
  
  /**
   * @swagger
   * /blogs:
   *   post:
   *     description: Get all blogs
   *     parameters:
   *      - name: BlogTitle
   *        description: blog title
   *        in: formData
   *        required: true
   *        type: string
   *      - name: details
   *        description: blog
   *        in: formData
   *        required: true
   *        type: string
   *     responses:
   *       203:
   *         description: Created
   */
  app.post('/blogs', (req, res) => {
    res.status(203).send();
  });
  


const PORT = process.env.PORT|| 3000

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})


// mongoose.connect('mongodb://127.0.0.1/Project01db')
// const db = mongoose.connection



// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())



// db.on('connected',()=>{
//     console.log('Database Connected!')
// })

// db.on('disconnected',()=>{
//     console.log('Database Disconnected!')
// })

// db.on('error',(err)=>{
//     console.log(err)
// })



